import React from 'react'
import HeaderTemplate from './HeaderTemplate'
import logo from '../../assets/images/logo.svg'
import Navigation from './components/Navigation/Navigation'
import UserInfo from './components/UserInfo/UserInfo'

function Header(props) {
  return (
    <HeaderTemplate
        logo = {<img src={logo}></img>}
        nav = {<Navigation/>}
        userInfo = {<UserInfo handleCart={props.handleCart}/>}
        dropdown = {props.dropdown}
    />
  )
}

export default Header