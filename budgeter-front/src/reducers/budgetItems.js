import { ADD_BUDGET_ITEM, DELETE_BUDGET_ITEM, EDIT_BUDGET_ITEM } from '../constants/ActionTypes'

const initialState = [
  {
      name: 'Total Budget',
      amount: 5000.00,
      parentBudget: -1,
    id: 0,
  },
  {
      name: 'Paycheck',
      amount: 5000.00,
      parentBudget: 0,
      id: 0,
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
      case ADD_BUDGET_ITEM:
          return [
              ...state,
              {
                  id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                  name: action.name,
                  amount: action.amount,
                  parentBudget: action.parentBudget,
              }
          ]
      case DELETE_BUDGET_ITEM:
        return state.filter(todo =>
            todo.id !== action.id
        )
      case EDIT_BUDGET_ITEM:
        return state.map(todo =>
            todo.id === action.id ?
            { ...todo, 
                name: action.name,
                amount: action.amount,
                parentBudget: action.parentBudget,
            } :
            todo
        )

    default:
      return state
  }
}