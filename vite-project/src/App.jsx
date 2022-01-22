import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Budget from './components/Budget/Budget'
import Remaining from './components/Remaining/Remaining'
import ExpenseTotal from './components/ExpenseTotal/ExpenseTotal'
import ExpenseList from './components/ExpenseList/ExpenseList'
import AddExpenseForm from './components/AddExpenseForm/AddExpenseForm'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <Container>
        <h1 className="mt-3">My Budget Planner</h1>
        <Row className="mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </Row>
        <h3 className="mt-3">Expenses</h3>
        <Row className="mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </Row>
        <h3 className="mt-3">Add Expense</h3>
        <Row className="mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </Row>
      </Container>
    </AppProvider>
  )
}

export default App
