import React, { useReducer, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { Redirect } from 'react-router';
import { Login } from './Login';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { Checkbox } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
    FormControl,
    FormLabel,
    FormControlLabel,
    FormGroup,
    Box, 
    RadioGroup,
    Radio
} from "@material-ui/core";


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
    email: string
    password: string
    repasword: string
    admin: string
};

const initialState: State = {
    name: '',
    email: '',
    password: '',
    repasword: '',
    admin: ''
};

export const SignUp = () => {
    const classes = useStyles();
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [repassword, setRePassword] = useState<string>("")
    const [admin, setAdmin] = useState<string>("")

    const handleNameChange = (event: any) => {
        setName(event.target.value)
    };

    const handleMailChange = (event: any) => {
        setEmail(event.target.value)
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value)
    };

    const handlerePasswordChange = (event: any) => {
        setRePassword(event.target.value)
    };

    const handleAdmin = (event: any) => {
        setAdmin(event.target.value)
    };

    const handleChange = (event: any) =>
    {
        setAdmin(event.target.value)
    }

    const handleSignUp = () => {
        <Redirect
            to={{
                pathname: "/Login",
                state: { Login }
            }}
        />
    };
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
                            onChange={handleNameChange}
                        />
                        <TextField
                            fullWidth
                            id="eamil"
                            type="email"
                            label="email"
                            placeholder="email"
                            margin="normal"
                            onChange={handleMailChange}
                        />
                        <TextField
                            fullWidth
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="Password"
                            margin="normal"
                            onChange={handlePasswordChange}
                        />
                        <TextField
                            fullWidth
                            id="r_password"
                            type="r_password"
                            label="Validate Password"
                            placeholder="Validate Password"
                            margin="normal"
                            onChange={handlerePasswordChange}
                        />
                        <TextField
                            fullWidth
                            id="admin"
                            type="types"
                            label="enter STUDENT or COMPANY"
                            placeholder="STUDENT"
                            margin="normal"
                            onChange={handlerePasswordChange}
                        />
                    </div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">user type</FormLabel>
                        <RadioGroup aria-label="user type" name="user typer1" value ={admin} onChange={handleChange}>
                            <FormControlLabel value="STUDENT" control={<Radio />} label="student" />
                            <FormControlLabel value="COMAPNY" control={<Radio />} label="company" />
                        </RadioGroup>
                    </FormControl>
                </CardContent>
                <CardActions>
                    <Link to="/">
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            className={classes.signupBtn}
                            onClick={handleSignUp}
                            disabled={false}>
                            signup
                            </Button>
                    </Link>
                </CardActions>
            </Card>
        </form>
    );
}

export default SignUp;
