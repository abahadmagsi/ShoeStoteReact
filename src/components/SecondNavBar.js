import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function SecondNavBar() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Tabs
      centered
      >
        <Tab label="HOME" />
        <Tab label="NEW" disabled />
        <Tab label="Product" />
      </Tabs>
    </Paper>
  );
}
