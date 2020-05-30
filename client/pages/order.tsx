import React, { useRef } from 'react';
import {Header} from "../src/components/Header";
import {
    MutationType, ProductSubscriptionSubscriptionVariables,
    Subscription,
    useOrdersQuery,
    OrdersQuery
} from "../src/generated/operation";
import {makeStyles} from "@material-ui/core/styles";
import {Paper, Typography} from "@material-ui/core";
import {StoreState} from "../src/reducers";
import {withAuth} from "../lib/withAuth";
import {GET_ORDERS} from "../src/graphql/queries";
import {ORDER_SUBSCRIPTION} from "../src/graphql/subscriptions";
import { OrderList } from '../src/components/order/OrderList';
import { AddOrder } from '../src/components/order/AddOrder';
import {useInfiniteScroll} from '../src/components/utils/useInfiniteScroll';

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
    orderTitle: {
        marginBottom: theme.spacing(2)
    },
    orderList: {
        marginTop: theme.spacing(3),
    },
}});

interface OrderProps {
    me: StoreState["me"]
}

const Order: React.FC<OrderProps> = ({me}) => {
    const classes = useStyles();

    const {subscribeToMore, fetchMore, data, loading} = useOrdersQuery({fetchPolicy: "cache-and-network"});

    const fetchMoreOrder = (orders: OrdersQuery["orders"] | null | undefined) => {
        fetchMore({
            query: GET_ORDERS,
            variables: {after: orders ? orders[orders.length - 1].id : null},
            updateQuery: (previousQueryResult, {fetchMoreResult}) => {
                if (fetchMoreResult?.orders && previousQueryResult.orders) {
                    const lastOrderIdFetchMoreResult = fetchMoreResult.orders[fetchMoreResult.orders.length - 1] ? fetchMoreResult.orders[fetchMoreResult.orders.length - 1].id : '';
                    const lastOrderIdPreviousQueryResult = previousQueryResult.orders[previousQueryResult.orders.length - 1].id;
                    if (lastOrderIdFetchMoreResult === lastOrderIdPreviousQueryResult) {
                        return {orders: previousQueryResult.orders};
                    }

                    return {
                        orders: [...previousQueryResult?.orders, ...fetchMoreResult.orders]
                    }
                }

                return {
                    orders: previousQueryResult.orders
                }
            }
        })
    }

    const subscribeToOrder = () => {
        subscribeToMore<Subscription, ProductSubscriptionSubscriptionVariables>({
            document: ORDER_SUBSCRIPTION,
            updateQuery: (previousQueryResult, {subscriptionData}) => {
                if (!subscriptionData.data || !subscriptionData.data.orders) {
                    return previousQueryResult;
                }

                if (!previousQueryResult.orders) {
                    return Object.assign({}, previousQueryResult, {
                        products: subscriptionData.data.orders.node
                    });
                }

                switch (subscriptionData.data.orders.mutation) {
                    case MutationType.Created:
                        const newOrder = subscriptionData.data.orders.node;

                        const orderExists = previousQueryResult.orders.find(({id}) => id === newOrder?.id);
                        if (orderExists) {
                            return previousQueryResult;
                        }

                        return Object.assign({}, previousQueryResult, {
                            orders: [newOrder, ...previousQueryResult.orders]
                        });

                    case MutationType.Updated:
                        const editedOrder = subscriptionData.data.orders.node;

                        const deleteEditedOrderList = previousQueryResult.orders.filter(({id}) => id !== editedOrder?.id);

                        return Object.assign({}, previousQueryResult, {
                            orders: [editedOrder, ...deleteEditedOrderList]
                        });

                    case MutationType.Deleted:
                        const deleteOrder = subscriptionData.data.orders.previousValues;

                        return Object.assign({}, previousQueryResult, {
                            orders: previousQueryResult.orders.filter(({id}) => id !== deleteOrder?.id)
                        });

                    default:
                        return previousQueryResult
                }
            },
        });
    };

    return (
        <>
            <Header/>
            <Paper className={classes.paper}>
                <Typography variant='h6' className={classes.orderTitle}>Order</Typography>
                <AddOrder/>
                <div className={classes.orderList}>
                    <OrderList orders={data?.orders} fetchMoreOrder={() => {fetchMoreOrder(data?.orders)}} subscribeToOrder={subscribeToOrder}/>
                </div>
                {loading ? 'loading...' : null}
            </Paper>
        </>
    )
};

export default withAuth(Order);