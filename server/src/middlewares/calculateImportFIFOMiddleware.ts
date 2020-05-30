import { RequireFields, MutationUpdateOrderArgs } from './../generated/ResolversType';
import {IMiddlewareFunction, IMiddlewareTypeMap} from 'graphql-middleware';
import {Context} from '../resolvers/types/Context';
import { Import } from '../utils/Import';

type UpdateOrderArgs = RequireFields<MutationUpdateOrderArgs, 'id' | 'data'>

const calculateImportFIFO: IMiddlewareFunction<any, Context, UpdateOrderArgs> = async (resolve, root, args, context, info) => {
    const isCheckoutOrder = await context.prisma.exists.Order({id: args.id, checkout: true});
    // Uncheckout an order
    if (isCheckoutOrder && !args.data.checkout) {
        await Import.calculateReverseFIFO(args.id);
    }

    const result = await resolve(root, args, context, info);

    // Checkout an order
    if (!isCheckoutOrder && args.data.checkout) {
        await Import.calculateFIFO(args.id);
    }

    return result;
}

export const calculateImportFIFOMiddleware: IMiddlewareTypeMap<any, Context, any> = {
    Mutation: {
        updateOrder: calculateImportFIFO,
    }
}