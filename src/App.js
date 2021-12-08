import React,{ createContext } from 'react';
import './App.css';
import CompA from './CompA';

const firstName = createContext();

function App() {
  return (
    <div className="App">
      <firstName.Provider>
      <CompA></CompA>
      </firstName.Provider>
    </div>
  );
}

export default App;
