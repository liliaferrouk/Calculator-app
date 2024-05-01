import React from 'react'

function KeyReset({setAffichage}) {
  return (
    <div className='key-reset key' onClick={()=>{
      setAffichage("0")
    }}>RESET</div>
  )
}

export default KeyReset