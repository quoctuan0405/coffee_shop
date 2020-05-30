import React from "react";
import {Formik, Form, Field} from "formik";
import {TextField, Select} from "formik-material-ui";
import {Button, FormControl, InputLabel, MenuItem} from "@material-ui/core";
import {Add} from '@material-ui/icons';
import {makeStyles} from "@material-ui/core/styles";
import {GET_USERS} from "../../graphql/queries";
import {
    Query, useCreateUserMutation,
    UserRole, useUsernameTakenMutation
} from "../../generated/operation";
import * as Yup from 'yup';

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
    username: string,
    role: UserRole
}

const UserFormValues: UserFormValues = {
    username: '',
    role: UserRole.Employee
};

interface AddUserFormProps {
    setOpenDialog?: any
}

export const AddUserForm: React.FC<AddUserFormProps> = ({setOpenDialog}) => {
    const classes = useStyles();

    const [createUser, {loading}] = useCreateUserMutation({
        update(cache, {data}) {
            const userList = cache.readQuery<Query>({query: GET_USERS});

            if (data && data.createUser && userList?.users) {
                cache.writeQuery({
                    query: GET_USERS,
                    data: {users: userList.users.concat([data.createUser])}
                })
            } else if (data && userList === null) {
                cache.writeQuery({
                    query: GET_USERS,
                    data: {users: data.createUser}
                })
            }
        }
    });

    const [checkUsernameTaken, {loading: checkUsernameLoading}] = useUsernameTakenMutation();

    const validateUsername = async (username: string): Promise<string> => {
        const {data} = await checkUsernameTaken({variables: {username}});

        if (data?.usernameTaken) {
            return "Username has been taken."
        }
        return "";
    };

    return (
        <Formik
            initialValues={UserFormValues}
            validationSchema={Yup.object({
                username: Yup.string().required("Required"),
                role: Yup.string().required("Required")
            })}
            onSubmit={async ({role, username}, {setSubmitting}) => {
                await createUser({variables: {role, username}});

                setOpenDialog(false);
                setSubmitting(false);
            }}
        >
            { ({isSubmitting, submitForm}) => {
                return (
                    <Form>
                        <div className={classes.firstTextField}>
                            <Field validate={validateUsername} name='username' type='text' label='Username' autoFocus component={TextField}/>
                        </div>
                        <div className={classes.textField}>
                            <FormControl>
                                <InputLabel>Role</InputLabel>
                                <Field component={Select} name="role">
                                    <MenuItem value={UserRole.Employee}>Employee</MenuItem>
                                    <MenuItem value={UserRole.Manager}>Manager</MenuItem>
                                </Field>
                            </FormControl>
                        </div>
                        <div className={classes.action}>
                            <div className={classes.grow}/>
                            <Button onClick={submitForm} disabled={loading || checkUsernameLoading || isSubmitting} variant='contained' color='primary'>
                                <Add color='inherit' className={classes.addIcon}/>
                                Add
                            </Button>
                        </div>
                    </Form>
            )}}
        </Formik>
    )
};