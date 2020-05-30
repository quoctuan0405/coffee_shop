import React from 'react';
import {Typography} from "@material-ui/core";
import { MoneyField } from '../utils/MoneyField';
import { TextField } from 'formik-material-ui';
import {Add} from "@material-ui/icons";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';
import {Form, Field} from "formik";
import {
    Button,
    List,
    ListItem,
    makeStyles,
} from "@material-ui/core";
import { KeyboardDatePicker } from 'formik-material-ui-pickers';
import {ExpensesQuery} from '../../generated/operation';

const useStyles = makeStyles(theme => ({
    selectInput: {
        width: 120,
        marginRight: theme.spacing(2)
    },
    unit: {
        display: 'inline-block',
        width: 25,
        marginTop: theme.spacing(2),
    },
    action: {
        display: "flex"
    },
    addImport: {
        marginLeft: 'auto'
    },
    addIcon: {
        marginRight: theme.spacing(1)
    },
}));

export enum ExpenseFormType {
    ADD_EXPENSE, EDIT_EXPENSE
}

type Expenses = NonNullable<ExpensesQuery['expenses']>;
type Expense = Omit<Expenses[number], '__typename' | 'id' | 'begin' | 'end' | 'total'> & {total: string, begin: Date, end: Date};

interface ExpenseFormProps {
    expense: Expense,
    type: ExpenseFormType,
    handleSubmit?: any,
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({expense, type, handleSubmit}) => {
    const classes = useStyles();

    return (
        <Form>
            <List>
                <ListItem>
                    <Field name="name" type="input" label="Name" component={TextField}/>
                </ListItem>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <ListItem>
                        <Field component={KeyboardDatePicker} label="From" name="begin" />
                    </ListItem>
                    <ListItem>
                        <Field component={KeyboardDatePicker} label="To" name="end" />
                    </ListItem>
                </MuiPickersUtilsProvider>

                <ListItem>
                    <Field name="total" type="input" label="Total" component={MoneyField}/>
                    <span className={classes.unit}>
                        <Typography variant='body1' color='textSecondary' component='span'>VNĐ</Typography>
                    </span>
                </ListItem>
            </List> 

            {type === ExpenseFormType.ADD_EXPENSE ? 
                <div className={classes.action}>
                    <Button onClick={handleSubmit} className={classes.addImport} color='primary' variant='contained'>
                        <Add color='inherit' className={classes.addIcon}/>
                        Add
                    </Button>
                </div> : null
            }
        </Form>
    )
}