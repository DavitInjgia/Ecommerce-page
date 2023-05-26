import React from 'react'
import './HeaderTemplate.css'
function HeaderTemplate(props) {
  return (
    <header className='header'>
        <div className="logo-nav">
            {props.logo}
            {props.nav}
        </div>    
        {props.userInfo}
    </header>

  )
}

export default HeaderTemplate