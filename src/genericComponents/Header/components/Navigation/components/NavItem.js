import React from 'react'
import './NavItem.css'

function NavItem(props) {
  return (
    <li className='nav-list'>{props.text}</li>
  )
}

export default NavItem