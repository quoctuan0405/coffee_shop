import {Token} from "../utils/Token";
import {IMiddlewareFunction, IMiddlewareTypeMap} from 'graphql-yoga/node_modules/graphql-middleware';
import {Context} from '../resolvers/types/Context';

const checkLogin: IMiddlewareFunction<any, Context, any> = async (resolve, root, args, context, info) => {
    const jwt = Token.getContent(context.request);
    if (!jwt || !jwt.userId || !jwt.role) {
        throw new Error('Unauthorized.');
    }

    return resolve(root, args, context, info);
}

export const checkLoginMiddleware: IMiddlewareTypeMap<any, Context, any> = {
    Query: {
        ingredients: checkLogin,
        products: checkLogin,
        orders: checkLogin,
        imports: checkLogin,
        expenses: checkLogin,
    },

    Mutation: {
        createOrder: checkLogin,
        updateOrder: checkLogin,
        deleteOrder: checkLogin,
        createImport: checkLogin,
        updateImport: checkLogin,
        deleteImport: checkLogin
    }
}