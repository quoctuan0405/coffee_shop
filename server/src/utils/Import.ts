import { Ingredient } from './../generated/ResolversType';
const mongoose = require('mongoose');

interface TotalAmountIngredientsInOrder {
    _id: string
    total: number
}

interface IngredientSummary {
    _id: Exclude<Ingredient, 'id' | '_typename'> & {_id: string},
    amount: number
}

export class Import {
    public static calculateFIFO = async (orderId: string) => {
        const ingredients: TotalAmountIngredientsInOrder[] = await mongoose.connection.db.collection('Order').aggregate([
            {$match: {_id: new mongoose.mongo.ObjectId(orderId)}},
            {$unwind: '$products'},
            {$lookup: {
                    from: 'Product',
                    localField: 'products.product',
                    foreignField: '_id',
                    as: 'product'
                }},
            {$project: {
                    product: {$arrayElemAt: ['$product', 0]},
                    productAmount: '$products.amount'
                }},
            {$unwind: '$product.ingredients'},
            {$lookup: {
                    from: 'Ingredient',
                    localField: 'product.ingredients.ingredient',
                    foreignField: '_id',
                    as: 'ingredient'
                }},
            {$project: {
                    ingredient: {$arrayElemAt: ['$ingredient', 0]},
                    productAmount: 1,
                    ingredientAmount: '$product.ingredients.amount'
                }},
            {$group: {
                    _id: '$ingredient._id',
                    total: {$sum: {$multiply: ['$productAmount', '$ingredientAmount']}}
                }}
        ]).toArray();

        return new Promise(((resolve) => {
            ingredients.forEach(async ({_id, total}) => {
                const lastImport = await mongoose.connection.db.collection('Import')
                    .find({ingredient: new mongoose.mongo.ObjectId(_id), inStock: {$gte: 0}})
                    .sort({'created_at': 1})
                    .limit(1)
                    .toArray();

                if (!lastImport[0]) {return;}

                if (lastImport[0].inStock >= total) {
                    await mongoose.connection.db.collection('Import').updateOne({_id: new mongoose.mongo.ObjectId(lastImport[0]._id)}, {$inc: {inStock: 0 - total}});
    
                } else {
                    const {inStock} = lastImport[0];
                    const difference = Number(inStock - total);

                    const upOneImport = await mongoose.connection.db.collection('Import')
                        .find({ingredient: new mongoose.mongo.ObjectId(_id), inStock: {$gte: 0}})
                        .sort({'created_at': 1})
                        .skip(1)
                        .limit(1)
                        .toArray();
    
                    if (!upOneImport[0]) {return;}

                    await mongoose.connection.db.collection('Import').updateOne({_id: new mongoose.mongo.ObjectId(lastImport[0]._id)}, {$set: {inStock: 0}});
                    await mongoose.connection.db.collection('Import').updateOne({_id: new mongoose.mongo.ObjectId(upOneImport[0]._id)}, {$inc: {inStock: difference}});
                }
            });
    
            resolve(true);
        }));
    };

    public static calculateReverseFIFO = async (orderId: string) => {
        const ingredients: TotalAmountIngredientsInOrder[] = await mongoose.connection.db.collection('Order').aggregate([
            {$match: {_id: new mongoose.mongo.ObjectId(orderId)}},
            {$unwind: '$products'},
            {$lookup: {
                    from: 'Product',
                    localField: 'products.product',
                    foreignField: '_id',
                    as: 'product'
                }},
            {$project: {
                    product: {$arrayElemAt: ['$product', 0]},
                    productAmount: '$products.amount'
                }},
            {$unwind: '$product.ingredients'},
            {$lookup: {
                    from: 'Ingredient',
                    localField: 'product.ingredients.ingredient',
                    foreignField: '_id',
                    as: 'ingredient'
                }},
            {$project: {
                    ingredient: {$arrayElemAt: ['$ingredient', 0]},
                    productAmount: 1,
                    ingredientAmount: '$product.ingredients.amount'
                }},
            {$group: {
                    _id: '$ingredient._id',
                    total: {$sum: {$multiply: ['$productAmount', '$ingredientAmount']}}
                }}
        ]).toArray();

        return new Promise(((resolve) => {
            ingredients.forEach(async ({_id, total}) => {
                const lastImport = await mongoose.connection.db.collection('Import')
                    .find({ingredient: new mongoose.mongo.ObjectId(_id), inStock: {$gt: 0}})
                    .sort({'created_at': 1})
                    .limit(1)
                    .toArray();
    
                if (!lastImport[0]) {return;}

                if (lastImport[0].amount - lastImport[0].inStock >= total) {
                    await mongoose.connection.db.collection('Import').updateOne({_id: new mongoose.mongo.ObjectId(lastImport[0]._id)}, {$inc: {inStock: total}});
    
                } else {
                    const {inStock, amount} = lastImport[0];
                    const difference = Number(total - (amount - inStock));
    
                    const upOneImport = await mongoose.connection.db.collection('Import')
                        .find({ingredient: new mongoose.mongo.ObjectId(_id), inStock: 0})
                        .sort({'created_at': 1})
                        .limit(1)
                        .toArray();
    
                    if (!upOneImport[0]) {return;}
    
                    await mongoose.connection.db.collection('Import').updateOne({_id: new mongoose.mongo.ObjectId(lastImport[0]._id)}, {$set: {inStock: lastImport[0].amount}});
                    await mongoose.connection.db.collection('Import').updateOne({_id: new mongoose.mongo.ObjectId(upOneImport[0]._id)}, {$set: {inStock: difference}});
                }
            });
    
            resolve(true);
        }));
    };

    public static async getStoreReport() {
        const result: IngredientSummary[] = await mongoose.connection.db.collection('Import').aggregate([
            {$lookup: {
                from: 'Ingredient',
                localField: 'ingredient',
                foreignField: '_id',
                as: 'ingredient'
            }},
            {$project: {
                ingredient: {$arrayElemAt: ['$ingredient', 0]},
                inStock: 1
            }},
            {$group: {
                _id: '$ingredient',
                amount: {$sum: '$inStock'}
            }}
        ]).toArray();

        const storeReport = [];
        for (const {_id: {_id, name, unit}, amount} of result) {
            storeReport.push({
                amount,
                ingredient: {id: _id, name, unit}
            })
        }

        return storeReport;
    }
}