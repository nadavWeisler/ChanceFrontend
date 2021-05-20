import { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField, Dialog, Card, CardContent, CardActions, CardHeader, Button } from '@material-ui/core';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

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
    onDialogSubmit: () => void;
}

export const LoginDialog = (props: LoginDialogProps) => {
    const { openDialog, onDialogClose, onDialogSubmit } = props;

    const classes = useStyles();
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const { users } = useTypedSelector(state => state.user)
    const { fetchUsers } = useActions()

    const handleLogin = () => {
        fetchUsers(email, password);
        if (users.length <= 0) {
            alert("Wrong password");
        } else {
            alert("TO DASHBOARD");
        }
    };

    const handleUsernameChange = (event: any) => {
        setEmail(event.target.value)
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value)
    };

    return (
        <Dialog
            open={openDialog}
            onClose={onDialogClose}
        >
            <form className={classes.container} noValidate autoComplete="off">
                <Card>
                    <CardContent>
                        <div>
                            <TextField
                                fullWidth
                                id="username"
                                type="email"
                                label="Username"
                                placeholder="Username"
                                margin="normal"
                                onChange={handleUsernameChange}
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
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            className={classes.loginBtn}
                            href="Dashboard"
                            onClick={handleLogin}
                        >
                            Submit
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </Dialog>
    );
}