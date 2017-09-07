import miscStore from './miscStore';
import * as types from '../constants/ActionTypes';

describe('miscStore reducer', () => {
    test('should handle initial state', () => {
        expect(
            miscStore(undefined, {})
        ).toEqual({
            currentBudgetId: 0,
        });
    });

    test('should handle changeState', () => {
        expect(
            miscStore({ currentBudgetId: 0 }, {
                type: types.SET_CURRENT_BUDGET,
                currentBudgetId: 2,
            })).toEqual({
                currentBudgetId: 2,
            });
    });
});