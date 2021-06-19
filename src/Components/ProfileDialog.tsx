import { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import { CardMedia, Dialog } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Typography } from '@material-ui/core';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import img from '../assets/cool.jpeg'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
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
    })
);

export interface ProfileProps {
    openProfile: boolean;
    onDialogClose: () => void;
}

export const Profile = (props: ProfileProps) => {
    const classes = useStyles();
    const { onDialogClose, openProfile } = props;
    const { email, rank, user_name } = useTypedSelector(state => state.getUser)
    const { GetUser } = useActions()

    useEffect(() => {
        if (localStorage.getItem("user_id")) {
            GetUser(localStorage.getItem("user_id") ?? "");
            console.log(localStorage.getItem("user_id"));
        }
    }, [localStorage.getItem("user_id")]);
    return (
        <Dialog open={openProfile} onClose={onDialogClose}>
            <form className={classes.container} noValidate autoComplete="off">
                <Card>
                    <CardMedia>
                        <img src={img} height="300px" />
                    </CardMedia>
                    <CardContent>
                        <div>
                            <Typography variant="h4" component="h4">
                                name: {user_name}
                            </Typography>
                            <Typography variant="h6" component="h6">
                                email: {email}
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
        </Dialog>
    );
}

export default Profile;