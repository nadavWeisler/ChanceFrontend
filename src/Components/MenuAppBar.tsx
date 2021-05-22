import React, { useState } from "react"
import { IconButton, Badge, AppBar, Toolbar, MenuItem, Menu } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ViewListIcon from '@material-ui/icons/ViewList';
import CreateIcon from '@material-ui/icons/Create';
import { LoginDialog } from "./LoginDialog";
import { SignUpDialog } from "./SignupDialog";
import ProfileDialog from "./ProfileDialog";
import sam from "./../assets/sam.jpeg"
import AddProject from "./AddProject";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color: "white"
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

interface MenuAppBarProps {
  authorized: boolean;
  isCompany: boolean;
}

export const MenuAppBar = (props: MenuAppBarProps) => {
  const { authorized, isCompany } = props;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [openLoginDialog, setOpenLoginDialog] = React.useState<boolean>(false)

  const handleLoginDialog = () => {
    setOpenLoginDialog(!openLoginDialog);
  }

  const [openSignupDialog, setOpenSignupDialog] = useState<boolean>(false)

  const handleSignupDialog = () => {
    setOpenSignupDialog(!openSignupDialog);
  }

  const [openProfileDialog, setOpenProfileDialog] = useState<boolean>(false)

  const handleProfileDialog = () => {
    setOpenProfileDialog(!openProfileDialog);
  }

  const [openAddProjectDialog, setOpenAddProjectDialog] = useState<boolean>(false)

  const handleAddProjectDialog = () => {
    setOpenAddProjectDialog(!openAddProjectDialog);
  }

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const signoutUser = () => {
    localStorage.removeItem("access_token");
    window.location.reload(false);
  }

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
      {
        authorized &&
        <>
          <MenuItem onClick={() => { setOpenProfileDialog(true) }}>Profile</MenuItem>
          <MenuItem onClick={() => { signoutUser() }}>Sign out</MenuItem>
        </>
      }
      {
        !authorized &&
        <>
          <MenuItem onClick={() => { setOpenLoginDialog(true) }}>Log in</MenuItem>
          <MenuItem onClick={() => { setOpenSignupDialog(true) }}>Sign up</MenuItem>
        </>
      }
    </Menu >
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="Dashboard" color="inherit" href="Dashboard">
          <ViewListIcon />
        </IconButton>
        <p>Dashboard</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const [open] = React.useState(false);

  return (
    <>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.title} href="/">
            <img src={sam} height="40px" />
          </IconButton>
          <div className={classes.sectionDesktop}>
            {
              isCompany &&
              <IconButton color="inherit" onClick={() => { setOpenAddProjectDialog(true) }}>
                <CreateIcon />
              </IconButton>
            }
            <IconButton aria-label="Dashboard" color="inherit" href="Dashboard">
              <ViewListIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <LoginDialog openDialog={openLoginDialog} onDialogClose={handleLoginDialog} />
      <SignUpDialog openDialog={openSignupDialog} onCloseDialog={handleSignupDialog} />
      <ProfileDialog openProfile={openProfileDialog} onDialogClose={handleProfileDialog} />
      <AddProject openDialog={openAddProjectDialog} onClose={handleAddProjectDialog} />
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}