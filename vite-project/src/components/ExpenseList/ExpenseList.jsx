import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

function ExpenseList() {
  const { expenses } = useContext(AppContext)

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
