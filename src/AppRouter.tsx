import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PageNotFound } from './Components/PageNotFound';
import { useEffect, useState } from 'react';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { AddProject } from './Components/AddProject'
import CompanyProfile from './Components/CompanyProfile';
import { useTypedSelector } from './hooks/useTypedSelector';
import { MenuAppBar } from './Components/MenuAppBar';
import { Home } from './Components/home';

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
    const [authoraized, setAuthorized] = useState<boolean>(false);
    const [isCompany, setIsCompany] = useState<boolean>(false);

    const { access_token } = useTypedSelector(state => state.login)

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            setAuthorized(true);
            setIsCompany(true);
        } else {
            setAuthorized(false);
            setIsCompany(false);

        }
    }, [localStorage.getItem('access_token')])

    return (
        <div className={classes.root}>
            <MenuAppBar authorized={authoraized} isCompany={isCompany} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/dashboard" component={Dashboard} />
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