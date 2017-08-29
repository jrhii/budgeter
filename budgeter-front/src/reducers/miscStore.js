import { SET_CURRENT_BUDGET } from '../constants/ActionTypes'

const initialState = {
    currentBudget : 0,
};

export default function miscStore(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_BUDGET:
            return {
                ...state,
                currentBudget: action.currentBudget,
            };
        default:
            return state;
    }
};