import { CompanyInternshipsGrid } from "./CompanyInternshipsGrid"


import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

export const CompanyView = () => {
    const { internships } = useTypedSelector(state => state.internships)
    const { FetchInternships } = useActions()

    useEffect(() => {
        FetchInternships();
    }, [])

    const classes = useStyles();


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleProfileMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
      };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => { alert("Create New") }}>Create new internshio</MenuItem>
            <MenuItem onClick={() => { alert("anoterF") }}>Another</MenuItem>
        </Menu >
    );

    return (
        <>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar
                            src={internships && internships[0] ? internships[0].imgLink : undefined}
                            className={classes.avatar}
                        />
                    }
                    action={
                        <IconButton aria-label="settings" onClick={handleProfileMenuOpen}>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={internships && internships[0] ? internships[0].name : ''}
                />
                <CompanyInternshipsGrid internships={internships} />
            </Card>
            {renderMenu}
        </>
    );
}