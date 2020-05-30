import React from "react";
import {Field, FieldArray, Form, FormikErrors} from "formik";
import {
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    List,
    ListItem,
    MenuItem,
    Typography
} from "@material-ui/core";
import {Select, TextField} from "formik-material-ui";
import {NumberField} from "../utils/NumberField";
import {Add, RemoveCircle} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import {useIngredientsQuery, ProductsQuery} from "../../generated/operation";
import { MoneyField } from "../utils/MoneyField";

const useStyles = makeStyles((theme) => {
    return {
        productIngredientSection: {
            marginTop: theme.spacing(1)
        },
        productIngredientTitle: {
            paddingLeft: theme.spacing(2),
        },
        productIngredientError: {
            paddingLeft: theme.spacing(2),
        },
        firstProductIngredient: {
            paddingLeft: theme.spacing(1),
            marginTop: theme.spacing(-1),
            '& > *': {
                marginTop: 10
            }
        },
        productIngredient: {
            paddingLeft: theme.spacing(1),
            marginTop: theme.spacing(-1),
            '& > *': {
                marginTop: 10
            }
        },
        selectInput: {
            width: 120,
            marginRight: theme.spacing(2)
        },
        amountInput: {
            width: 80
        },
        unit: {
            display: 'inline-block',
            width: 25
        },
        removeIconButton: {
            color: red[800]
        },
        addIcon: {
            marginRight: theme.spacing(1)
        },
        action: {
            display: "flex"
        },
        addProduct: {
            marginLeft: 'auto'
        }
    }
})

export enum ProductFormType {
    ADD_PRODUCT, EDIT_PRODUCT
}

type Products = NonNullable<ProductsQuery['products']>;
type Product = Omit<Products[number], 'price'> & {price: string};

interface ProductFormProps {
    product: Product | null | undefined,
    errors: FormikErrors<Product>,
    type: ProductFormType,
    handleSubmit?: any
}

export const ProductForm: React.FC<ProductFormProps> = ({product, errors, type, handleSubmit}) => {
    const {data} = useIngredientsQuery();

    const classes = useStyles();

    return (
        <Form>
            <List>
                <ListItem>
                    <Field name='name' type='input' label='Product' component={TextField}/>
                </ListItem>

                <ListItem>
                    <Field name='unit' type='input' label='Unit' component={TextField}/>
                </ListItem>

                <ListItem>
                    <Field name='price' type='input' label='Price' component={MoneyField}/>
                </ListItem>

                <div className={classes.productIngredientSection}>
                    <Typography className={classes.productIngredientTitle} variant='body2'color='textSecondary'>Ingredients: </Typography>
                    <Typography className={classes.productIngredientError} variant='body2' color='error'>{typeof errors.ingredients === 'string' ? errors.ingredients : null}</Typography>
                    <ul>
                        {!data?.ingredients ? 'loading...' :
                            <FieldArray
                                name='ingredients'
                                render={(arrayHelpers) =>
                                    <>
                                        {product?.ingredients.map(({id, ingredient: {id: currentIngredientId, name, unit}, amount}, index) => {
                                            let ingredientNameError;
                                            if (errors?.ingredients && typeof errors?.ingredients !== 'string' && errors.ingredients[index]) {
                                                // @ts-ignore
                                                ingredientNameError = errors.ingredients[index].ingredient?.id;
                                            }

                                            return (
                                                <li key={id} className={index === 0 ? classes.firstProductIngredient : classes.productIngredient}>
                                                    <FormControl className={classes.selectInput} error={!!ingredientNameError}>
                                                        <Field name={`ingredients[${index}].ingredient.id`} component={Select}>
                                                            {data?.ingredients?.map(({id: ingredientId, name}) => {
                                                                if (!product?.ingredients.some(({ingredient: {id: chosenIngredientId}}) => ingredientId === chosenIngredientId && ingredientId !== currentIngredientId)) {
                                                                    return (
                                                                        <MenuItem key={ingredientId} value={ingredientId}>{name}</MenuItem>
                                                                    )
                                                                }
                                                            })}
                                                        </Field>
                                                        <FormHelperText>{ingredientNameError}</FormHelperText>
                                                    </FormControl>
                                                    
                                                    <Field name={`ingredients[${index}].amount`} className={classes.amountInput} component={NumberField}/>
                                                    <span className={classes.unit}>
                                                        <Typography variant='body1' color='textSecondary' component='span'>{unit}</Typography>
                                                    </span>

                                                    <IconButton onClick={() => {arrayHelpers.remove(index)}}>
                                                        <RemoveCircle color="error"/>
                                                    </IconButton>
                                                </li>
                                            )
                                        })}

                                        <Button size='small' variant='outlined' color='primary'
                                                onClick={() => arrayHelpers.push({
                                                    id: product?.ingredients.length,
                                                    ingredient: {id: "", unit: "g"},
                                                    amount: 0
                                                })}
                                        >
                                            <Add color='inherit' className={classes.addIcon}/>
                                            Add
                                        </Button>
                                    </>
                                }
                            />
                        }
                    </ul>
                </div>
                
                {type === ProductFormType.ADD_PRODUCT ? 
                    <div className={classes.action}>
                        <Button onClick={handleSubmit} className={classes.addProduct} color='primary' variant='contained'>Add Product</Button>
                    </div> : null
                }
            </List>
        </Form>
    )
}