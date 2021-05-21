import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import AppMenu from './components/AppMenu';

import './App.css';
import { AppRouter } from './AppRouter';
import { store } from './store';
import { Provider } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { MenuAppBar } from './components/MenuAppBar';
import { useTypedSelector } from './hooks/useTypedSelector';

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535454',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));


const App = () => {
  const classes = useStyles()

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App
