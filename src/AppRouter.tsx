import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Login } from './components/Login';
import { SignUp } from './components/Signup';
import { PageNotFound } from './components/PageNotFound';
import { Profile } from './components/Profile';
import { useState } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import {AddProject} from './components/AddProject'
import CompanyProfile from './components/CompanyProfile';

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
                            <Route path="/signup" component={SignUp} />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/profile" component={Profile} exact />
                            <Route path="/companyprofile" component={CompanyProfile} exact />
                            <Route path="/addproject" component={AddProject} exact />
                            <Route component={PageNotFound} />
                        </Switch>
                    </BrowserRouter>
                </Container>
            </main>
        </div>
    )
}