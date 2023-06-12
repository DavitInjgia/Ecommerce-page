import React from 'react'
import './DropdownText.css'

function DropdownText(props) {
  return (
    <div id='dropdown-product-description'>
      <p id='dropdown-product-name'>
        {/* {props.productName} */} Fall Limited Edition Sneakers
        </p>
      <p id='dropdown-product-price'>
        {/* {props.singleItemPrice} */} $125 x 3{/* {props.itemAmount} */}
        <span id='dropdown-product-total-price'> $375.00 {/* {total price} */}
        </span>
      </p>
    </div>
  )
}

export default DropdownText