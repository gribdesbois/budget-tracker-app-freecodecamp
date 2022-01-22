import React from 'react'

function AddExpenseForm() {
  return (
    <form >
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            className='form-control'
            type="text"
            required id='name'
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            className='form-control'
            type="text"
            required id='cost'
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
