import React from 'react'
import './HeaderTemplate.css'
import Navigation from './components/Navigation/Navigation'



function HeaderTemplate(props) {
  return (
    <header className='header'>
        <div className="logo-nav">
            {props.logo}
            <Navigation/>
        </div>    
        {props.userInfo}
    </header>

  )
}

export default HeaderTemplate