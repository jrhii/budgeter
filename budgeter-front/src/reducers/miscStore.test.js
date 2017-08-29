import miscStore from './miscStore';
import * as types from '../constants/ActionTypes';

describe('miscStore reducer', () => {
    test('should handle initial state', () => {
        expect(
            miscStore(undefined, {})
        ).toEqual({
            currentBudget: 0,
        });
    });

    test('should handle changeState', () => {
        expect(
            miscStore({currentBudget: 0}, {
                type: types.SET_CURRENT_BUDGET,
                currentBudget: 2,
            })).toEqual({
                currentBudget: 2,
            });
    });
});