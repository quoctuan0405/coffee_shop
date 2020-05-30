import React from 'react';
import {Card, IconButton} from "@material-ui/core";
import {Ingredient, useUpdateIngredientMutation} from '../../generated/operation'
import {makeStyles} from "@material-ui/core/styles";
import {Field, Form, Formik} from "formik";
import {TextField} from "formik-material-ui";
import {Save} from "@material-ui/icons";
import {DeleteIngredient} from "./DeleteIngredient";

const useStyles = makeStyles(theme => {return {
    card: {
        width: '100%',
        marginBottom: theme.spacing(1),
        padding: theme.spacing(1),
        display: 'flex',
        flexFlow: 'row wrap',
        '& > *': {
            flex: 1,
            margin: 'auto'
        }
    },
    form: {
        flex: 1,
        display: 'flex',
        '& > *': {
            flex: 1
        }
    },
    saveButton: {
        flex: 0
    },
    deleteButton: {
        flex: 0
    }
}});

interface UserEditProps {
    ingredient: Ingredient
}

export const IngredientEdit: React.FC<UserEditProps> = ({ingredient: {id, name, unit}}) => {
    const [updateIngredient] = useUpdateIngredientMutation();

    const classes = useStyles();

    return (
        <Card variant='outlined' className={classes.card}>
            <Formik
                enableReinitialize={true}
                initialValues={{name, unit}}
                onSubmit={async (values, {setSubmitting}) => {
                    await updateIngredient({
                        variables: {
                            id,
                            name: values.name,
                            unit: values.unit
                        }
                    });

                    setSubmitting(false);
                }}
            >
                {({isSubmitting, submitForm, dirty}) =>
                    <Form className={classes.form}>
                        <Field name='name' type='input' label='Ingredient' component={TextField}/>

                        <Field name='unit' type='input' label='Unit' component={TextField}/>

                        <IconButton className={classes.saveButton} disabled={!dirty || isSubmitting} onClick={submitForm}>
                            <Save color={!dirty || isSubmitting ? 'disabled' : 'primary'}/>
                        </IconButton>
                    </Form>
                }
            </Formik>
            <div className={classes.deleteButton}>
                <DeleteIngredient id={id}/>
            </div>
        </Card>
    )
};