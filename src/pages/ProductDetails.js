import React from 'react'
import ProductDetailsTemplate from '../Modules/ProductDetails/ProductDetailsTemplate'

function ProductDetails() {
  return (
    <ProductDetailsTemplate header={<div style={{height:"112px", backgroundColor:"magenta", width:'100%'}}></div>} main={<div style={{height:"787px", backgroundColor:"aqua", width:'100%'}}></div>}/>
  )
}

export default ProductDetails