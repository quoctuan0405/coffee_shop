import React from "react";
import {Button, Dialog, DialogContent, DialogTitle, IconButton, Typography, useMediaQuery} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import theme from "../../theme";
import {Add} from "@material-ui/icons";
import { Formik } from "formik";
import * as Yup from 'yup';
import {ExpenseForm, ExpenseFormType} from './ExpenseForm';
import { ExpensesQueryVariables, useCreateExpenseMutation, ExpensesQuery } from "../../generated/operation";
import { GET_EXPENSES } from "../../graphql/queries";
import accounting from 'accounting';

const useStyles = makeStyles((theme) => {
    return {
        title: {
            textAlign: 'center'
        },
        addIcon: {
            marginRight: theme.spacing(1)
        },
        closeButton: {
            position: 'absolute',
            top: theme.spacing(1),
            right: theme.spacing(1)
        }
    }
});

export const AddExpense = () => {
    const classes = useStyles();

    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const [openDialog, setOpenDialog] = React.useState(false);

    const [createExpense] = useCreateExpenseMutation({
        update(cache, {data}) {
            const expenseList = cache.readQuery<ExpensesQuery, ExpensesQueryVariables>({query: GET_EXPENSES});

            if (data && data.createExpense && expenseList?.expenses) {
                cache.writeQuery({
                    query: GET_EXPENSES,
                    data: {expenses: [...[data.createExpense], ...expenseList.expenses]}
                })
            } else if (data && expenseList === null) {
                cache.writeQuery({
                    query: GET_EXPENSES,
                    data: {expenses: data.createExpense}
                })
            }
        }
    });

    return (
        <>
            <Button variant='contained' color='primary' onClick={() => {setOpenDialog(true)}}>
                <Add color='inherit' className={classes.addIcon}/>
                Add an expense
            </Button>
            <Dialog fullWidth fullScreen={sm} open={openDialog} onClose={() => {setOpenDialog(false)}}>
                <DialogTitle disableTypography>
                    <Typography variant='h6' className={classes.title}>Add Expense</Typography>
                    <IconButton className={classes.closeButton} onClick={() => {setOpenDialog(false)}}>
                        <Close/>
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Formik
                        validationSchema={Yup.object({
                            name: Yup.string().required("Required"),
                            begin: Yup.date().required("Required"),
                            end: Yup.date().required("Required"),
                            total: Yup.string().required("Required"),
                        })}
                        initialValues={{
                            name: "",
                            begin: new Date(),
                            end: new Date(),
                            total: "0"
                        }}
                        onSubmit={async ({name, begin, end, total}, {setSubmitting}) => {
                            const modifiedValues = {
                                name,
                                begin,
                                end,
                                total: accounting.unformat(total),
                            };

                            await createExpense({variables: modifiedValues});

                            setOpenDialog(false);
                            setSubmitting(false);
                        }}
                    >
                        {({values, handleSubmit, setValues}) => 
                            <>
                                <ExpenseForm type={ExpenseFormType.ADD_EXPENSE} handleSubmit={handleSubmit} expense={values}/>
                            </>
                        }
                    </Formik>
                </DialogContent>
            </Dialog>
        </>
    )
};