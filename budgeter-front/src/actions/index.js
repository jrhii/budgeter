import * as types from '../constants/ActionTypes'

export const addChildBudget = (name, initialAmount, parentBudget) => ({ type: types.ADD_BUDGET_ITEM, name, initialAmount, parentBudget, canHaveChildren: true});
export const addBudgetItem = (name, initialAmount, parentBudget) => {
    if (parentBudget < 0) throw new Error('INVALID_PARENT');
    return ({ type: types.ADD_BUDGET_ITEM, name, initialAmount, parentBudget, canHaveChildren: false})
};
export const deleteBudget = (id) => ({ type: types.DELETE_BUDGET_ITEM, id});
export const editBudget = (id, name, initialAmount, parentBudget) => ({ type: types.EDIT_BUDGET_ITEM, id, name, initialAmount});

export const setCurrentBudget = (currentBudget) => ({ type : types.SET_CURRENT_BUDGET, currentBudget});
