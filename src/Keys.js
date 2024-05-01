import React from 'react'
import './Keys.css'
import Key from './Key'
import KeyReset from './KeyReset'
import KeyEquals from './KeyEquals'
import KeyDel from './KeyDel'

function Keys() {
  return (
    <div className='Grid'>
      <Key valeur={"7"}/>
      <Key valeur={"8"}/>
      <Key valeur={"9"}/>
      <KeyDel/>
      <Key valeur={"4"}/>
      <Key valeur={"5"}/>
      <Key valeur={"6"}/>
      <Key valeur={"+"}/>
      <Key valeur={"1"}/>
      <Key valeur={"2"}/>
      <Key valeur={"3"}/>
      <Key valeur={"-"}/>
      <Key valeur={"."}/>
      <Key valeur={"0"}/>
      <Key valeur={"/"}/>
      <Key valeur={"x"}/>
      <KeyReset/>
      <KeyEquals/>
    </div>
  )
}

export default Keys