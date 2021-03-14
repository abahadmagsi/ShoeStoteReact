import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom'
const useStyles1 = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function SecondNavBar() {
  let classes = useStyles1();
  return (
    <Paper className={classes.root}>
      <Tabs
      centered
      >
    
          <Link to='/'>
            <Tab label="HOME" />
          </Link>
        <Tab label="NEW" disabled />
        <Tab label="Product" disabled />
      </Tabs>
    </Paper>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign:'center'
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SHOE STORE
          </Typography>
        </Toolbar>
      </AppBar>
      <SecondNavBar/>
    </div>
  );
}
