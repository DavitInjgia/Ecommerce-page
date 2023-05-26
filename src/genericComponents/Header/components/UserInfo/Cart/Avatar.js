import React from 'react'
import './Avatar.css'
function Avatar({image}) {
  return (
    <img className='avatar-img' src={image} alt="" />
  )
}

export default Avatar