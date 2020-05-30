import {Query} from "./Query";
import {Mutation} from "./Mutation";
import {Subscription} from "./Subscription";
import {Resolvers} from "../generated/ResolversType";
import {Context} from "./types/Context";

export const resolvers: Resolvers<Context> = {
    Query,
    Mutation,
    Subscription,

    // Disable: Type "Node" is missing a "__resolveType" resolver. Pass false into "resolverValidationOptions.requireResolversForResolveType" to disable this warning.
    Node: {
        __resolveType() {
          return null;
        }
    }
};