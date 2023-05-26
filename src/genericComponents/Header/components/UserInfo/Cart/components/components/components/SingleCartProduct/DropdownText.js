import React from 'react'
import './DropdownText.css'

function DropdownText(props) {
  return (
    <div id='dropdown-product-description'>
      <p id='dropdown-product-name'>{props.productName}</p>
      <p id='dropdown-product-price'>
        {props.singleItemPrice}
        x
        {props.itemAmount}
        
        <span id='dropdown-product-total-price'>
          {totalPrice}
        </span>
      </p>
    </div>
  )
}

export default DropdownText