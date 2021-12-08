import React,{ createContext } from 'react';
import './App.css';
import CompA from './CompA';

const FirstName = createContext();

function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"Tawfiq E "}>
      <CompA></CompA>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export {FirstName}
