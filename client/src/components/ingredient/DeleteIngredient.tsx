import React from "react";
import {Query, useDeleteIngredientMutation} from "../../generated/operation";
import {GET_INGREDIENTS} from "../../graphql/queries";
import { DeleteModal, ButtonType } from "../DeleteModal";

interface DeleteIngredientProps {
    id: string
}

export const DeleteIngredient:React.FC<DeleteIngredientProps> = ({id}) => {
    const [deleteIngredient] = useDeleteIngredientMutation({
        update(cache, {data}) {
            const IngredientList = cache.readQuery<Query>({query: GET_INGREDIENTS});

            if (data && data.deleteIngredient && IngredientList?.ingredients) {
                const IngredientListWithIngredientRemoved = IngredientList.ingredients.filter(({id}) => id !== data.deleteIngredient.id);
                cache.writeQuery({
                    query: GET_INGREDIENTS,
                    data: {ingredients: IngredientListWithIngredientRemoved}
                })
            }
        }
    });

    return (
        <DeleteModal
            buttonType={ButtonType.ICON}
            type='ingredient'
            handleSubmit={async () => {await deleteIngredient({variables: {id}})}}
        />
    )
};