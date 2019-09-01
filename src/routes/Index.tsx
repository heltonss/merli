import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import Home from 'pages/Home/Home';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const index = () => {
  return (
    <Router>
      <Breadcrumbs />

      <Route path="/" exact={true} component={Home} />
    </Router>
  );
};

export default index;
