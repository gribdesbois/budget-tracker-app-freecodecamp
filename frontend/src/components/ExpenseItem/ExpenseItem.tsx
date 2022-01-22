/* eslint-disable camelcase */
import React from 'react'
import { TiDelete } from 'react-icons/ti'
import { expenses_types } from '../ExpenseList/ExpenseList'

function ExpenseItem(props:expenses_types) {
  return (

    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          ${props.cost}
        </span>
        <TiDelete size='1.5rem'></TiDelete>
      </div>
    </li>)
}

export default ExpenseItem
