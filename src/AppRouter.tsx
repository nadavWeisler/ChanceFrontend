import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Login } from './Login';
import { SignUp } from './Signup';
import { PageNotFound } from './PageNotFound'
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    }
}));

export const AppRouter = () => {
    const classes = useStyles();
    const [Authorized, setAuthorized] = useState<boolean>(false);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/" component={Login} exact />
                                <Route path="/signup" component={SignUp} exact/>
                                <Route component={PageNotFound} />
                            </Switch>
                        </BrowserRouter>
                </Container>
            </main>
        </div>
    )
}