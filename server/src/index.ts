import {Options} from "graphql-yoga";
import {GraphQLServer} from "graphql-yoga";
import {resolvers} from "./resolvers";
import {Prisma} from "prisma-binding";
import cookieParser from "cookie-parser";
import mongoose from 'mongoose';
import {checkLoginMiddleware} from './middlewares/checkLoginMiddleware';
import {checkManagerMiddleware} from './middlewares/checkManagerMiddleware';
import {calculateImportFIFOMiddleware} from './middlewares/calculateImportFIFOMiddleware';

mongoose.connect(`${process.env.MONGO_URI}/next-ts` as string, {useNewUrlParser: true, useUnifiedTopology: true});

const prisma = new Prisma({
    typeDefs: "./src/generated/prisma.graphql",
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET
});


const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    // @ts-ignore
    resolvers,
    middlewares: [checkLoginMiddleware, checkManagerMiddleware, calculateImportFIFOMiddleware],
    context(request) {
        return {prisma, request}
    }
});

server.express.use(cookieParser());

const opts: Options = {
    port: process.env.PORT!,
    cors: {
        credentials: true,
        origin: [process.env.FRONTEND_SERVER_URL!] // your frontend url.
    }
};

server.start(opts, () => {
    console.log("The server is up")
});