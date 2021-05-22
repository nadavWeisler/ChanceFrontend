import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import { AppRouter } from './AppRouter';
import { store } from './store';
import { Provider } from 'react-redux';

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
