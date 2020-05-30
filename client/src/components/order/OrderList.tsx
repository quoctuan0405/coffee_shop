import React, {useEffect, useState} from 'react';
import {OrdersQuery} from "../../generated/operation";
import { OrderEdit } from './OrderEdit';
import {useInfiniteScroll} from '../utils/useInfiniteScroll';

interface OrderListProps {
    orders: OrdersQuery["orders"] | undefined | null
    subscribeToOrder: () => any
    fetchMoreOrder: () => any
}

export const OrderList: React.FC<OrderListProps> = ({orders, subscribeToOrder, fetchMoreOrder}) => {
    useEffect(() => {
        subscribeToOrder();
    }, []);

    const container = React.useRef<HTMLDivElement>(null);
    useInfiniteScroll({container, loadMoreContent: () => {fetchMoreOrder()}});

    return (
        <div ref={container}>
            {orders?.map((order) => 
                <OrderEdit key={order.id} order={order}/>
            )}
        </div>
    )
};