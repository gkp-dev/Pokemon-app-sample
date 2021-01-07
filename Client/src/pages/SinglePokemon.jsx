import React, { useState, useEffect } from 'react';
import Title from '../components/title-pokemon';
import Identite from '../components/identite';
import Attaques from '../components/attaques';
import '../components/scss/singlePokemon.css';


function Pokemon({match}) {
    

let [pokemon, setPokemon] = useState({});

    useEffect(() => {
    //
        async function getSinglePokemon() {
        const result = await fetch(`${process.env.REACT_APP_Fetch_URL}/pokemon/${match.params.id}`);
        const response = await result.json();
            setPokemon(pokemon = response);
            //console.log(match);
            //console.log(pokemon);
         
    }
        getSinglePokemon();
    //
},[])

    return (
        <React.Fragment>
            <Title numero={pokemon?.numéro} nom={pokemon?.nom}/>
            <Identite
                couleur={pokemon?.couleur}
                espece={pokemon?.espece}
                forme={pokemon?.forme}
                nom={pokemon?.nom}
                nomDe={pokemon?.nomde}
                nomEn={pokemon?.nomen}
                nomTm={pokemon?.nomtm}
                nomJa={pokemon?.nomja}
                poids={pokemon?.poids}
                taille={pokemon?.taille}
                type={pokemon?.type1}
            />
            
            <Attaques
                attaques={pokemon?.attaques} 
            />
            
        </React.Fragment>
    )
}

            
export default Pokemon
