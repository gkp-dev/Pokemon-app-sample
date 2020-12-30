import React from 'react';


function titlePokemon({numero,nom}) {
    return (
        <div className="presentation-pokemon">
            <h1>#{`${numero} ${nom}`}</h1>
            <img src={`${process.env.REACT_APP_Image_URL}/${numero}.png`}></img>
        </div>
    )
}

export default titlePokemon
