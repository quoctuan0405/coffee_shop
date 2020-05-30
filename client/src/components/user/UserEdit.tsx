import React from 'react';
import {Card, FormControl, InputLabel, MenuItem, Typography, IconButton} from "@material-ui/core";
import {
    User,
    UserRole,
    useUpdateUserMutation
} from '../../generated/operation'
import {makeStyles} from "@material-ui/core/styles";
import {Field, Form, Formik} from "formik";
import {Select, TextField} from "formik-material-ui";
import { teal } from '@material-ui/core/colors';
import {Save} from "@material-ui/icons";
import {StoreState} from "../../reducers";
import {setMe} from "../../actions";
import {DeleteUser} from "./DeleteUser";
import {connect} from "react-redux";

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
    meCard: {
        width: '100%',
        marginBottom: theme.spacing(1),
        padding: theme.spacing(1),
        display: 'flex',
        flexFlow: 'row wrap',
        '& > *': {
            flex: 1,
            margin: 'auto'
        },
        background: teal[900]
    },
    form: {
        display: 'flex',
    },
    textField: {
        [theme.breakpoints.up('md')]: {
            flex: 1.25,
        },
        flex: 1.2,
        marginRight: theme.spacing(2),
    },
    selectInput: {
        width: '100%',
        marginRight: theme.spacing(2),
        flex: 1
    },
    deleteButton: {
        flex: 0
    }
}});

interface UserEditProps {
    me: User
    setMe: typeof setMe
    user: User
}

const _UserEdit: React.FC<UserEditProps> = ({user: {id, username, role}, me, setMe}) => {
    const classes = useStyles();

    const [updateUser, {data}] = useUpdateUserMutation();

    if (me.id === id) {
        return (
            <Card variant='outlined' className={classes.meCard}>
                <Formik
                    initialValues={{username, role}}
                    onSubmit={async (values, {setSubmitting}) => {
                            await updateUser({variables: {id, role: values.role, username: values.username}});

                            if (data && data.updateUser) {
                                setMe(data?.updateUser);
                            }

                            setSubmitting(false);
                        }
                    }
                >
                    {({isSubmitting, submitForm, dirty}) =>
                        <Form className={classes.form}>
                            <Field className={classes.textField} name='username' type='text' label='Username' component={TextField}/>

                            <FormControl className={classes.selectInput}>
                                <InputLabel>Role</InputLabel>
                                <Field name='role' component={Select}>
                                    <MenuItem value={UserRole.Manager}>Manager</MenuItem>
                                    <MenuItem value={UserRole.Employee}>Employee</MenuItem>
                                </Field>
                            </FormControl>

                            <IconButton disabled={!dirty || isSubmitting} onClick={submitForm}>
                                <Save color={!dirty || isSubmitting ? 'disabled' : 'primary'}/>
                            </IconButton>
                        </Form>
                    }
                </Formik>
                <div className={classes.deleteButton}>
                    <DeleteUser id={id}/>
                </div>
            </Card>
        )
    }

    return (
        <Card variant='outlined' className={classes.card}>
            <Typography variant='body1'>{username}</Typography>
            <Formik
                initialValues={{role}}
                onSubmit={async (values, {setSubmitting}) => {
                        await updateUser({variables: {id, role: values.role}});

                        setSubmitting(false);
                    }
                }
            >
                {({isSubmitting, submitForm, dirty}) =>
                    <Form className={classes.form}>
                        <FormControl className={classes.selectInput}>
                            <InputLabel>Role</InputLabel>
                            <Field name='role' component={Select}>
                                <MenuItem value={UserRole.Manager}>Manager</MenuItem>
                                <MenuItem value={UserRole.Employee}>Employee</MenuItem>
                            </Field>
                        </FormControl>

                        <IconButton disabled={!dirty || isSubmitting} onClick={submitForm}>
                            <Save color={!dirty || isSubmitting ? 'disabled' : 'primary'}/>
                        </IconButton>
                    </Form>
                }
            </Formik>
            <div className={classes.deleteButton}>
                <DeleteUser id={id}/>
            </div>
        </Card>
    )
};

const mapStateToProps = (state: StoreState) => {
    return {me: state.me}
}

// @ts-ignore
export const UserEdit = connect(mapStateToProps, {setMe})(_UserEdit);