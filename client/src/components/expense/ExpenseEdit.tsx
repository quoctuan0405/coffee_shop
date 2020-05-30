import React from 'react';
import {
    Card,
    IconButton,
    Typography,
} from "@material-ui/core";
import {ExpensesQuery, useUpdateExpenseMutation} from '../../generated/operation';
import {makeStyles} from "@material-ui/core/styles";
import {Formik} from "formik";
import {grey} from "@material-ui/core/colors";
import {Save} from "@material-ui/icons";
import * as Yup from "yup";
import accounting from 'accounting';
import {ExpenseForm, ExpenseFormType} from './ExpenseForm';
import { DeleteExpense } from './DeleteExpense';

const useStyles = makeStyles(theme => {return {
    card: {
        width: '100%',
        paddingBottom: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    cardTitle: {
        paddingLeft: theme.spacing(3),
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(1),
        background: grey[700],
        display: 'flex',
        flexFlow: 'row wrap'
    },
    saveButton: {
        marginLeft: 'auto',
        marginRight: theme.spacing(2)
    },
    cardContent: {
        paddingLeft: theme.spacing(2),
    },
    cardAction: {
        display: 'flex',
        flexFlow: 'row-reverse wrap',
        paddingRight: theme.spacing(5),
        paddingBottom: theme.spacing(2)
    }
}});

type Expenses = NonNullable<ExpensesQuery["expenses"]>;
type Expense = Expenses[number];

interface ExpenseEditProps {
    expense: Expense
}

export const ExpenseEdit: React.FC<ExpenseEditProps> = ({expense: {id, name, begin, end, total}}) => {
    const [updateExpense] = useUpdateExpenseMutation();

    const classes = useStyles();

    return (
        <Card variant='outlined' className={classes.card}>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    name,
                    begin: new Date(begin),
                    end: new Date(end),
                    total: accounting.formatMoney(total, {precision: 0, format: '%v'})
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Required"),
                    begin: Yup.date().required("Required"),
                    end: Yup.date().required("Required"),
                    total: Yup.string().required("Required"),
                })}
                onSubmit={async (values, {setSubmitting}) => {
                    await updateExpense({variables: {id, ...values, total: accounting.unformat(values.total)}});

                    setSubmitting(false);
                }}
            >
                {({values, isSubmitting, setValues, submitForm, dirty}) => {
                    return (
                        <>
                            <div className={classes.cardTitle}>
                                <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                                    <div style={{margin: 'auto'}}>
                                        <Typography variant='h6' component='span'>{name}</Typography>
                                    </div>
                                </div>
                                <IconButton disabled={!dirty || isSubmitting} onClick={(submitForm)} className={classes.saveButton}>
                                    <Save color={!dirty || isSubmitting ? 'disabled' : 'primary'}/>
                                </IconButton>
                            </div>

                            <div className={classes.cardContent}>
                                <ExpenseForm type={ExpenseFormType.EDIT_EXPENSE} expense={values}/>
                            </div>

                            <div className={classes.cardAction}>
                                <DeleteExpense id={id}/>
                            </div>
                        </>
                    )
                }}
            </Formik>
        </Card>
    )
};