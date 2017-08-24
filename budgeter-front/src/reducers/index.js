import {combineReducers} from 'redux';
import budgetItems from './budgetItems';

const rootReducer = combineReducers({
    budgetItems
});

export default rootReducer;