import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Formik, Form, Field} from "formik";
import {TextField} from "formik-material-ui";
import {Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useLoginMutation} from "../../generated/operation";
import {setMe} from "../../actions";
import * as Yup from 'yup';
import {red} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => {
    return {
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
        grow: {
            flexGrow: 1
        },
        loginButton: {
            minWidth: 100
        },
        error: {
            color: red[800]
        }
    }
});

interface AuthFormProps {
    setMe: typeof setMe
}

const _AuthForm: React.FC<AuthFormProps> = ({setMe}) => {
    const classes = useStyles();

    const [login, {data, error}] = useLoginMutation();

    useEffect(() => {
        if (data && !error) {
            setMe(data.login);
        }
    }, [data]);

    return (
        <Formik
            initialValues={{username: '', password: ''}}
            validateOnChange={false}
            validationSchema={Yup.object({
                username: Yup.string().required("Required"),
                password: Yup.string().required("Required")
            })}
            onSubmit={async ({username, password}, {setSubmitting}) => {
                await login({variables: {username, password}});

                setSubmitting(false);
            }}
        >
            {({isSubmitting, submitForm}) =>
                <Form>
                    <div className={classes.firstTextField}>
                        <Field name='username' type='text' label='Username' component={TextField}/>
                    </div>
                    <div className={classes.textField}>
                        <Field name='password' type='password' label='Password' component={TextField}/>
                    </div>

                    <div className={classes.error}>
                        <Typography variant='body1'>{error ? "Your username or password is wrong. Please try again." : null}</Typography>
                    </div>

                    <div className={classes.action}>
                        <div className={classes.grow}/>
                        <Button variant='contained' color='primary' onClick={submitForm} className={classes.loginButton} disabled={isSubmitting}>Login</Button>
                    </div>
                </Form>
            }
        </Formik>
    )
};

// @ts-ignore
export const AuthForm = connect(null, {setMe})(_AuthForm);