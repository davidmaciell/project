import React from 'react';
import logo from './sofaa.svg';
import './App.css';
import Nav from './nav'

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <h1>Tapeçaria</h1>
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sofás 
        </p>
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


