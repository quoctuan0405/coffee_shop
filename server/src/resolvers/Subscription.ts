import {SubscriptionResolvers} from "../generated/ResolversType";
import {Context} from "./types/Context";
import {Token} from "../utils/Token";

export const Subscription: SubscriptionResolvers<Context> = {
    ingredients: {
        subscribe(parent, args, {request, prisma}, info) {
            const jwt = Token.getContent(request);
            if (!jwt || !jwt.userId || !jwt.role) {
                throw new Error('Unauthorized');
            }

            prisma.exists.User({id: jwt.userId}).then((userExists) => {
                if (!userExists) {
                    throw new Error('Unauthorized')
                }
            });

            return prisma.subscription.ingredient({}, info)
        }
    },

    products: {
        subscribe(parent, args, {request, prisma}, info) {
            const jwt = Token.getContent(request);
            if (!jwt || !jwt.userId || !jwt.role) {
                throw new Error('Unauthorized');
            }

            prisma.exists.User({id: jwt.userId}).then((userExists) => {
                if (!userExists) {
                    throw new Error('Unauthorized')
                }
            });

            return prisma.subscription.product({}, info)
        }
    },

    orders: {
        subscribe(parent, args, {request, prisma}, info) {
            const jwt = Token.getContent(request);
            if (!jwt || !jwt.userId || !jwt.role) {
                throw new Error('Unauthorized');
            }

            prisma.exists.User({id: jwt.userId}).then((userExists) => {
                if (!userExists) {
                    throw new Error('Unauthorized')
                }
            });

            return prisma.subscription.order({}, info)
        }
    },

    imports: {
        subscribe(parent, args, {request, prisma}, info) {
            const jwt = Token.getContent(request);
            if (!jwt || !jwt.userId || !jwt.role) {
                throw new Error('Unauthorized');
            }

            prisma.exists.User({id: jwt.userId}).then((userExists) => {
                if (!userExists) {
                    throw new Error('Unauthorized')
                }
            });

            return prisma.subscription.import({}, info)
        }
    },

    expenses: {
        subscribe(parent, args, {request, prisma}, info) {
            const jwt = Token.getContent(request);
            if (!jwt || !jwt.userId || !jwt.role) {
                throw new Error('Unauthorized');
            }

            prisma.exists.User({id: jwt.userId}).then((userExists) => {
                if (!userExists) {
                    throw new Error('Unauthorized')
                }
            });

            return prisma.subscription.expense({}, info)
        }
    }
};