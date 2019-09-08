import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import { Header } from 'containers/Header/Header';
import Home from 'pages/Home/Home';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from 'store';

const index = () => {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Breadcrumbs />
        <Route path="/" exact={true} component={Home} />
      </Router>
    </Provider>
  );
};

export default index;
