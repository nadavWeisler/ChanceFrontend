import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

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

//state type
// init all vairable
type State = {
    name: string
    username: string
    email: string
    password: string
    repasword: string
    validpassword: boolean
    admin: boolean
    isButtonDisabled: boolean
    helperText: string
    isError: boolean
};

const initialState: State = {
    name: '',
    username: '',
    email: '',
    password: '',
    repasword: '',
    validpassword: false,
    admin: false,
    isButtonDisabled: true,
    helperText: '',
    isError: false
};

export const SignUp = () => {
    const classes = useStyles();
    return (
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
                    </div>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        className={classes.signupBtn}
                        disabled={false}>
                        signup
            </Button>
                </CardActions>
            </Card>
        </form>
    );
}

export default SignUp;
