import React from 'react';
import './App.css';
import GridBoard from './component/GridBoard';
import NextBlock from './component/NextBlock';


function App() {
  return (
    <div className="App">
         <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <GridBoard/>
      <NextBlock/>
    </div>
  );
}

export default App;
