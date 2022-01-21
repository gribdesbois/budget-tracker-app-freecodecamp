import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Budget from './components/Budget/Budget.tsx'
import Remaining from './components/Remaining/Remaining'
import ExpenseTotal from './components/ExpenseTotal/ExpenseTotal'

function App() {
  return (
    <Container>
      <h1 className="mt-3">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
    </Container>
  )
}

export default App
