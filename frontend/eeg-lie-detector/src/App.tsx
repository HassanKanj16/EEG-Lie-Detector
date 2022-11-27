import React from 'react';
import logo from './logo.svg';
import './App.css';
import { startBCI } from './api';

function App() {
  return (
    <div className="App">
      <button onClick={async () => {await startBCI("")}}>Test</button>
    </div>
  );
}

export default App;
