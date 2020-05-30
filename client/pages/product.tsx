import React from 'react';
import {Header} from "../src/components/Header";
import {
    MutationType, ProductSubscriptionSubscriptionVariables,
    Subscription,
    useProductsQuery,
    UserRole,
} from "../src/generated/operation";
import {makeStyles} from "@material-ui/core/styles";
import {Paper, Typography} from "@material-ui/core";
import {StoreState} from "../src/reducers";
import {withAuth} from "../lib/withAuth";
import {PRODUCT_SUBSCRIPTION} from "../src/graphql/subscriptions";
import {ProductList} from "../src/components/product/ProductList";
import { AddProduct } from '../src/components/product/AddProduct';

const useStyles = makeStyles(theme => {return {
    paper: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        width: '80vw',
        margin: 'auto',
        marginTop: theme.spacing(2),
        padding: theme.spacing(2)
    },
    productTitle: {
        marginBottom: theme.spacing(2)
    },
    productList: {
        marginTop: theme.spacing(3),
    },
}});

interface ProductProps {
    me: StoreState["me"]
}

const Product: React.FC<ProductProps> = ({me}) => {
    const classes = useStyles();

    const {subscribeToMore, data, loading, error} = useProductsQuery();

    const subscribeToProduct = () => {
        subscribeToMore<Subscription, ProductSubscriptionSubscriptionVariables>({
            document: PRODUCT_SUBSCRIPTION,
            updateQuery: (previousQueryResult, {subscriptionData}) => {
                if (!subscriptionData.data || !subscriptionData.data.products) {
                    return previousQueryResult;
                }

                if (!previousQueryResult.products) {
                    return Object.assign({}, previousQueryResult, {
                        products: subscriptionData.data.products.node
                    });
                }

                switch (subscriptionData.data.products.mutation) {
                    case MutationType.Created:
                        const newProduct = subscriptionData.data.products.node;

                        const productExists = previousQueryResult.products.find(({id}) => id === newProduct?.id);
                        if (productExists) {
                            return previousQueryResult;
                        }

                        return Object.assign({}, previousQueryResult, {
                            products: [newProduct, ...previousQueryResult.products]
                        });

                    case MutationType.Updated:
                        const editedProduct = subscriptionData.data.products.node;

                        const deleteEditedProductList = previousQueryResult.products.filter(({id}) => id !== editedProduct?.id);

                        return Object.assign({}, previousQueryResult, {
                            products: [editedProduct, ...deleteEditedProductList]
                        });

                    case MutationType.Deleted:
                        const deleteProduct = subscriptionData.data.products.previousValues;

                        return Object.assign({}, previousQueryResult, {
                            products: previousQueryResult.products.filter(({id}) => id !== deleteProduct?.id)
                        });

                    default:
                        return previousQueryResult
                }
            },
        });
    };

    if (!loading && !error && me?.role === UserRole.Manager) {
        return (
            <>
                <Header/>
                <Paper className={classes.paper}>
                    <Typography variant='h6' className={classes.productTitle}>Product</Typography>
                    <AddProduct/>
                    <div className={classes.productList}>
                        <ProductList me={me} products={data?.products} subscribeToProduct={subscribeToProduct}/>
                    </div>
                </Paper>
            </>
        )

    } else if (!loading && !error && me?.role === UserRole.Employee) {
        return (
            <>
                <Header/>
                <Paper className={classes.paper}>
                    <Typography variant='h6'>Ingredient</Typography>
                    <ProductList me={me} products={data?.products} subscribeToProduct={subscribeToProduct}/>
                </Paper>
            </>
        )

    } else {
        return (
            <>
                <Header/>
                <div>Loading...</div>
            </>
        )
    }
};

export default withAuth(Product);