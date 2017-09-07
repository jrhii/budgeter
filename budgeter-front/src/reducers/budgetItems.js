import { ADD_BUDGET_ITEM, DELETE_BUDGET_ITEM, EDIT_BUDGET_ITEM } from '../constants/ActionTypes'

const initialState = [{
    id: 0,
    name: 'Total Budget',
    initialAmount: 1000,
    currentAmount: 1000,
    parentBudgetId: -1,
    canHaveChildren: true,
},
];

function rebuildAmountField(budgetId, budgetList) {
    if (budgetId < 0) return budgetList;

    const parent = budgetList.find((budget) => budgetId === budget.id);
    const children = budgetList.filter((budget) => budgetId === budget.parentBudgetId);
    let currentAmount = parent.initialAmount;

    for (let child of children) {
        currentAmount += child.currentAmount;
    }
    parent.currentAmount = currentAmount;

    return rebuildAmountField(parent.parentBudgetId, budgetList);
};

export default function budgetItems(state = initialState, action) {
    let budgetList = {}
    switch (action.type) {
        case ADD_BUDGET_ITEM:
            budgetList = [
                ...state,
                {
                    id: state.reduce((maxId, budgetItem) => Math.max(budgetItem.id, maxId), -1) + 1,
                    name: action.name,
                    initialAmount: action.initialAmount,
                    currentAmount: action.initialAmount,
                    parentBudgetId: action.parentBudgetId,
                    canHaveChildren: action.canHaveChildren,
                }
            ];

            return rebuildAmountField(action.parentBudgetId, budgetList);
        case DELETE_BUDGET_ITEM:
            const deletedBudget = state.find((budgetItem) => budgetItem.id === action.id);
            budgetList = state.filter((budgetItem) => budgetItem.id !== action.id);

            return rebuildAmountField(deletedBudget.parentBudgetId, budgetList);
        case EDIT_BUDGET_ITEM:
            budgetList = state.map(budgetItem =>
                budgetItem.id === action.id ?
                    {
                        ...budgetItem,
                        name: action.name,
                        initialAmount: action.initialAmount,
                        currentAmount: action.currentAmount,
                        parentBudgetId: action.parentBudgetId,
                        canHaveChildren: action.canHaveChildren,
                    } :
                    budgetItem
            );

            return rebuildAmountField(action.id, budgetList);

        default:
            return state
    }
}