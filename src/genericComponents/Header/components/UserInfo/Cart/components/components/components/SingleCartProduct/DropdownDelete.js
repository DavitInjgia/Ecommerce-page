import React from 'react'
import './DropdownDelete.css'

function DropdownDelete(props) {
  return (
    <button onClick={props.handleDelete} id='dropdown-delete-btn'>delete</button>
  )
}

export default DropdownDelete