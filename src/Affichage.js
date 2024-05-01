import React from 'react'
import './Affichage.css'

function Affichage({affichage}) {
  return (
    <div className='Affichage'>
      <p>{affichage}</p>
    </div>
  )
}

export default Affichage