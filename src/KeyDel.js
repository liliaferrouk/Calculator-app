import React from 'react'

function KeyDel({setAffichage}) {
  return (
    <div className='key-del key' onClick={()=>{
      setAffichage(prev=>{
        if(prev.length > 1) return prev.slice(0,-1)
        else return "0" //soit c'est 0 soit un seul chiffre => 0
      })
    }}>DEL</div>
  )
}

export default KeyDel