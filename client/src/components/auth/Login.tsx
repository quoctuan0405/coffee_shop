import React from "react";
import {Button, Dialog, DialogContent, DialogTitle, IconButton, Typography, useMediaQuery} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import theme from "../../theme";
import {AuthForm} from "./AuthForm";

const useStyles = makeStyles((theme) => {
    return {
        title: {
            textAlign: 'center'
        },
        closeButton: {
            position: 'absolute',
            top: theme.spacing(1),
            right: theme.spacing(1)
        }
    }
});

export const Login = () => {
    const classes = useStyles();

    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const [openDialog, setOpenDialog] = React.useState(false);

    return (
        <>
            <Button onClick={() => {setOpenDialog(true)}}>Login</Button>
            <Dialog fullScreen={sm} open={openDialog} onClose={() => {setOpenDialog(false)}}>
                <DialogTitle disableTypography>
                    <Typography variant='h6' className={classes.title}>Login</Typography>
                    <IconButton className={classes.closeButton} onClick={() => {setOpenDialog(false)}}>
                        <Close/>
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <AuthForm/>
                </DialogContent>
            </Dialog>
        </>
    )
};