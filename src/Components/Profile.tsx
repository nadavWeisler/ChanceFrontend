import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import { Avatar, Checkbox } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from '@material-ui/core';

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
        },
        card: {
            marginTop: theme.spacing(10)
        }
    })
);

//state type

type State =
    {
        name: string
        email: string
        image: string
    };

const initialState: State = {
    name: 'test',
    email: 'tset@com',
    image: 'path'
};


export const Profile = () => {
    const classes = useStyles();
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <Card className={classes.card}>
                <CardHeader className={classes.header} title="Studet" />
                <CardContent>
                <Avatar alt="Remy Sharp" src="\src\avatar.jpeg" />
                    <div>
                        <Typography variant="h6" component="h6">
                            // name
                        </Typography>
                        <Typography variant="h6" component="h6">
                            // email
                        </Typography>
                        <Typography variant="h6" component="h6">
                            points : // get_points
                        </Typography>
                    </div>

                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </form>
    );
}

export default Profile;