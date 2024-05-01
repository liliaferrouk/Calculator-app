import React from 'react'

function Key({valeur,setAffichage}) {
    const val = valeur;
  return (
    <div className='key-normal key' onClick={()=>{
      setAffichage(prev=>{
        return prev === "0" ? val : (prev + val);
      })
    }}>{val}</div>
  )
}

export default Key