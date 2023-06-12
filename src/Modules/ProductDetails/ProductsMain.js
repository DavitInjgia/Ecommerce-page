import React from 'react'
import SliderModal from './SliderModal/SliderModal'
import './ProductsMail.css'
import SliderResponsive from './SliderModal/SliderResponsive'


function ProductsMain() {
  return (
    <div className="products-main-container">
        <SliderModal/>
        <SliderResponsive/>
    </div>
  )
}

export default ProductsMain
