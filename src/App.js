import './App.css';
import React from 'react';
import { SinglePokemonPage } from './features/pokemon/SinglePokemonPage';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <SinglePokemonPage />
      </React.Fragment>
    </div>
  );
}

export default App;
