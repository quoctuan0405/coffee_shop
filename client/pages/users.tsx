import React from "react";
import {Header} from "../src/components/Header";
import {AddUser} from "../src/components/user/AddUser";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {UserEdit} from "../src/components/user/UserEdit";
import {useGetUsersQuery} from "../src/generated/operation";
import {withAuth} from "../lib/withAuth";
import { ChangePassword } from "../src/components/user/ChangePassword";

const useStyles = makeStyles(theme => {return {
    paper: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        width: 600,
        margin: 'auto',
        marginTop: theme.spacing(2),
        padding: theme.spacing(2)
    },
    userList: {
        marginTop: theme.spacing(2),
    },
    admin: {
        marginTop: theme.spacing(3)
    }
}});

const Users = () => {
    const classes = useStyles();

    const {loading, data} = useGetUsersQuery();

    if (!loading) {
        return (
            <>
                <Header/>
                <Paper className={classes.paper}>
                    <ChangePassword/>
                    <div className={classes.admin}>
                        <AddUser/>
                        <div className={classes.userList}>
                            {data?.users?.map((user) =>
                                <UserEdit key={user.id} user={user}/>
                            )}
                        </div>
                    </div>
                </Paper>
            </>
        )
    }

    return (
        <>
            <Header/>
            <div>Loading...</div>
        </>
    )
};

export default withAuth(Users);