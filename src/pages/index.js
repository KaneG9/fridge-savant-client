import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Bookmark from './bookmark';

const Pages = () => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/bookmarks' component={Bookmark} />
    </Router>
  );
};

export default Pages;
