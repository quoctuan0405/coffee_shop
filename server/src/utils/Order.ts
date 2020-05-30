import {ProductAmountInput} from "../generated/ResolversType";
import mongoose from 'mongoose';

interface totalRawQueryResult {
    id: string,
    total: number
}

export class Order {
    public static checkDuplicateProduct(products: ProductAmountInput[]): boolean {
        return products.some(({product: productId}, index) => {
            const indexOfFirstProductAmountContainsProduct = products.findIndex(({product: id}) => id === productId);
            return indexOfFirstProductAmountContainsProduct !== index;
        })
    }

    private static getObjectProductIdList(products: ProductAmountInput[]) {
        const objectProductIdList = [];
        for (const {product: productId} of products) {
            objectProductIdList.push(new mongoose.mongo.ObjectID(productId));
        }

        return objectProductIdList;
    }

    public static async getTotal(id: string): Promise<number> {
        const result: totalRawQueryResult[] = await mongoose.connection.db.collection('Order').aggregate([
            {$match: { _id: new mongoose.mongo.ObjectId(id)}},
            {$unwind: "$products"},
            {$lookup: {
                from: "Product",
                localField: "products.product",
                foreignField: "_id",
                as: "product"
            }},
            {$project: {
                product: {$arrayElemAt: ["$product", 0]},
                amount: "$products.amount"
            }},
            {$project: {
                price: "$product.price",
                amount: 1
            }},
            {$group: {
                _id: "$_id",
                total: {$sum: {$multiply: ["$amount", "$price"]}}
            }}
        ]).toArray();

        return result[0].total;
    }

    public static async checkAllProductsExists(products: ProductAmountInput[]) {
        const objectProductIdList = Order.getObjectProductIdList(products);

        const numberOfProductInDatabase = await mongoose.connection.db.collection('Product').find({
            _id: {$in: objectProductIdList}
        }).count();

        return objectProductIdList.length === numberOfProductInDatabase;
    }
}