import React,{ createContext } from 'react';
import './App.css';
import CompA from './CompA';

const FirstName = createContext();

function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"Tawfiq E Alahi"}>
      </FirstName.Provider>


      <CompA></CompA>
    </div>
  );
}

export default App;
export {FirstName}
