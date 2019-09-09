import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import Home from 'pages/Home/Home';
import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const Detail = lazy(() => import('pages/Detail/Detail'));

const index = () => {
  return (
    <>
      <Breadcrumbs />
      <Route path="/" exact={true} component={Home} />
      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/items/:id" component={Detail} />
      </Suspense>
    </>
  );
};

export default index;
