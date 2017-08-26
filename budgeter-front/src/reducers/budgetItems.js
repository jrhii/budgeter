import { ADD_BUDGET_ITEM, DELETE_BUDGET_ITEM, EDIT_BUDGET_ITEM } from '../constants/ActionTypes'

const initialState = [
]

export default function budgetItems(state = initialState, action) {
  switch (action.type) {
      case ADD_BUDGET_ITEM:
          return [
              ...state,
              {
                  id: state.reduce((maxId, budgetItem) => Math.max(budgetItem.id, maxId), -1) + 1,
                  name: action.name,
                  amount: action.amount,
                  parentBudget: action.parentBudget,
              }
          ]
      case DELETE_BUDGET_ITEM:
        return state.filter(budgetItem =>
            budgetItem.id !== action.id
        )
      case EDIT_BUDGET_ITEM:
        return state.map(budgetItem =>
            budgetItem.id === action.id ?
            { ...budgetItem, 
                name: action.name,
                amount: action.amount,
                parentBudget: action.parentBudget,
            } :
            budgetItem
        )

    default:
      return state
  }
}