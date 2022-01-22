/* eslint-disable radix */
import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AppContext } from '../../context/AppContext.jsx'

function AddExpenseForm() {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const { dispatch } = useContext(AppContext)

  const onSubmit = (event) => {
    event.preventDefault()
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    }

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            className='form-control'
            type="text"
            required id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            className='form-control'
            type="text"
            required id='cost'
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type='submit' className='btn btn-primary mt-3'>
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddExpenseForm
