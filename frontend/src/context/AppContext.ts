/* eslint-disable camelcase */
import { createContext, useReducer } from 'react'
import { expenses_types } from '../components/ExpenseList/ExpenseList'

export interface state_type {
  budget: number,
  expenses: expenses_types[]
}

const AppReducer = (state:state_type, action: { type: any }) => {
  switch (action.type) {
  default:
    return state
  }
}

const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: 'shopping', cost: 40 },
    { id: 13, name: 'holiday', cost: 400 },
    { id: 14, name: 'car service', cost: 50 },
  ],
}

export const AppContext = createContext<AppContextType>(undefined!)

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return(<>
    <AppContext.Provider value={
      budget: state.budget,
      expenses: state.expenses,
    }
    >
  </>)
}
