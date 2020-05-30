import React from "react";
import {useDeleteProductMutation, ProductsQuery, ProductsQueryVariables} from "../../generated/operation";
import {GET_PRODUCTS} from "../../graphql/queries";
import { DeleteModal } from "../DeleteModal";

interface DeleteProductProps {
    id: string
}

export const DeleteProduct:React.FC<DeleteProductProps> = ({id}) => {
    const [deleteProduct] = useDeleteProductMutation({
        update(cache, {data}) {
            const productList = cache.readQuery<ProductsQuery, ProductsQueryVariables>({query: GET_PRODUCTS});

            if (data && data.deleteProduct && productList?.products) {
                const productListWithProductRemoved = productList.products.filter(({id}) => id !== data.deleteProduct.id);
                cache.writeQuery({
                    query: GET_PRODUCTS,
                    data: {products: productListWithProductRemoved}
                })
            }
        }
    });

    return (
        <DeleteModal
            type='product'
            handleSubmit={async () => {await deleteProduct({variables: {id}})}}
        />
    )
};