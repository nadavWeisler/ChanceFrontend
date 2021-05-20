import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pic from '../../assets/pic.jpeg'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export interface InternshipProps {
    name: string;
    company:string;
    imgLink: string;
    detail: string;
    
}

export const Internship = (props: InternshipProps) => {
    const { company, name, imgLink, detail } = props;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={pic}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name} - {company}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {detail}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}