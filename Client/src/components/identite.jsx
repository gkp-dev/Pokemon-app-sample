import React from 'react'
//import '../scss/identite.css'

function Identite({couleur,espece,forme,nom,nomDe,nomEn,nomJa,nomTm,poids,taille,type}) {
    return (
        <div className="identite-pokemon">
            <p><span>Couleur:</span> {couleur}</p>
            <p><span>Pokemon:</span> {nom}</p>
            <p><span>Espece:</span> {espece}</p>
            <p><span>NomFR:</span> {nom}</p>
            <p><span>Type1:</span> {type}</p>
            <p><span>NomEN:</span> {nomEn}</p>
            <p><span>Taille:</span> {taille}</p>
            <p><span>NomDE:</span> {nomDe}</p>
            <p><span>Poids:</span> {poids}</p>
            <p><span>NomTM:</span> {nomTm}</p>
            <p><span>Forme:</span> {forme}</p>
            <p><span>NomJA:</span> {nomJa}</p>
            
        </div>
    )
}

export default Identite;
