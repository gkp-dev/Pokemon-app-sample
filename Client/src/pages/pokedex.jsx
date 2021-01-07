import React from 'react';
import Pokemon from '../components/pokemon-card';
import '../components/scss/pokedex.css'

function Pokedex({ pokemonList }) {

    return (
    <div className="pokedex">
            {pokemonList.map((pokemon) => {
                let index = pokemonList.indexOf(pokemon);
                let actualPokemon = pokemonList[index];
                return (<Pokemon
                    key={index}
                    id={index}
                    nom={actualPokemon?.nom}
                    numero={actualPokemon?.numéro}
                >pokemon</Pokemon>)
            })}
    </div>
        
    )
    
}
export default Pokedex
