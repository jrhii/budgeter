import * as types from '../constants/ActionTypes'

export const addBudgetItem = (name, ammount, parentBudget) => ({ type: types.ADD_BUDGET_ITEM, name, ammount, parentBudget});
export const deleteBudgetItem = (id) => ({ type: types.DELETE_BUDGET_ITEM, id});
export const editBudgetItem = (id, name, amount, parentBudget) => ({ type: types.EDIT_BUDGET_ITEM, id, name, ammount, parentBudget});
