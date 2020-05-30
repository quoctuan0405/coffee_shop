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
import {useProductsQuery} from '../../generated/operation';

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

export enum OrderFormType {
    ADD_ORDER, EDIT_ORDER
}

interface OrderValue {
    id: string,
    table: number,
    products: {
        id: string
        product: {id: string, name: string, unit: string},
        amount: number
    }[]
}

interface OrderFormProps {
    order: OrderValue | null | undefined,
    errors: FormikErrors<OrderValue>,
    type: OrderFormType,
    handleSubmit?: any
    setValues?: any
}

export const OrderForm: React.FC<OrderFormProps> = ({order, errors, type, handleSubmit, setValues}) => {
    const {data} = useProductsQuery();

    const classes = useStyles();

    return (
        <Form>
            <List>
                <ListItem>
                    <Field name='table' type='input' label='Table' component={NumberField}/>
                </ListItem>

                <div className={classes.productIngredientSection}>
                    <Typography className={classes.productIngredientTitle} variant='body2'color='textSecondary'>Product: </Typography>
                    <Typography className={classes.productIngredientError} variant='body2' color='error'>{typeof errors.products === 'string' ? errors.products : null}</Typography>
                    <ul>
                        {!data?.products ? 'loading...' :
                            <FieldArray
                                name='products'
                                render={(arrayHelpers) =>
                                    <>
                                        {order?.products.map(({id, product: {id: currentProductId, name, unit}, amount}, index) => {
                                            let productNameError;
                                            if (errors?.products && typeof errors?.products !== 'string' && errors.products[index]) {
                                                // @ts-ignore
                                                productNameError = errors.products[index].product?.id;
                                            }

                                            const setProductPrice = (event: React.ChangeEvent<HTMLSelectElement>): void => {
                                                const productId = event.target.value;

                                                const product = data?.products?.find(({id}) => id === productId);

                                                if (product && setValues) {
                                                    const modifiedOrder = order;
                                                    modifiedOrder.products[index].product = product;
                                                    setValues(modifiedOrder);
                                                }
                                            }

                                            return (
                                                <li key={id}
                                                    className={index === 0 ? classes.firstProductIngredient : classes.productIngredient}>
                                                    <FormControl className={classes.selectInput} error={!!productNameError}>
                                                        <Field name={`products[${index}].product.id`} component={Select} onClick={setProductPrice}>
                                                            {data?.products?.map(({id: productId, name}) => {
                                                                if (!order?.products.some(({product: {id: chosenProductId}}) => productId === chosenProductId && productId !== currentProductId)) {
                                                                    return (
                                                                        <MenuItem key={productId} value={productId}>{name}</MenuItem>
                                                                    )
                                                                }
                                                            })}
                                                        </Field>
                                                        <FormHelperText>{productNameError}</FormHelperText>
                                                    </FormControl>
                                                    <Field name={`products[${index}].amount`} className={classes.amountInput} component={NumberField}/>
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
                                                    id: order?.products.length,
                                                    product: {id: "", unit: ""},
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
                
                {type === OrderFormType.ADD_ORDER ? 
                    <div className={classes.action}>
                        <Button onClick={handleSubmit} className={classes.addProduct} color='primary' variant='contained'>Create order</Button>
                    </div> : null
                }
            </List>
        </Form>
    )
}