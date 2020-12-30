import React from 'react';
import './scss/card.css';
import { Link } from "react-router-dom";


function Pokemon({ nom, numero,id}) {
    
    const linkStyle = {
        color: "black",
    }
    return (
        <div className="pokemon card">
            <Link to={`/pokemon/${id}`} style={linkStyle}>
            <img src={`${process.env.REACT_APP_Image_URL}/${numero}.png`} alt={nom}></img>
            <p className="pokemon-description">#{numero}</p>
            <p className="pokemon-description">{nom}</p>
            </Link>
        </div>
        
    )
}

export default Pokemon
