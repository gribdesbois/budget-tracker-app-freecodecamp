import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

function ExpenseList() {
  const expenses = [
    { id: 12, name: 'shopping', cost: 40 },
    { id: 13, name: 'holiday', cost: 400 },
    { id: 14, name: 'car service', cost: 50 },
  ]

  return (

    <ul className="list-group">
      {expenses.map((expense) => {
        const { id, name, cost } = expense
        return <ExpenseItem
          id={id}
          name={name}
          cost={cost}
          key={id}
        />
      })}
    </ul>
  )
}

export default ExpenseList
