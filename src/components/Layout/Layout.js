import React, { Fragment } from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawes from '../Navigation/SideDrawers/SideDrawers';

const layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <SideDrawes />
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
};

export default layout;
