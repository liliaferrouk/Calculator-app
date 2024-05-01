import React from 'react'
import './Affichage.css'

function Affichage({theme, affichage}) {
  const affichageClass = `Affichage-theme${theme}`;
  return (
    <div className={`Affichage ${affichageClass}`}>
      <p>{affichage}</p>
    </div>
  )
}

export default Affichage