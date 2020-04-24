import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const InnerRoutes = () => {
  return (
    <>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default InnerRoutes;
