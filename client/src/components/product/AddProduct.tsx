import React from "react";
import {Button, Dialog, DialogContent, DialogTitle, IconButton, Typography, useMediaQuery} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import theme from "../../theme";
import {Add} from "@material-ui/icons";
import { Formik } from "formik";
import { ProductForm, ProductFormType } from "./ProductForm";
import * as Yup from 'yup';
import { useCreateProductMutation, ProductsQuery, ProductsQueryVariables } from "../../generated/operation";
import { GET_PRODUCTS } from "../../graphql/queries";
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

export const AddProduct = () => {
    const classes = useStyles();

    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const [openDialog, setOpenDialog] = React.useState(false);

    const [createProduct] = useCreateProductMutation({
        update(cache, {data}) {
            const productList = cache.readQuery<ProductsQuery, ProductsQueryVariables>({query: GET_PRODUCTS});

            if (data && data.createProduct && productList?.products) {
                cache.writeQuery({
                    query: GET_PRODUCTS,
                    data: {products: productList.products.concat([data.createProduct])}
                })
            } else if (data && productList === null) {
                cache.writeQuery({
                    query: GET_PRODUCTS,
                    data: {products: data.createProduct}
                })
            }
        }
    });

    return (
        <>
            <Button variant='contained' color='primary' onClick={() => {setOpenDialog(true)}}>
                <Add color='inherit' className={classes.addIcon}/>
                Add product
            </Button>
            <Dialog fullWidth fullScreen={sm} open={openDialog} onClose={() => {setOpenDialog(false)}}>
                <DialogTitle disableTypography>
                    <Typography variant='h6' className={classes.title}>Add Product</Typography>
                    <IconButton className={classes.closeButton} onClick={() => {setOpenDialog(false)}}>
                        <Close/>
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Formik
                        validationSchema={Yup.object({
                            name: Yup.string().required("Required"),
                            unit: Yup.string().required("Required"),
                            price: Yup.string().required("Required"),
                            ingredients: Yup.array().of(
                                Yup.object().shape({
                                    ingredient: Yup.object().shape({
                                        id: Yup.string().required("Required")
                                    }),
                                    amount: Yup.number().required("Required")
                                })
                            ).required("At least 1 ingredient.")
                        })}
                        initialValues={{
                            id: "",
                            name: "", 
                            price: accounting.formatMoney("0", {precision: 0, format: '%v'}),
                            unit: "", 
                            ingredients: [{
                                id: "",
                                ingredient: {id: "", name: "", unit: "g"},
                                amount: 0
                            }]
                        }}
                        onSubmit={async (values, {setSubmitting}) => {
                            const modifiedValues = {
                                name: values.name,
                                unit: values.unit,
                                price: accounting.unformat(values.price),
                                ingredients: values.ingredients.map(({ingredient, amount}) => {
                                    return {
                                        ingredient: ingredient.id,
                                        amount
                                    }
                                })
                            };
        
                            await createProduct({variables: modifiedValues});
        
                            setSubmitting(false);
                            setOpenDialog(false);
                        }}
                    >
                        {({errors, values, handleSubmit}) => 
                            <ProductForm type={ProductFormType.ADD_PRODUCT} product={values} handleSubmit={handleSubmit} errors={errors}/>
                        }
                    </Formik>
                </DialogContent>
            </Dialog>
        </>
    )
};