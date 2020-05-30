import {Token} from "../utils/Token";
import {UserRole} from "../generated/PrismaType";
import {IMiddlewareFunction, IMiddlewareTypeMap} from 'graphql-yoga/node_modules/graphql-middleware';
import {Context} from '../resolvers/types/Context';

const checkManager: IMiddlewareFunction<any, Context, any> = async (resolve, root, args, context, info) => {
    const jwt = Token.getContent(context.request);
    if (!jwt || !jwt.userId || jwt.role !== UserRole.Manager) {
        throw new Error('Unauthorized.');
    }

    return resolve(root, args, context, info);
}

export const checkManagerMiddleware: IMiddlewareTypeMap<any, Context, any> = {
    Query: {
        users: checkManager,
        store: checkManager,
        yearlyRevenue: checkManager,
        monthlyRevenue: checkManager,
        dailyRevenue: checkManager,
        yearlyExpense: checkManager,
        monthlyExpense: checkManager,
        dailyExpense: checkManager,
    },

    Mutation: {
        createUser: checkManager,
        updateUser: checkManager,
        deleteUser: checkManager,
        createIngredient: checkManager,
        updateIngredient: checkManager,
        deleteIngredient: checkManager,
        createProduct: checkManager,
        updateProduct: checkManager,
        deleteProduct: checkManager,
        createExpense: checkManager,
        updateExpense: checkManager,
        deleteExpense: checkManager,
    }
}