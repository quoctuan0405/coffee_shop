import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducers} from '../src/reducers';
import {AppContextType, AppInitialProps, NextComponentType} from "next/dist/next-server/lib/utils";

export const withRedux = (PageComponent: NextComponentType<AppContextType, AppInitialProps, any>, {ssr = true} = {}) => {
    const WithRedux = ({initialReduxState, ...props}: any) => {
        const store = getOrInitializeStore(initialReduxState);

        return (
            <Provider store={store}>
                <PageComponent {...props}/>
            </Provider>
        )
    };

    interface Context extends AppContextType {
        reduxStore?: any
    }
    if (ssr || PageComponent.getInitialProps) {
        WithRedux.getInitialProps = async (context: Context) => {
            const reduxStore = getOrInitializeStore();

            context.reduxStore = reduxStore;

            let pageProps;
            if (typeof PageComponent.getInitialProps === 'function') {
                pageProps = await PageComponent.getInitialProps(context);
            } else {
                pageProps = {};
            }

            return {...pageProps, initialReduxState: reduxStore.getState()}
        }
    }

    return WithRedux;
};


let reduxStore: any;
const getOrInitializeStore = (initialState = {}) => {
    if (typeof window === 'undefined') {
        reduxStore = createStore(reducers, initialState, applyMiddleware(thunk));
        return reduxStore;
    }

    if (!reduxStore) {
        reduxStore = createStore(reducers, initialState, applyMiddleware(thunk))
    }

    return reduxStore;
};