import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

export interface expenses_types {
  id: number,
  name: string,
  cost: number
}

function ExpenseList() {
  const expenses: expenses_types[] = [
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
        />
      })}
    </ul>
  )
}

export default ExpenseList
