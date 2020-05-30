import React from "react";
import {Button, Dialog, DialogContent, DialogTitle, IconButton, Typography, useMediaQuery} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import theme from "../../theme";
import {AddUserForm} from "./AddUserForm";
import {PersonAdd} from "@material-ui/icons";

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
        }
    }
});

export const AddUser = () => {
    const classes = useStyles();

    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const [openDialog, setOpenDialog] = React.useState(false);

    return (
        <>
            <Button variant='contained' color='primary' onClick={() => {setOpenDialog(true)}}>
                <PersonAdd color='inherit' className={classes.userDeleteIcon}/>
                Add user
            </Button>
            <Dialog fullScreen={sm} open={openDialog} onClose={() => {setOpenDialog(false)}}>
                <DialogTitle disableTypography>
                    <Typography variant='h6' className={classes.title}>Add User</Typography>
                    <IconButton className={classes.closeButton} onClick={() => {setOpenDialog(false)}}>
                        <Close/>
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <AddUserForm setOpenDialog={setOpenDialog}/>
                </DialogContent>
            </Dialog>
        </>
    )
};