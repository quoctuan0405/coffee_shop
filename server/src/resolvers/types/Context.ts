import {Prisma} from "../../generated/prisma";
import {ContextParameters} from "graphql-yoga/dist/types";

export interface Context {
    prisma: Prisma
    request: ContextParameters
}