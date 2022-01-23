import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import Search from '../Search/Search'

function ExpenseList() {
  const [search, setSearch] = useState('')

  const { expenses } = useContext(AppContext)
  const filteredExpenses = expenses.filter((expense) => (
    expense.name.indexOf(search) !== -1 || expense.cost.toString().indexOf(search) !== -1
  ))//! filter by name or cost

  return (<>
    <Search setSearch={setSearch} />
    <ul className="list-group">
      {filteredExpenses.map((expense) => {
        const { id, name, cost } = expense
        return <ExpenseItem
          id={id}
          name={name}
          cost={cost}
          key={id}
        />
      })}
    </ul>
  </>)
}

export default ExpenseList
