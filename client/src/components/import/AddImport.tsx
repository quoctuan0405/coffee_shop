import React from "react";
import {Button, Dialog, DialogContent, DialogTitle, IconButton, Typography, useMediaQuery} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import theme from "../../theme";
import {Add} from "@material-ui/icons";
import { Formik } from "formik";
import * as Yup from 'yup';
import { ImportsQueryVariables, useCreateImportMutation, ImportsQuery } from "../../generated/operation";
import { GET_IMPORTS } from "../../graphql/queries";
import {ImportForm, ImportFormType} from './ImportForm';
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

export const AddImport = () => {
    const classes = useStyles();

    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const [openDialog, setOpenDialog] = React.useState(false);

    const [createImport] = useCreateImportMutation({
        update(cache, {data}) {
            const importList = cache.readQuery<ImportsQuery, ImportsQueryVariables>({query: GET_IMPORTS});

            if (data && data.createImport && importList?.imports) {
                cache.writeQuery({
                    query: GET_IMPORTS,
                    data: {imports: [...[data.createImport], ...importList.imports]}
                })
            } else if (data && importList === null) {
                cache.writeQuery({
                    query: GET_IMPORTS,
                    data: {imports: data.createImport}
                })
            }
        }
    });

    return (
        <>
            <Button variant='contained' color='primary' onClick={() => {setOpenDialog(true)}}>
                <Add color='inherit' className={classes.addIcon}/>
                Add an import
            </Button>
            <Dialog fullWidth fullScreen={sm} open={openDialog} onClose={() => {setOpenDialog(false)}}>
                <DialogTitle disableTypography>
                    <Typography variant='h6' className={classes.title}>Add Import</Typography>
                    <IconButton className={classes.closeButton} onClick={() => {setOpenDialog(false)}}>
                        <Close/>
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Formik
                        validationSchema={Yup.object({
                            ingredient: Yup.object().shape({
                                id: Yup.string().required("Required"),
                            }),
                            amount: Yup.number().required("Required"),
                            inStock: Yup.number().required("Required"),
                            total: Yup.string().required("Required"),
                        })}
                        initialValues={{
                            ingredient: {id: "", name: "", unit: ""},
                            amount: 0,
                            inStock: 0,
                            total: "0",
                        }}
                        onSubmit={async ({ingredient: {id: ingredientId, unit}, amount, total}, {setSubmitting}) => {
                            const modifiedValues = {
                                ingredient: ingredientId,
                                amount: unit === 'g' || unit === 'ml' ? (amount * 1000) : amount,
                                total: accounting.unformat(total)
                            };

                            await createImport({variables: modifiedValues})

                            setOpenDialog(false);
                            setSubmitting(false);
                        }}
                    >
                        {({values, handleSubmit, setValues}) => 
                            <>
                                <ImportForm type={ImportFormType.ADD_IMPORT} singleImport={values} setValues={setValues} handleSubmit={handleSubmit}/>
                            </>
                        }
                    </Formik>
                </DialogContent>
            </Dialog>
        </>
    )
};