import { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { TextField, FormControl, Card, Dialog, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
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
        }
    })
);

export interface SignUpDialogProps {
    openDialog: boolean;
    onCloseDialog: () => void;
}

export const SignUpDialog = (props: SignUpDialogProps) => {
    const classes = useStyles();
    const { openDialog, onCloseDialog } = props;

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

    const handleChange = (event: any) => {
        setAdmin(event.target.value)
    }

    return (
        <Dialog open={openDialog} onClose={onCloseDialog}>
            <form className={classes.container} noValidate autoComplete="off">
                <Card>
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
                        </div>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">user type</FormLabel>
                            <RadioGroup aria-label="user type" name="user typer1" value={admin} onChange={handleChange}>
                                <FormControlLabel value="STUDENT" control={<Radio />} label="student" />
                                <FormControlLabel value="COMAPNY" control={<Radio />} label="company" />
                            </RadioGroup>
                        </FormControl>
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
        </Dialog>
    );
}