import React from 'react';
import {
    Card,
    IconButton,
    Typography
} from "@material-ui/core";
import {Product, useUpdateProductMutation} from '../../generated/operation'
import {makeStyles} from "@material-ui/core/styles";
import {Formik} from "formik";
import {grey} from "@material-ui/core/colors";
import {Save} from "@material-ui/icons";
import * as Yup from "yup";
import {ProductForm, ProductFormType} from "./ProductForm";
import {DeleteProduct} from './DeleteProduct';
import accounting from 'accounting';

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

interface ProductEditProps {
    product: Product
}

export const ProductEdit: React.FC<ProductEditProps> = ({product: {id, name, price, unit, ingredients: productIngredients}}) => {
    const [updateProduct] = useUpdateProductMutation();

    const classes = useStyles();

    return (
        <Card variant='outlined' className={classes.card}>
            <Formik
                enableReinitialize={true}
                initialValues={{id, name, price: accounting.formatMoney(price, {precision: 0, format: '%v'}), unit, ingredients: productIngredients}}
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
                onSubmit={async (values, {setSubmitting}) => {
                    const modifiedValues = {
                        id,
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

                    await updateProduct({variables: modifiedValues});

                    setSubmitting(false);
                }}
            >
                {({values, isSubmitting, submitForm, dirty, errors}) => {
                    return (
                        <>
                            <div className={classes.cardTitle}>
                                <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                                    <div style={{margin: 'auto'}}>
                                        <Typography variant='h6' component='span'>{name} </Typography>
                                        <Typography variant='body1' color='textSecondary' component='span'>({unit})</Typography>
                                    </div>
                                </div>
                                <IconButton disabled={!dirty || isSubmitting} onClick={submitForm}
                                            className={classes.saveButton}>
                                    <Save color={!dirty || isSubmitting ? 'disabled' : 'primary'}/>
                                </IconButton>
                            </div>

                            <div className={classes.cardContent}>
                                <ProductForm type={ProductFormType.EDIT_PRODUCT} product={values} errors={errors}/>
                            </div>

                            <div className={classes.cardAction}>
                                <DeleteProduct id={id}/>
                            </div>
                        </>
                    )
                }}
            </Formik>
            <div>
            </div>
        </Card>
    )
};