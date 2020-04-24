import React from 'react';
import { useRoutes } from 'react-router';
import { Link } from 'react-router-dom';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Lost from './components/Nothing';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import Panel from './pages/Panel';

function App() {
  const routes = useRoutes([
    { path: '/*', element: <Home /> },
    {
      path: '/dashboard/*',
      element: <Dashboard />,
      childrent: [
        { path: 'profile', element: <Profile /> },
        { path: 'settings', element: <Settings /> },
        { path: '*', element: <Lost /> },
      ],
    },
    {
      path: '/panel/*',
      element: <Panel />,
      childrent: [
        { path: 'profile', element: <Profile /> },
        { path: 'settings', element: <Settings /> },
        { path: '*', element: <Lost /> },
      ],
    },
    { path: '/posts/*', element: <Posts /> },
    { path: '/posts/:id', element: <Post /> },
    { path: '*', element: <NotFound /> },
  ]);

  return (
    <>
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="/panel">Panel</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/posts">Posts</Link>
      </nav>
      <div className="container">{routes}</div>
    </>
  );
}

export default App;
