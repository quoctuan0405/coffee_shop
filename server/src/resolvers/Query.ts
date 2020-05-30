import { Import } from '../utils/Import';
import {QueryResolvers} from "../generated/ResolversType";
import {Context} from "./types/Context";
import {Token} from "../utils/Token";
const mongoose = require('mongoose');

export const Query: QueryResolvers<Context> = {
    async me(parent, args, {prisma, request}, info) {
        const jwt = Token.getContent(request);
        if (!jwt || !jwt.userId || !jwt.role) {
            return null;
        }

        return await prisma.query.user({where: {id: jwt.userId}}, info);
    },

    async users(parent, {query}, {prisma, request}, info) {
        if (query) {
            return prisma.query.users(query, info);
        }

        return prisma.query.users({}, info);
    },

    async ingredients(parent, {query}, {prisma, request}, info) {
        if (query) {
            return await prisma.query.ingredients(query, info);
        }

        return await prisma.query.ingredients({}, info);
    },

    async products(parent, {query}, {prisma, request}, info) {
        if (query) {
            return await prisma.query.products(query, info);
        }

        return await prisma.query.products({}, info);
    },

    async orders(parent, {query}, {prisma, request}, info) {
        if (query) {
            return await prisma.query.orders(query, info);
        }

        return await prisma.query.orders({}, info);
    },

    async imports(parent, {query}, {prisma, request}, info) {
        if (query) {
            return await prisma.query.imports(query, info);
        }

        return await prisma.query.imports({}, info);
    },

    async expenses(parent, {query}, {prisma, request}, info) {
        if (query) {
            return await prisma.query.expenses(query, info);
        }

        return await prisma.query.expenses({}, info);
    },

    async store(parent, args, {prisma, request}, info) {
        return await Import.getStoreReport();
    },

    async yearlyRevenue(parent, args, {prisma, request}, info) {
        return await mongoose.connection.db.collection('Order').aggregate([
            {$unwind: '$products'},
            {$lookup: {
                    from: 'Product',
                    localField: 'products.product',
                    foreignField: '_id',
                    as: 'product'
                }},
            {$project: {
                    createdAt: {$dateToString: {format: "%Y", date: "$createdAt"}},
                    product: {$arrayElemAt: ['$product', 0]},
                    amount: '$products.amount'
                }},
            {$project: {
                    createdAt: 1,
                    price: '$product.price',
                    amount: 1
                }},
            {$group: {
                    _id: "$createdAt",
                    total: {$sum: {$multiply: ['$amount', '$price']}}
                }},
            {$project: {
                    year: '$_id',
                    _id: 0,
                    total: 1
                }},
            {$sort: {year: -1}},
            {$limit: 5},
            {$sort: {year: 1}}
        ]).toArray();
    },

    async monthlyRevenue(parent, args, {prisma, request}, info) {
        return await mongoose.connection.db.collection('Order').aggregate([
            {$unwind: '$products'},
            {$lookup: {
                    from: 'Product',
                    localField: 'products.product',
                    foreignField: '_id',
                    as: 'product'
                }},
            {$project: {
                    createdAt: {$dateToString: {format: "%Y-%m", date: "$createdAt"}},
                    product: {$arrayElemAt: ['$product', 0]},
                    amount: '$products.amount'
                }},
            {$project: {
                    createdAt: 1,
                    price: '$product.price',
                    amount: 1
                }},
            {$group: {
                    _id: "$createdAt",
                    total: {$sum: {$multiply: ['$amount', '$price']}}
                }},
            {$project: {
                    month: '$_id',
                    _id: 0,
                    total: 1
                }},
            {$sort: {month: -1}},
            {$limit: 5},
            {$sort: {month: 1}}
        ]).toArray();
    },

    async dailyRevenue(parent, args, {prisma, request}, info) {
        return await mongoose.connection.db.collection('Order').aggregate([
            {$unwind: '$products'},
            {$lookup: {
                    from: 'Product',
                    localField: 'products.product',
                    foreignField: '_id',
                    as: 'product'
                }},
            {$project: {
                    createdAt: {$dateToString: {format: "%Y-%m-%d", date: "$createdAt"}},
                    product: {$arrayElemAt: ['$product', 0]},
                    amount: '$products.amount'
                }},
            {$project: {
                    createdAt: 1,
                    price: '$product.price',
                    amount: 1
                }},
            {$group: {
                    _id: "$createdAt",
                    total: {$sum: {$multiply: ['$amount', '$price']}}
                }},
            {$project: {
                    day: '$_id',
                    _id: 0,
                    total: 1
                }},
            {$sort: {day: -1}},
            {$limit: 5},
            {$sort: {day: 1}}
        ]).toArray();
    },

    async dailyExpense(parent, args, {prisma, request}, info) {
        return await mongoose.connection.db.collection('Expense').aggregate([
            {$project: {
                begin: {$dateToString: {format: "%Y-%m-%d", date: "$begin"}},
                total: 1
            }},
            {$group: {
                _id: "$begin",
                total: {$sum: "$total"}
            }},
            {$project: {
                day: "$_id",
                total: 1
            }},
            {$sort: {
                day: -1
            }},
            {$limit: 5},
            {$sort: {day: 1}}
        ]).toArray();
    },

    async monthlyExpense(parent, args, {prisma, request}, info) {
        return await mongoose.connection.db.collection('Expense').aggregate([
            {$project: {
                begin: {$dateToString: {format: "%Y-%m", date: "$begin"}},
                total: 1
            }},
            {$group: {
                _id: "$begin",
                total: {$sum: "$total"}
            }},
            {$project: {
                month: "$_id",
                total: 1
            }},
            {$sort: {
                month: -1
            }},
            {$limit: 5},
            {$sort: {month: 1}}
        ]).toArray();
    },

    async yearlyExpense(parent, args, {prisma, request}, info) {
        return await mongoose.connection.db.collection('Expense').aggregate([
            {$project: {
                begin: {$dateToString: {format: "%Y", date: "$begin"}},
                total: 1
            }},
            {$group: {
                _id: "$begin",
                total: {$sum: "$total"}
            }},
            {$project: {
                year: "$_id",
                total: 1
            }},
            {$sort: {
                year: -1
            }},
            {$limit: 5},
            {$sort: {month: 1}}
        ]).toArray();
    },
};