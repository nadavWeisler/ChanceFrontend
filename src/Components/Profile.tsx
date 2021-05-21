import React, { useReducer, useEffect,useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import { Avatar, Checkbox } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from '@material-ui/core';
<<<<<<< HEAD
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
=======
import axios from 'axios';
>>>>>>> 9752c499fce8c5a41679adf6e0ef08e8c704466c

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

<<<<<<< HEAD
    const { email, rank, user_name } = useTypedSelector(state => state.getUser)
    const { GetUser } = useActions()

    useEffect(() => {
        if (localStorage.getItem("user_id")) {
            GetUser(localStorage.getItem("user_id") ?? "");
            console.log(localStorage.getItem("user_id"));
        }
    }, [localStorage.getItem("user_id")]);
=======
type State =
    {
        name: string
        email: string
        points: number
        image: string
    };

const initialState: State = {
    name: 'test',
    email: 'tset@com',
    points: 0,
    image: 'path'
};


export const Profile = async (user_id:string) => {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const[points, setPoints] = useState<number>(0)
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };

    let fd = new FormData();
    fd.append("user_id", user_id);
    const response = await axios.post('http://127.0.0.1:4500/api/personalSpace/student',
        fd, config);

    const classes = useStyles();
>>>>>>> 9752c499fce8c5a41679adf6e0ef08e8c704466c
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <Card className={classes.card}>
                <CardHeader className={classes.header} title="Studet" />
                <CardContent>
                <Avatar alt="Remy Sharp" src="\src\avatar.jpeg" />
                    <div>
                        <Typography variant="h6" component="h6">
<<<<<<< HEAD
                            {user_name}
=======
                            response[]
>>>>>>> 9752c499fce8c5a41679adf6e0ef08e8c704466c
                        </Typography>
                        <Typography variant="h6" component="h6">
                            {email}
                        </Typography>
                        <Typography variant="h6" component="h6">
                            points : {rank}
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