import React from 'react';
import {
    Card,
    IconButton,
    Typography,
} from "@material-ui/core";
import {ImportsQuery, useUpdateImportMutation} from '../../generated/operation';
import {makeStyles} from "@material-ui/core/styles";
import {Formik} from "formik";
import {grey} from "@material-ui/core/colors";
import {Save} from "@material-ui/icons";
import * as Yup from "yup";
import accounting from 'accounting';
import {ImportForm, ImportFormType} from './ImportForm';
import { DeleteImport } from './DeleteImport';

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

// type Imports = Exclude<ImportsQuery["imports"], null | undefined>;
type Imports = NonNullable<ImportsQuery["imports"]>;
type Import = Imports[number];

interface ImportEditProps {
    import: Import
}

export const ImportEdit: React.FC<ImportEditProps> = ({import: {id, amount, inStock, createdAt, ingredient: {id: ingredientId, name, unit}, total}}) => {
    const [updateImport] = useUpdateImportMutation();

    const classes = useStyles();

    return (
        <Card variant='outlined' className={classes.card}>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    ingredient: {id: ingredientId, name, unit}, 
                    amount: unit === 'g' || unit === 'ml' ? amount / 1000 : amount,
                    inStock: unit === 'g' || unit === 'ml' ? inStock / 1000 : inStock, 
                    total: accounting.formatMoney(total, {precision: 0, format: '%v'})
                }}
                validationSchema={Yup.object({
                    ingredient: Yup.object().shape({
                        id: Yup.string().required("Required"),
                    }),
                    amount: Yup.number().required("Required"),
                    inStock: Yup.number().required("Required"),
                    total: Yup.string().required("Required"),
                })}
                onSubmit={async ({ingredient: {id: ingredientId, unit}, inStock, amount, total}, {setSubmitting}) => {
                    const modifiedValues = {
                        id,
                        ingredient: ingredientId,
                        amount: unit === 'g' || unit === 'ml' ? (amount * 1000) : amount,
                        inStock: unit === 'g' || unit === 'ml' ? (inStock * 1000) : inStock,
                        total: accounting.unformat(total)
                    };

                    await updateImport({variables: modifiedValues});

                    setSubmitting(false);
                }}
            >
                {({values, isSubmitting, setValues, submitForm, dirty}) => {
                    const readableDate = new Date(createdAt);

                    return (
                        <>
                            <div className={classes.cardTitle}>
                                <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                                    <div style={{margin: 'auto'}}>
                                        <Typography variant='h6' component='span'>{name} </Typography>
                                        <Typography variant='body1' color='textSecondary' component='span'>({readableDate.toLocaleString()})</Typography>
                                    </div>
                                </div>
                                <IconButton disabled={!dirty || isSubmitting} onClick={submitForm} className={classes.saveButton}>
                                    <Save color={!dirty || isSubmitting ? 'disabled' : 'primary'}/>
                                </IconButton>
                            </div>

                            <div className={classes.cardContent}>
                                <ImportForm type={ImportFormType.EDIT_IMPORT} singleImport={values} handleSubmit={submitForm} setValues={setValues}/>
                            </div>

                            <div className={classes.cardAction}>
                                <DeleteImport id={id}/>
                            </div>
                        </>
                    )
                }}
            </Formik>
        </Card>
    )
};