import React from 'react'

function KeyEquals({setAffichage}) {
  return (
    <div className='key-equals key' onClick={()=>{
      setAffichage(prev =>{
        try {
          prev = prev.replace(/x/g, '*')
          const resultat = eval(prev);
          return resultat;
        } catch (e) {
            console.error("Erreur lors de l'évaluation de l'expression:", e);
            return "0"; // Renvoie null en cas d'erreur
        }
      })
    }}>=</div>
  )
}

export default KeyEquals