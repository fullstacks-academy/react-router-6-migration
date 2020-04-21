import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Lost from './Nothing';
import Settings from './Settings';

const InnerRoutes = () => {
  return (
    <>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Switch>
        <Route path="profile" component={Profile} />
        <Route path="settings" component={Settings} />
        <Route component={Lost} />
      </Switch>
    </>
  );
};
export default InnerRoutes;
