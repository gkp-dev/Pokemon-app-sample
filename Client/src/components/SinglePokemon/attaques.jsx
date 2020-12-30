import React from 'react'

function Attaques({ attaques }) {
    if (!attaques) {
        return(<React.Fragment></React.Fragment>)
    }
    
    return (
       
        <React.Fragment>
            
        <section className="container middle">
                <h4>Les Attaques</h4>
            <div className="container-attaques ">
        {attaques.map((array) => {
                        return (
                            <div className="attaque card" key={attaques.indexOf(array)}>
                <p><span>Niveau: </span>{array?.niveau}</p>
                <p><span>Nom: </span>{array?.nom}</p>
                <p><span>Précision: </span>{array?.precision}</p>
                <p><span>Puissance: </span>{array?.puissance}</p>
                <p><span>PP: </span>{array?.pp}</p>
                            </div>
                        )
            })}

            </div>
        </section>
            
        </React.Fragment>
        
    )
}

export default Attaques
