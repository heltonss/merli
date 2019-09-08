import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import { Header } from 'containers/Header/Header';
import Home from 'pages/Home/Home';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Detail = lazy(() => import('pages/Detail/Detail'));

const index = () => {
  return (
    <Router>
      <Breadcrumbs />
      <Route path="/" exact={true} component={Home} />
      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/items/:id" component={Detail} />
      </Suspense>
    </Router>
  );
};

export default index;
