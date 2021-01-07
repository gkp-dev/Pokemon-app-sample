import React, { useState, useEffect } from 'react';
import Pokedex from './pages/pokedex';
import './App.css'

function App() {
  let [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    //
    async function getPokedex() {
      const result = await fetch(`${process.env.REACT_APP_Fetch_URL}/pokemon`);
      const response = await result.json();
      setPokedex(pokedex = response);

    }
    getPokedex();
    //
  },[])
  return (
    <React.Fragment>
      <h1 style={{textAlign:"center",color:"white"}}>Nos Pokemons</h1>
      <Pokedex pokemonList={pokedex}/>
    </React.Fragment>
  )
}

export default App

