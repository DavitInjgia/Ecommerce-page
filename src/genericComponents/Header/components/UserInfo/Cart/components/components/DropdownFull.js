import React from 'react'
import SingleCartProduct from './components/SingleCartProduct'
import CheckoutBtn from './components/CheckoutBtn'
import './DropdownFull.css'

function DropdownFull(props) {
  return (
    <div id='dropdown-full-div'>
    <SingleCartProduct/>
    <CheckoutBtn/>
    </div>
  )
}

export default DropdownFull