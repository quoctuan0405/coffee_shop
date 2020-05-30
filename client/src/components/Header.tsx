import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import Link from "next/link";
import {makeStyles} from "@material-ui/core/styles";
import {Login} from "./auth/Login";
import {connect} from "react-redux";
import {StoreState} from "../reducers";
import {Logout} from "./auth/Logout";
import {UserRole} from "../generated/operation";

const useStyles = makeStyles((theme) => {
    return {
        title: {
            cursor: 'pointer',
        },
        linkSection: {
            marginLeft: theme.spacing(1),
            display: 'flex',
            flexFlow: 'row wrap',
            "& > *": {
                marginLeft: theme.spacing(1)
            }
        },
        link: {
            cursor: 'pointer',
        },
        grow: {
            flexGrow: 1
        }
    }
});

interface HeaderProps {
    me: StoreState["me"]
}

const _Header: React.FC<HeaderProps> = ({me}) => {
    const classes = useStyles();

    if (me?.role === UserRole.Employee) {
        return (
            <AppBar position='static'>
                <Toolbar>
                    <Link href='/'>
                        <Typography variant='h6' className={classes.title}>Coffee Shop</Typography>
                    </Link>

                    <div className={classes.linkSection}>
                        <Link href='/ingredient'>
                            <Typography variant='body1' className={classes.link}>Ingredient</Typography>
                        </Link>
                        <Link href='/product'>
                            <Typography variant='body1' className={classes.link}>Product</Typography>
                        </Link>
                        <Link href='/order'>
                            <Typography variant='body1' className={classes.link}>Order</Typography>
                        </Link>
                    </div>
                    <div className={classes.grow}/>

                    <Logout/>
                </Toolbar>
            </AppBar>
        )

    } else if (me?.role === UserRole.Manager) {
        return (
            <AppBar position='static'>
                <Toolbar>
                    <Link href='/'>
                        <Typography variant='h6' className={classes.title}>Coffee Shop</Typography>
                    </Link>

                    <div className={classes.linkSection}>
                        <Link href='/users'>
                            <Typography variant='body1' className={classes.link}>Users</Typography>
                        </Link>
                        <Link href='/ingredient'>
                            <Typography variant='body1' className={classes.link}>Ingredient</Typography>
                        </Link>
                        <Link href='/product'>
                            <Typography variant='body1' className={classes.link}>Product</Typography>
                        </Link>
                        <Link href='/order'>
                            <Typography variant='body1' className={classes.link}>Order</Typography>
                        </Link>
                        <Link href='/store'>
                            <Typography variant='body1' className={classes.link}>Store</Typography>
                        </Link>
                        <Link href='/expense'>
                            <Typography variant='body1' className={classes.link}>Expense</Typography>
                        </Link>
                    </div>
                    <div className={classes.grow}/>

                    <Logout/>
                </Toolbar>
            </AppBar>
        )

    } else {
        return (
            <AppBar position='static'>
                <Toolbar>
                    <Link href='/'>
                        <Typography variant='h6' className={classes.title}>Coffee Shop</Typography>
                    </Link>

                    <div className={classes.grow}/>

                    <Login/>
                </Toolbar>
            </AppBar>
        )
    }
};

const mapStateToProps = (state: StoreState) => {
    return {me: state.me}
};

export const Header = connect(mapStateToProps)(_Header);