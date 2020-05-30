import React from 'react';
import {
    Button,
    Card,
    IconButton,
    Typography,
    Divider,
    List,
    ListItemText
} from "@material-ui/core";
import {OrdersQuery, UpdateOrderMutationVariables, useUpdateOrderMutation} from '../../generated/operation'
import {makeStyles} from "@material-ui/core/styles";
import {Formik} from "formik";
import {grey} from "@material-ui/core/colors";
import {Save, MenuOpen, Receipt} from "@material-ui/icons";
import * as Yup from "yup";
import { OrderForm, OrderFormType } from './OrderForm';
import accounting from 'accounting';
import { DeleteOrder } from './DeleteOrder';
import { GET_IMPORTS, GET_STORE_REPORT } from '../../graphql/queries';

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
    undoCheckout: {
        marginLeft: 'auto',
        marginRight: theme.spacing(1)
    },
    cardContent: {
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(1),
    },
    productList: {
        marginTop: 0,
        marginBottom: 0
    },
    cardAction: {
        padding: theme.spacing(1)
    },
    buttons: {
        display: 'flex',
        flexFlow: 'row wrap',
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    checkoutButton: {
        marginLeft: 'auto'
    },
    receiptIcon: {
        marginRight: theme.spacing(1)
    }
}});

type Orders = NonNullable<OrdersQuery['orders']>
type Order = Orders[number]

interface OrderEditProps {
    order: Order
}

export const OrderEdit: React.FC<OrderEditProps> = ({order: {id, checkout, table, products, total}}) => {
    const [updateOrder] = useUpdateOrderMutation({
        refetchQueries: [{query: GET_IMPORTS}, {query: GET_STORE_REPORT}]
    });

    const classes = useStyles();

    return (
        <Card variant='outlined' className={classes.card}>
            <Formik
                enableReinitialize={true}
                initialValues={{ id, checkout, table, products}}
                validationSchema={Yup.object({
                    table: Yup.number().required("Required"),
                    products: Yup.array().of(
                        Yup.object().shape({
                            product: Yup.object().shape({
                                id: Yup.string().required("Required")
                            }),
                            amount: Yup.number().required("Required")
                        })
                    ).required("At least 1 product.")
                })}
                onSubmit={async (values, {setSubmitting}) => {
                    const modifiedValues: UpdateOrderMutationVariables = {
                        id,
                        checkout: values.checkout,
                        table: values.table,
                        products: values.products?.map(({product, amount}) => {return {
                            product: product.id,
                            amount
                        }})
                    }

                    await updateOrder({variables: modifiedValues});

                    setSubmitting(false);
                }}
            >
                {({values, setValues, isSubmitting, submitForm, dirty, errors}) => {
                    let tempTotal = 0;
                    for (const {amount, product: {price}} of values.products) {
                        tempTotal += amount * price;
                    }

                    const checkOut = () => {
                        setValues({...values, checkout: true});
                        submitForm();
                    }

                    const undoCheckOut = () => {
                        setValues({...values, checkout: false});
                        submitForm();
                    }

                    return (
                        <>
                            <div className={classes.cardTitle}>
                                <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                                    <div style={{margin: 'auto'}}>
                                        <Typography variant='h6' component='span'>Table {table} </Typography>
                                    </div>
                                </div>
                                {!checkout ?
                                    <IconButton disabled={!dirty || isSubmitting} onClick={submitForm} className={classes.saveButton}>
                                        <Save color={!dirty || isSubmitting ? 'disabled' : 'primary'}/>
                                    </IconButton>
                                    :
                                    <Button onClick={undoCheckOut} className={classes.undoCheckout} size='small' variant='outlined' color='primary'>
                                        <MenuOpen/>
                                        Undo checkout
                                    </Button>
                                }
                            </div>

                            <div className={classes.cardContent}>
                                {!checkout ? 
                                    <OrderForm type={OrderFormType.EDIT_ORDER} order={values} errors={errors} setValues={setValues}/>
                                    :
                                    <List className={classes.cardContent}>
                                        {products?.map(({id, product: {name, unit}, amount}) =>
                                            <ListItemText key={id}>
                                                <Typography variant='body1'>
                                                    {amount} {unit} 
                                                    <Typography variant='body1' color='textSecondary' component='span'> of </Typography>
                                                    {name}
                                                </Typography>
                                            </ListItemText>
                                        )}
                                    </List>
                                }
                            </div>

                            <Divider/>
                            <div className={classes.cardAction}>
                                <Typography variant='body1' align='right'>
                                    <Typography variant='body1' color='textSecondary' component='span'>Total: </Typography>
                                    {checkout && total ? accounting.formatMoney(total, {precision: 0, format: '%v'}) : accounting.formatMoney(tempTotal, {precision: 0, format: '%v'})} VNĐ
                                </Typography>

                                {!checkout ? 
                                    <div className={classes.buttons}>
                                        <DeleteOrder id={id}/>
                                        <Button onClick={checkOut} className={classes.checkoutButton} variant='contained' color='primary'>
                                            <Receipt className={classes.receiptIcon}/>
                                            Checkout
                                        </Button>
                                    </div>: null
                                }
                            </div>
                        </>
                    )
                }}
            </Formik>
        </Card>
    )
};