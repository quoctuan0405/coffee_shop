import { IncomingMessage } from 'http';
import { NextPageContext } from 'next';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';
import cookie from 'cookie';
import {getMainDefinition} from "apollo-utilities";
import {ApolloLink, split} from "apollo-link";
import {WebSocketLink} from "apollo-link-ws";
import {onError} from "apollo-link-error";
import ws from 'ws';

/**
 * Get the user token from cookie
 */
const getToken = (req?: IncomingMessage) => {
    const cookies = cookie.parse(
        req ? req.headers.cookie || '' : document.cookie,
    );

    return cookies.jid;
};

const createApolloClient = (initialState = {}, ctx: NextPageContext | undefined) => {
    const fetchOptions = {
        agent: null,
        credentials: 'include'
    };

    // If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
    // 'https-proxy-agent' is required here because it's a sever-side only module
    // if (typeof window === 'undefined') {
    //     if (process.env.https_proxy) {
    //         fetchOptions.agent = new (require('https-proxy-agent'))(
    //             process.env.https_proxy,
    //         );
    //     }
    // }

    const token = getToken(ctx?.req);

    const httpLink = new HttpLink({
        uri: process.env.SERVER_URL as string, // Server URL (must be absolute)
        credentials: 'include',
        fetch,
        fetchOptions,
    });

    const wsLink = new WebSocketLink({
        uri: process.env.WS_SERVER_URL as string,
        options: {
            reconnect: true,
            connectionParams: {
                "authorization": token ? `Bearer ${token}` : '',
            }
        },
        webSocketImpl: typeof window === 'undefined' ? ws : null
    });

    const link = split(
        // split based on operation type
        ({ query }) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            );
        },
        wsLink,
        httpLink,
    );

    const authLink = setContext((_request, { headers }) => {
        return {
            headers: {
                ...headers,
                cookie: token ? `jid=Bearer ${token}` : '',
            },
        };
    });

    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.forEach(({ message, locations, path }) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                ),
            );
        if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    return new ApolloClient({
        connectToDevTools: typeof window !== 'undefined',
        ssrMode: typeof window === 'undefined',
        link: ApolloLink.from([errorLink, authLink, link]),
        cache: new InMemoryCache().restore(initialState),
    });
};

export default createApolloClient;