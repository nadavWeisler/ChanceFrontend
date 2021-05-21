import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { Redirect } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { Checkbox, Dialog } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`
        },
        signupBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: '#212121',
            color: '#fff'
        },
        card: {
            marginTop: theme.spacing(10)
        }
    })
);

export interface SignUpDialogProps {
    openDialog: boolean;
    onCloseDialog: () => void;
}

export const SignUpDialog = (props: SignUpDialogProps) => {
    const classes = useStyles();
    const {openDialog, onCloseDialog} = props;

    return (
        <Dialog open={openDialog}>
            <form className={classes.container} noValidate autoComplete="off">
                <Card className={classes.card}>
                    <CardHeader className={classes.header} title="Sign Up" />
                    <CardContent>
                        <div>
                            <TextField
                                fullWidth
                                id="name"
                                type="name"
                                label="Name"
                                placeholder="Name"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                id="username"
                                type="email"
                                label="Username"
                                placeholder="Username"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                id="eamil"
                                type="email"
                                label="email"
                                placeholder="email"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                id="password"
                                type="password"
                                label="Password"
                                placeholder="Password"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                id="r_password"
                                type="r_password"
                                label="Validate Password"
                                placeholder="Validate Password"
                                margin="normal"
                            />
                            <Typography variant="h6" component="h6">
                                chek if admin
                        </Typography>
                            <Checkbox
                                value="Admin"
                                inputProps={{ 'aria-label': 'Checkbox A' }}
                            />
                        </div>
                    </CardContent>
                    <CardActions>
                        <Link to="/">
                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                className={classes.signupBtn}
                                // onClick={handleSignUp}
                                disabled={false}>
                                signup
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </form>
        </Dialog>
    );
}