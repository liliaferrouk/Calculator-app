import React from 'react'
import './Header.css'

function Header({theme,setTheme}) {
  function toggleTheme(){
    setTheme(prev=>{
      return prev===1 ? 2 : prev===2 ? 3 : 1
    },
    console.log(theme)
  )
  }
  const headerClass = `header-theme${theme}`;
  return (
    <header className={headerClass}>
        <h1>calc</h1>
        <h2>THEME</h2>
        <div className='box'>
            <p className='chiffres'> 1 2 3</p>
            <div className='ruban-change-theme' onClick={toggleTheme}>
                <div className='petit-cercle'></div>
            </div>
        </div>
    </header>
  )
}

export default Header