import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Button} from "@material-ui/core";
import {useLogoutMutation} from "../../generated/operation";
import {logMeOut} from "../../actions";
import Router from "next/router";

interface LogoutProps {
    logMeOut: typeof logMeOut
}

const _Logout: React.FC<LogoutProps> = ({logMeOut}) => {
    const [logout, {client, data, error}] = useLogoutMutation({onCompleted: async () => {
            client?.resetStore();
        }
    });

    useEffect(() => {
        if (data && !error) {
            Router.push('/').then(() => {
                logMeOut();
            });
        }
    }, [data, error]);

    return (
        <>
            <Button onClick={async () => {await logout()}}>Logout</Button>
        </>
    )
};

// @ts-ignore
export const Logout = connect(null, {logMeOut})(_Logout);