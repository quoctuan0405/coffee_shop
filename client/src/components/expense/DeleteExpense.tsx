import React from "react";
import {useDeleteExpenseMutation, ExpensesQuery, ExpensesQueryVariables} from "../../generated/operation";
import {GET_EXPENSES} from "../../graphql/queries";
import {DeleteModal} from '../DeleteModal';

interface DeleteExpenseProps {
    id: string
}

export const DeleteExpense:React.FC<DeleteExpenseProps> = ({id}) => {
    const [deleteExpense] = useDeleteExpenseMutation({
        update(cache, {data}) {
            const expenseList = cache.readQuery<ExpensesQuery, ExpensesQueryVariables>({query: GET_EXPENSES});

            if (data && data.deleteExpense && expenseList?.expenses) {
                const expenseListWithExpenseRemoved = expenseList.expenses.filter(({id}) => id !== data.deleteExpense.id);
                cache.writeQuery({
                    query: GET_EXPENSES,
                    data: {expenses: expenseListWithExpenseRemoved}
                })
            }
        }
    });

    return (
        <DeleteModal
            type='order'
            handleSubmit={async () => {
                await deleteExpense({variables: {id}})
            }}
        />
    )
};