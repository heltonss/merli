import React from 'react';
import './App.scss';
import Routes from './routes/Index';

const App: React.FC = () => {
  return (
    <>
      <main className="main">
        <div className="main--navigation">
          <Routes />
        </div>
      </main>
    </>
  );
};

export default App;
