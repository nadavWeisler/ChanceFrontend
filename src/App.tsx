import React from 'react';
import logo from './logo.svg';
import Login from './Login'
import './App.css';
import { AppRouter } from './AppRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chance. Giving everyone a chance
        </p>
        <AppRouter />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
