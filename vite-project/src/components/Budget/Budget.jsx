import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'

function Budget() {
  const [newBudget, setNewBudget] = useState(2000);
  const [isEditing, setIsEditing] = useState(false);

  const { budget, dispatch } = useContext(AppContext)

  const editBudget = (event) => {
    event.preventDefault()
    const newBudgetToInt = parseInt(newBudget, 10)
    dispatch({
      type: 'EDIT_BUDGET',
      payload: newBudgetToInt,
    })
    setIsEditing(!isEditing)
  }

  return (
    <form className="alert alert-secondary" onSubmit={editBudget}>

        Budget:(click to edit)
      <span
        onClick={() => setIsEditing(!isEditing)}>
        $  { !isEditing && budget }
      </span>
      {isEditing
     && <input
       type="text"
       className='mx-3'
       id='budget'
       onChange={(event) => setNewBudget(event.target.value)}
       style={{
         width: '30%',
         background: 'inherit',
         border: 'none',
         outline: 'none',
         position: 'relative',
         left: '-1rem',
       }}
     />}
      <button type='submit' className='mx-auto d-none'>Edit</button>
    </form>
  )
}

export default Budget
