import React from 'react'
import './SingleCartProduct.css'
import DropdownImg from './SingleCartProduct/DropdownImg'
import DropdownText from './SingleCartProduct/DropdownText'
import DropdownDelete from './SingleCartProduct/DropdownDelete'

function SingleCartProduct() {
  return (
    <li id='single-cart-product'>
        <DropdownImg/>
        <DropdownText/>
        <DropdownDelete/>
    </li>
  )
}

export default SingleCartProduct