import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';

const index = () => {
  return (
    <Router>
      <Route path="/" exact={true} component={Home} />
    </Router>
  );
};

export default index;
