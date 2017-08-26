import {combineReducers} from 'redux';
import budgetItems from './budgetItems';
import miscStore from './miscStore';

const rootReducer = combineReducers({
    budgetItems,
    miscStore,
});

export default rootReducer;