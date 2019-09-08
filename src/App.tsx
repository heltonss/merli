import { Header } from 'containers/Header/Header';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import './App.scss';
import Routes from './routes/Index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <main className="main">
        <Header />
        <div className="main--navigation">
          <Routes />
        </div>
      </main>
    </Provider>
  );
};

export default App;
