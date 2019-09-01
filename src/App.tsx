import Header from 'containers/Header/Header';
import React from 'react';
import './App.scss';
import Routes from './routes/Index';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Routes />
      </main>
    </>
  );
};

export default App;
