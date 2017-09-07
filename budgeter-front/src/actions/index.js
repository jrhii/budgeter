import * as types from '../constants/ActionTypes'

export const addChildBudget = (name, initialAmount, parentBudgetId) => ({ type: types.ADD_BUDGET_ITEM, name, initialAmount, parentBudgetId, canHaveChildren: true});
export const addBudgetItem = (name, initialAmount, parentBudgetId) => {
    if (parentBudgetId < 0) throw new Error('INVALID_PARENT');
    return ({ type: types.ADD_BUDGET_ITEM, name, initialAmount, parentBudgetId, canHaveChildren: false})
};
export const deleteBudget = (id) => ({ type: types.DELETE_BUDGET_ITEM, id});
export const editBudget = (id, name, initialAmount, parentBudgetId) => ({ type: types.EDIT_BUDGET_ITEM, id, name, initialAmount});

export const setCurrentBudget = (currentBudgetId) => ({ type : types.SET_CURRENT_BUDGET, currentBudgetId});
