import React from "react";
import {useDeleteOrderMutation, OrdersQuery, OrdersQueryVariables} from "../../generated/operation";
import {GET_ORDERS} from "../../graphql/queries";
import {DeleteModal} from '../DeleteModal';

interface DeleteOrderProps {
    id: string
}

export const DeleteOrder:React.FC<DeleteOrderProps> = ({id}) => {
    const [deleteOrder] = useDeleteOrderMutation({
        update(cache, {data}) {
            const orderList = cache.readQuery<OrdersQuery, OrdersQueryVariables>({query: GET_ORDERS});

            if (data && data.deleteOrder && orderList?.orders) {
                const orderListWithOrderRemoved = orderList.orders.filter(({id}) => id !== data.deleteOrder.id);
                cache.writeQuery({
                    query: GET_ORDERS,
                    data: {orders: orderListWithOrderRemoved}
                })
            }
        }
    });

    return (
        <DeleteModal
            type='order'
            handleSubmit={async () => {
                await deleteOrder({variables: {id}})
            }}
        />
    )
};