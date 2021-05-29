import { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField, Dialog, Card, CardContent, CardActions, Button } from '@material-ui/core';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { ResultSnackBar } from './ResultSnackBar';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: '#212121',
            color: '#fff'
        }
    })
);

export interface LoginDialogProps {
    openDialog: boolean;
    onDialogClose: () => void;
}

export const LoginDialog = (props: LoginDialogProps) => {
    const { openDialog, onDialogClose } = props;

    const classes = useStyles();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loginMsg, setLoginMsg] = useState<string>("");
    const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
    const [loginSuccess, setLoginSuccess] = useState<boolean>(false);

    const { access_token, user_id } = useTypedSelector(state => state.login);
    const { LoginUser } = useActions();

    const handleLogin = () => {
        LoginUser(email, password);

        if (access_token) {
            onDialogClose();
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('user_id', user_id);
            setLoginSuccess(true);
            setLoginMsg("Login successed!")
        } else {
            setLoginSuccess(false);
            setLoginMsg("Login failed.")
        }
        setOpenSnackBar(true);
    };

    return (
        <>
        <Dialog
            open={openDialog}
            onClose={onDialogClose}
        >
            <Card>
                <CardContent>
                    <TextField
                        fullWidth
                        type="email"
                        label="email"
                        placeholder="email"
                        onChange={(event: any) => setEmail(event.target.value)}
                    />
                    <TextField
                        fullWidth
                        type="password"
                        label="Password"
                        placeholder="Password"
                        onChange={(event: any) => setPassword(event.target.value)}
                    />
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        className={classes.loginBtn}
                        onClick={handleLogin}
                    >
                        Submit
                        </Button>
                </CardActions>
            </Card>
        </Dialog>
        <ResultSnackBar message={loginMsg} handleClose={() => setOpenSnackBar(false)} open={openSnackBar} success={loginSuccess ? true : false}/>
        </>
    );
}