import React from 'react';
import {StoreState} from '../src/reducers'
import { 
    useExpensesQuery, 
    MutationType,
    ExpenseSubscriptionSubscriptionVariables,
    ExpenseSubscriptionSubscription,
    ExpensesQuery
} from '../src/generated/operation';
import {EXPENSE_SUBSCRIPTION} from "../src/graphql/subscriptions";
import {Paper} from "@material-ui/core";
import {Header} from "../src/components/Header";
import { withAuth } from '../lib/withAuth';
import {makeStyles} from '@material-ui/core';
import {ExpenseList} from '../src/components/expense/ExpenseList';
import { AddExpense } from '../src/components/expense/AddExpense';
import {GET_EXPENSES} from '../src/graphql/queries';

const useStyles = makeStyles(theme => {return {
    paper: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        width: '80vw',
        margin: 'auto',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2)
    },
    table: {
        marginBottom: theme.spacing(3)
    },
    showExpenses: {
        display: 'block',
        marginLeft: 'auto',
    },
    expenseTitle: {
        marginBottom: theme.spacing(2)
    },
    expenseList: {
        marginTop: theme.spacing(3),
    },
}});

interface ExpenseProps {
    me: StoreState["me"]
}

const Expense: React.FC<ExpenseProps> = ({me}) => {
    const classes = useStyles();

    const {fetchMore, subscribeToMore, data, loading} = useExpensesQuery({fetchPolicy: "cache-and-network"});

    const fetchMoreExpense = (expenses: ExpensesQuery["expenses"] | null | undefined) => {
        fetchMore({
            query: GET_EXPENSES,
            variables: {after: expenses ? expenses[expenses.length - 1].id : null},
            updateQuery: (previousQueryResult, {fetchMoreResult}) => {
                if (fetchMoreResult?.expenses && previousQueryResult.expenses) {
                    const lastExpenseIdFetchMoreResult = fetchMoreResult.expenses[fetchMoreResult.expenses.length - 1] ? fetchMoreResult.expenses[fetchMoreResult.expenses.length - 1].id : '';
                    const lastExpenseIdPreviousQueryResult = previousQueryResult.expenses[previousQueryResult.expenses.length - 1].id;
                    if (lastExpenseIdFetchMoreResult === lastExpenseIdPreviousQueryResult) {
                        return {
                            expenses: previousQueryResult.expenses
                        }
                    }

                    return {
                        expenses: [...previousQueryResult?.expenses, ...fetchMoreResult.expenses]
                    }
                }

                return {
                    expenses: previousQueryResult.expenses
                }
            }
        })
    }

    const subscribeToExpense = () => {
        subscribeToMore<ExpenseSubscriptionSubscription, ExpenseSubscriptionSubscriptionVariables>({
            document: EXPENSE_SUBSCRIPTION,
            updateQuery: (previousQueryResult, {subscriptionData}) => {
                if (!subscriptionData.data || !subscriptionData.data.expenses) {
                    return previousQueryResult;
                }

                if (!previousQueryResult.expenses) {
                    return Object.assign({}, previousQueryResult, {
                        products: subscriptionData.data.expenses.node
                    });
                }

                switch (subscriptionData.data.expenses.mutation) {
                    case MutationType.Created:
                        const newExpense = subscriptionData.data.expenses.node;

                        const expenseExists = previousQueryResult.expenses.find(({id}) => id === newExpense?.id);
                        if (expenseExists) {
                            return previousQueryResult;
                        }

                        return Object.assign({}, previousQueryResult, {
                            expenses: [newExpense, ...previousQueryResult.expenses]
                        });

                    case MutationType.Updated:
                        const editedExpense = subscriptionData.data.expenses.node;

                        const deleteEditedExpenseList = previousQueryResult.expenses.filter(({id}) => id !== editedExpense?.id);

                        return Object.assign({}, previousQueryResult, {
                            expenses: [editedExpense, ...deleteEditedExpenseList]
                        });

                    case MutationType.Deleted:
                        const deleteExpense = subscriptionData.data.expenses.previousValues;

                        return Object.assign({}, previousQueryResult, {
                            expenses: previousQueryResult.expenses.filter(({id}) => id !== deleteExpense?.id)
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
                <AddExpense/>
                <div className={classes.expenseList}>
                    <ExpenseList me={me} expenses={data?.expenses} fetchMoreExpense={() => {fetchMoreExpense(data?.expenses)}} subscribeToExpense={subscribeToExpense}/>
                </div>
            </Paper>
        </>
    )
}

export default withAuth(Expense)