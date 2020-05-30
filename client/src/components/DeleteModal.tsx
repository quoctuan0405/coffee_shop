import React from 'react';
import {Button, Dialog, DialogTitle, DialogContent, Typography, IconButton, useMediaQuery} from '@material-ui/core';
import {Close, Delete} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import theme from "../theme";
import {Formik, Form} from 'formik';
import {red} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => {
    return {
        outerDeleteButton: {
            width: 100,
            background: red[700],
            color: 'white'
        },
        title: {
            textAlign: 'center'
        },
        closeButton: {
            position: 'absolute',
            top: theme.spacing(1),
            right: theme.spacing(1)
        },
        content: {
            minWidth: 400,
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(3),
        },
        action: {
            display: 'flex',
            flexFlow: 'row wrap',
            '& > *': {
                width: 100
            }
        },
        deleteButton: {
            background: red[800],
            marginLeft: 'auto',
            color: 'white',
        }
    }
});

export enum ButtonType {
    CONTAINED,
    ICON
}

interface DeleteModalProps {
    buttonType?: ButtonType
    type: string
    handleSubmit: any
}

export const DeleteModal: React.FC<DeleteModalProps> = ({handleSubmit, type, buttonType}) => {
    const classes = useStyles();

    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    const [openDialog, setOpenDialog] = React.useState(false);

    return (
        <>
            {buttonType === ButtonType.ICON ? 
                <IconButton onClick={() => {setOpenDialog(true)}}>
                    <Delete color='error'/>
                </IconButton>:
                <Button className={classes.outerDeleteButton} variant='contained' onClick={() => {setOpenDialog(true)}}>Delete</Button>
            }
            <Dialog fullScreen={sm} open={openDialog} onClose={() => {setOpenDialog(false)}}>
                <DialogTitle disableTypography>
                    <Typography variant='h6' className={classes.title}>Delete {type}</Typography>
                    <IconButton className={classes.closeButton} onClick={() => {setOpenDialog(false)}}>
                        <Close/>
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Formik
                        initialValues={{}}
                        onSubmit={async () => {
                            await handleSubmit();
                        }}
                    >
                        {({isSubmitting, submitForm}) =>
                            <Form>
                                <Typography className={classes.content} variant='body1'>Are you sure you want to delete this {type}?</Typography>
                                <div className={classes.action}>
                                    <Button onClick={() => {setOpenDialog(false)}} color='primary' variant='contained'>Cancel</Button>
                                    <Button onClick={submitForm} disabled={isSubmitting} className={classes.deleteButton} variant='contained'>Delete</Button>
                                </div>
                            </Form>
                        }
                    </Formik>
                </DialogContent>
            </Dialog>
        </>
    )
}