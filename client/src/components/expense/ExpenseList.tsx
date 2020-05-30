import React, {useEffect} from 'react';
import {ExpensesQuery, UserRole} from "../../generated/operation";
import {StoreState} from "../../reducers";
import {Card, Divider, List, ListItemText, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { ExpenseEdit } from './ExpenseEdit';
import {useInfiniteScroll} from '../utils/useInfiniteScroll';

const useStyles = makeStyles((theme) => {
   return {
       card: {
           width: '100%',
           marginTop: theme.spacing(2),
           marginBottom: theme.spacing(2),
       },
       cardTitle: {
           paddingLeft: theme.spacing(3),
           paddingBottom: theme.spacing(1),
           paddingTop: theme.spacing(1),
       },
       cardContent: {
           paddingTop: theme.spacing(1),
           paddingLeft: theme.spacing(3),
           paddingBottom: theme.spacing(2)
       },
       importUnit: {
           display: 'flex',
           flexFlow: 'row wrap'
       },
       importUnitLabel: {
           marginRight: theme.spacing(2)
       },
   }
});

interface ExpenseListProps {
    me: StoreState["me"]
    expenses: ExpensesQuery["expenses"] | undefined | null
    subscribeToExpense: () => any
    fetchMoreExpense: () => any
}

export const ExpenseList: React.FC<ExpenseListProps> = ({me, expenses, subscribeToExpense, fetchMoreExpense}) => {
    const classes = useStyles();

    useEffect(() => {
        subscribeToExpense();
    }, [])

    const container = React.useRef<HTMLDivElement>(null);
    useInfiniteScroll({container, loadMoreContent: () => {fetchMoreExpense()}});

    if (me?.role === UserRole.Manager) {
        return (
            <div ref={container}>
                {expenses?.map((expense) => 
                    <ExpenseEdit key={expense.id} expense={expense}/>
                )}
            </div>
        )
    } else if (me?.role === UserRole.Employee) {
        return (
            <div ref={container}>
                {expenses?.map(({id, name, begin, end, total}) =>
                    <Card key={id} variant='outlined' className={classes.card}>
                        <div className={classes.cardTitle}>
                            <Typography variant='h6' component='span'>{name} </Typography>
                            <Typography variant='body1' color='textSecondary' component='span'>({begin} - {end})</Typography>
                        </div>
                        <Divider/>
                    </Card>
                )}
            </div>
        )

    } else {
        return null;
    }
};