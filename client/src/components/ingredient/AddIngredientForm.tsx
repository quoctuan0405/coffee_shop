import React from "react";
import {Formik, Form, Field} from "formik";
import {TextField} from "formik-material-ui";
import {Button} from "@material-ui/core";
import {Add} from '@material-ui/icons';
import {makeStyles} from "@material-ui/core/styles";
import {GET_INGREDIENTS} from "../../graphql/queries";
import {
    useCreateIngredientMutation, IngredientsQuery, IngredientsQueryVariables
} from "../../generated/operation";

const useStyles = makeStyles((theme) => {return {
    firstTextField: {
        '& > *': {
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                minWidth: 400,
            },
        },
        marginBottom: 15
    },
    textField: {
        '& > *': {
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                minWidth: 400,
            },
        },
        marginTop: 15,
        marginBottom: 15
    },
    action: {
        display: 'flex',
        marginTop: 30,
        marginBottom: 10
    },
    addIcon: {
        marginRight: 5
    },
    grow: {
        flexGrow: 1
    },
    loginButton: {
        minWidth: 100
    }
}});

interface UserFormValues {
    name: string,
    unit: string
}

const UserFormValues: UserFormValues = {
    name: '',
    unit: ''
};

interface AddIngredientFormProps {
    setOpenDialog: any
}

export const AddIngredientForm: React.FC<AddIngredientFormProps> = ({setOpenDialog}) => {
    const classes = useStyles();

    const [createIngredient] = useCreateIngredientMutation({
        update(cache, {data}) {
            const ingredientList = cache.readQuery<IngredientsQuery, IngredientsQueryVariables>({query: GET_INGREDIENTS});

            if (data && data.createIngredient && ingredientList?.ingredients) {
                cache.writeQuery({
                    query: GET_INGREDIENTS,
                    data: {ingredients: ingredientList.ingredients.concat([data.createIngredient])}
                })
            } else if (data && ingredientList === null) {
                cache.writeQuery({
                    query: GET_INGREDIENTS,
                    data: {ingredients: data.createIngredient}
                })
            }
        }
    });

    return (
        <Formik
            initialValues={UserFormValues}
            onSubmit={async ({name, unit}, {setSubmitting}) => {
                await createIngredient({
                    variables: {
                        name,
                        unit
                    }
                });

                setSubmitting(false);
                setOpenDialog(false);
            }}
        >
            { ({isSubmitting, submitForm}) =>
                <Form>
                    <div className={classes.firstTextField}>
                        <Field name='name' type='text' label='Ingredient' autoFocus component={TextField}/>
                    </div>
                    <div className={classes.textField}>
                        <Field name='unit' type='text' label='Unit' component={TextField}/>
                    </div>
                    <div className={classes.action}>
                        <div className={classes.grow}/>
                        <Button onClick={submitForm} disabled={isSubmitting} variant='contained' color='primary'>
                            <Add color='inherit' className={classes.addIcon}/>
                            Add
                        </Button>
                    </div>
                </Form>
            }
        </Formik>
    )
};