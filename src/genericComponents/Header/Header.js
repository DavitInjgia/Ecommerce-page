import React from 'react'
import HeaderTemplate from './HeaderTemplate'

function Header() {
  return (
    <HeaderTemplate
        logo = {<div style={{backgroundColor: "blue", width:"137.5px"}}>LOGO</div>}
        nav = {<div style={{backgroundColor: "green", width:"397px"}}>navigation</div>}
        userInfo = {<div style={{backgroundColor: "cyan", width:"165px"}}>User Info</div>}
    />
  )
}

export default Header