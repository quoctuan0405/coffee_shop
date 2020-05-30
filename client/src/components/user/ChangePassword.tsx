import React from "react";
import {Button, Dialog, DialogContent, DialogTitle, IconButton, Typography, useMediaQuery, Slide} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {Formik, Form, Field} from "formik";
import {TextField} from "formik-material-ui";
import {makeStyles} from "@material-ui/core/styles";
import {usePasswordValidationMutation, useChangePasswordMutation} from "../../generated/operation";
import theme from "../../theme";

const useStyles = makeStyles((theme) => {
    return {
        title: {
            textAlign: 'center'
        },
        userDeleteIcon: {
            marginRight: theme.spacing(1)
        },
        closeButton: {
            position: 'absolute',
            top: theme.spacing(1),
            right: theme.spacing(1)
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
        button: {
            minWidth: 100,
            display: 'block',
            marginLeft: 'auto'
        }
    }
});

enum Stages {
    CONFIRM_PASSWORD,
    NEW_PASSWORD
}

export const ChangePassword = () => {
    const classes = useStyles();

    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const [passwordValidate] = usePasswordValidationMutation();
    const [changePassword] = useChangePasswordMutation();

    const [openDialog, setOpenDialog] = React.useState(false);
    const [stage, setStage] = React.useState<Stages>(Stages.CONFIRM_PASSWORD);

    
    const validatePassword = async (password: string) => {
        const {data} = await passwordValidate({variables: {password}});

        if (!data?.passwordValidation) {
            return "Wrong password. Please try again.";
        }

        setStage(Stages.NEW_PASSWORD);
    }

    return (
        <>
            <Button variant='text' onClick={() => {setOpenDialog(true)}}>
                Change Password
            </Button>
            <Dialog fullScreen={sm} open={openDialog} onClose={() => {setOpenDialog(false)}}>
                <DialogTitle disableTypography>
                    <Typography variant='h6' className={classes.title}>Change Password</Typography>
                    <IconButton className={classes.closeButton} onClick={() => {setOpenDialog(false); setStage(Stages.CONFIRM_PASSWORD)}}>
                        <Close/>
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Formik
                        enableReinitialize
                        validateOnChange={false}
                        validateOnBlur={false}
                        initialValues={{oldPassword: "", newPassword: ""}}
                        onSubmit={async (values, {setSubmitting}) => {
                            await changePassword({variables: values});

                            setSubmitting(false);
                            setOpenDialog(false);
                            setStage(Stages.CONFIRM_PASSWORD);
                        }}
                    >
                        {({submitForm, validateField}) => 
                            <Form>
                                <Slide direction="left" in={stage === Stages.CONFIRM_PASSWORD} timeout={{enter: 200, exit: 0}} mountOnEnter unmountOnExit>
                                    <div>
                                        <div className={classes.textField}>
                                            <Field name="oldPassword" type="password" label="Confirm password" validate={validatePassword} autoFocus component={TextField}/>
                                        </div>
                                        <Button onClick={() => {validateField("oldPassword")}} variant='contained' color='primary' className={classes.button}>Next</Button>
                                    </div>
                                </Slide>

                                <Slide direction="left" in={stage === Stages.NEW_PASSWORD} timeout={{enter: 200, exit: 0}} mountOnEnter unmountOnExit>
                                    <div>
                                        <div className={classes.textField}>
                                            <Field name="newPassword" type="password" label="New password" autoFocus component={TextField}/>
                                        </div>
                                        <Button variant='contained' color='primary' onClick={submitForm} className={classes.button}>Change</Button>
                                    </div>
                                </Slide>
                            </Form>
                        }
                    </Formik>
                </DialogContent>
            </Dialog>
        </>
    )
};