import React from "react";
import {Button, Dialog, DialogContent, DialogTitle, IconButton, Typography, useMediaQuery} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import theme from "../../theme";
import {Add} from "@material-ui/icons";
import { Formik } from "formik";
import * as Yup from 'yup';
import { OrdersQuery, useCreateOrderMutation, OrdersQueryVariables, CreateOrderMutationVariables } from "../../generated/operation";
import { GET_ORDERS } from "../../graphql/queries";
import {OrderForm, OrderFormType} from './OrderForm';

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

export const AddOrder = () => {
    const classes = useStyles();

    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const [openDialog, setOpenDialog] = React.useState(false);

    const [createOrder] = useCreateOrderMutation({
        update(cache, {data}) {
            const orderList = cache.readQuery<OrdersQuery, OrdersQueryVariables>({query: GET_ORDERS});

            if (data && data.createOrder && orderList?.orders) {
                cache.writeQuery({
                    query: GET_ORDERS,
                    data: {orders: [...[data.createOrder], ...orderList.orders]}
                })
            } else if (data && orderList === null) {
                cache.writeQuery({
                    query: GET_ORDERS,
                    data: {orders: data.createOrder}
                })
            }
        }
    });

    return (
        <>
            <Button variant='contained' color='primary' onClick={() => {setOpenDialog(true)}}>
                <Add color='inherit' className={classes.addIcon}/>
                Add order
            </Button>
            <Dialog fullWidth fullScreen={sm} open={openDialog} onClose={() => {setOpenDialog(false)}}>
                <DialogTitle disableTypography>
                    <Typography variant='h6' className={classes.title}>Add Order</Typography>
                    <IconButton className={classes.closeButton} onClick={() => {setOpenDialog(false)}}>
                        <Close/>
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Formik
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
                        initialValues={{
                            id: "",
                            table: 0, 
                            products: [{
                                id: "",
                                product: {id: "", name: "", unit: ""},
                                amount: 0
                            }]
                        }}
                        onSubmit={async (values, {setSubmitting}) => {
                            const modifiedValues: CreateOrderMutationVariables = {
                                table: values.table,
                                products: values.products.map(({product, amount}) => {return {
                                    product: product.id,
                                    amount
                                }})
                            }

                            await createOrder({variables: modifiedValues});

                            setOpenDialog(false);
                            setSubmitting(false);
                        }}
                    >
                        {({errors, values, handleSubmit}) => 
                            <>
                                <OrderForm type={OrderFormType.ADD_ORDER} order={values} errors={errors} handleSubmit={handleSubmit}/>
                            </>
                        }
                    </Formik>
                </DialogContent>
            </Dialog>
        </>
    )
};