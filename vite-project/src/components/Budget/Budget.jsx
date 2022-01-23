import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'

function Budget() {
  const [newBudget, setNewBudget] = useState(2000);
  const { budget, dispatch } = useContext(AppContext)

  const editBudget = (event) => {
    event.preventDefault()
    const newBudgetToInt = parseInt(newBudget, 10)
    dispatch({
      type: 'EDIT_BUDGET',
      payload: newBudgetToInt,
    })
  }

  return (
    <form className="alert alert-secondary" onSubmit={editBudget}>
      <span>Budget: {budget }€</span>
      <input type="text" id='budget' onChange={(event) => setNewBudget(event.target.value)}/>
      <button type='submit' className='mx-auto'>Valider</button>
    </form>
  )
}

export default Budget
