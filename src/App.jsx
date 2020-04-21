import React from 'react';
import { Switch, Route } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import Panel from './pages/Panel';

function App() {
  return (
    <BrowserRouter>
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="/panel">Panel</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/posts">Posts</Link>
      </nav>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/dashboard/" component={Dashboard} />
          <Route path="/panel/" component={Panel} />
          <Route path="/posts/" component={Posts} />
          <Route path="/posts/:id" component={Post} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
