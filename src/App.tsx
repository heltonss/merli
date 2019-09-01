import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import Header from 'containers/Header/Header';
import React from 'react';
import './App.scss';
import Routes from './routes/Index';

const App: React.FC = () => {
  return (
    <>
      <main className="main">
        <Header />
        <div className="main--navigation">
          <Routes />
        </div>
      </main>
    </>
  );
};

export default App;
