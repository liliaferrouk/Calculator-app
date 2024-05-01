import React from 'react'
import './Keys.css'
import Key from './Key'
import KeyReset from './KeyReset'
import KeyEquals from './KeyEquals'
import KeyDel from './KeyDel'

function Keys({setAffichage}) {
  return (
    <div className='Grid'>
      <Key valeur={"7"} setAffichage={setAffichage}/>
      <Key valeur={"8"} setAffichage={setAffichage}/>
      <Key valeur={"9"} setAffichage={setAffichage}/>
      <KeyDel setAffichage={setAffichage}/>
      <Key valeur={"4"} setAffichage={setAffichage}/>
      <Key valeur={"5"} setAffichage={setAffichage}/>
      <Key valeur={"6"} setAffichage={setAffichage}/>
      <Key valeur={"+"} setAffichage={setAffichage}/>
      <Key valeur={"1"} setAffichage={setAffichage}/>
      <Key valeur={"2"} setAffichage={setAffichage}/>
      <Key valeur={"3"} setAffichage={setAffichage}/>
      <Key valeur={"-"} setAffichage={setAffichage}/>
      <Key valeur={"."} setAffichage={setAffichage}/>
      <Key valeur={"0"} setAffichage={setAffichage}/>
      <Key valeur={"/"} setAffichage={setAffichage}/>
      <Key valeur={"x"} setAffichage={setAffichage}/>
      <KeyReset setAffichage={setAffichage}/>
      <KeyEquals setAffichage={setAffichage}/>
    </div>
  )
}

export default Keys