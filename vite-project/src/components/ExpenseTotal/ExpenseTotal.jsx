/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

function ExpenseTotal() {
  const { expenses } = useContext(AppContext)

  const totalExpenses = expenses.reduce((total, item) => (total += item.cost), 0)

  return (
    <div className="alert alert-primary">
      <span>Spent so far: ${totalExpenses}</span>
    </div>
  )
}

export default ExpenseTotal
