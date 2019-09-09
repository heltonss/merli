import { Header } from 'containers/Header/Header';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'store';
import './App.scss';
import Routes from './routes/Index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <main className="main">
          <Header />
          <div className="main--navigation">
            <Routes />
          </div>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
