import * as types from '../constants/ActionTypes'

export const addBudgetItem = (name, amount, parentBudget) => ({ type: types.ADD_BUDGET_ITEM, name, initialAmount, parentBudget});
export const deleteBudgetItem = (id) => ({ type: types.DELETE_BUDGET_ITEM, id});
export const editBudgetItem = (id, name, amount, parentBudget) => ({ type: types.EDIT_BUDGET_ITEM, id, name, intialAmount, parentBudget});

export const setCurrentBudget = (currentBudget) => ({ type : types.SET_CURRENT_BUDGET, currentBudget});
