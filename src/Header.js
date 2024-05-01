import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <h1>calc</h1>
        <h2>THEME</h2>
        <div className='box'>
            <p className='chiffres'> 1 2 3</p>
            <div className='ruban-change-theme'>
                <div className='petit-cercle'></div>
            </div>
        </div>
    </header>
  )
}

export default Header