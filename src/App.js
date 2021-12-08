import React,{ createContext } from 'react';
import './App.css';
import CompA from './CompA';

const firstName = createContext();

function App() {
  return (
    <div className="App">
      <firstName></firstName>
      <CompA></CompA>
    </div>
  );
}

export default App;
