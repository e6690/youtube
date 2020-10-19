import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import PlayerList from './PlayerList'

function App() {
  return (
    <div className="App">
      <PlayerList />
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);