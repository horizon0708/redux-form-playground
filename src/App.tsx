import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BasicForm } from './redux-form/basic';
import { PersonForm, TestReader } from './redux-form/test';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <PersonForm /> 
      <TestReader />
      </header>
    </div>
  );
}

export default App;
