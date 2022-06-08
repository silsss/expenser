import { combineReducers, createStore } from 'redux'
import { expenseReducer } from '../reducers/expenses'

const reducer = combineReducers({
    expenses: expenseReducer,
})
const initialState = {}
export const store = createStore(reducer, initialState)