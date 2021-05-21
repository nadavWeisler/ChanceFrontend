import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ResultSnackBar } from '../ResultSnackBar';
import { MoreDetailsDialog } from './MoreDetailsDialogProps';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 160,
    },
});

export interface InternshipProps {
    name: string;
    company: string;
    imgLink: string;
    details: string;

}

export const SingleInternship = (props: InternshipProps) => {
    const { company, name, imgLink, details } = props;
    const classes = useStyles();

    const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
    const handleClickOpenSnackBar = () => {
        setOpenSnackBar(true);
    };

    const handleCloseSnackBar = () => {
        setOpenSnackBar(false);
    };

    const [openMoreDetails, setOpenMoreDetails] = useState<boolean>(false);
    const handleClickOpenMoreDetails = () => {
        setOpenMoreDetails(true);
    };

    const handleCloseMoreDetails = () => {
        setOpenMoreDetails(false);
    };

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={imgLink}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textPrimary" component="p">
                            {name}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {company}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={handleClickOpenSnackBar}>
                        Apply
                </Button>
                    <Button size="small" color="primary" onClick={handleClickOpenMoreDetails}>
                        Learn More
                </Button>
                </CardActions>
            </Card>
            <MoreDetailsDialog
                handleCancel={handleCloseMoreDetails}
                details={details}
                name={name}
                handleClose={handleCloseMoreDetails}
                open={openMoreDetails}
            />
            <ResultSnackBar open={openSnackBar} message="Applied Internship" handleClose={handleCloseSnackBar} />

        </>
    );
}