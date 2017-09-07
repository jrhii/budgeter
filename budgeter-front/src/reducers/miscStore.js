import { SET_CURRENT_BUDGET } from '../constants/ActionTypes'

const initialState = {
    currentBudgetId : 0,
};

export default function miscStore(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_BUDGET:
            return {
                ...state,
                currentBudgetId: action.currentBudgetId,
            };
        default:
            return state;
    }
};