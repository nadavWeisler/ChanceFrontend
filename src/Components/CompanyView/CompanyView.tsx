import { CompanyInternshipsGrid } from "./CompanyInternshipsGrid"


import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
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
    const { companies } = useTypedSelector(state => state.companies)
    const { FetchCompany } = useActions()

    useEffect(() => {
        FetchCompany();
    }, [FetchCompany])

    const classes = useStyles();


    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleMenuClose = () => {
        setAnchorEl(null);
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
            <MenuItem onClick={() => { alert("Create New") }}>Create new internship</MenuItem>
            <MenuItem onClick={() => { alert("anoterF") }}>Another</MenuItem>
        </Menu >
    );

    return (
        <>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar
                            src={companies && companies[0] ? companies[0].imgLink : undefined}
                            className={classes.avatar}
                        />
                    }
                    action={
                        <IconButton aria-label="settings" onClick={handleProfileMenuOpen}>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={companies && companies[0] ? companies[0].userName : ''}
                />
                <CompanyInternshipsGrid internships={companies[0].internships} />
            </Card>
            {renderMenu}
        </>
    );
}