import * as actions from './index';
import * as types from '../constants/ActionTypes';

describe('actions', () => {
    test('should addBudgetItem', () => {
        expect(
            actions.addBudgetItem('test child', 1000, -1, true)
        ).toEqual({
            type: types.ADD_BUDGET_ITEM,
            name: 'test child',
            initialAmount: 1000,
            parentBudgetId: -1,
            canHaveChildren: true,
        }
        );
    });

    // test('should addBudgetItem', () => {
    //     expect(
    //         actions.addBudgetItem('test item', -25, 2)
    //     ).toEqual({
    //         type: types.ADD_BUDGET_ITEM,
    //         name: 'test item',
    //         initialAmount: -25,
    //         parentBudgetId: 2,
    //         canHaveChildren: false,
    //     });
    //     // expect(
    //     //     actions.addBudgetItem('test item', -25, -1)
    //     // ).toThrowError();
    // });

    test('should editBudget', () => {
        expect(
            actions.editBudget(0, 'test edit', 35)
        ).toEqual({
            type: types.EDIT_BUDGET_ITEM,
            id: 0,
            name: "test edit",
            initialAmount: 35,
        });
    });

    test('should deleteBudget', () => {
        expect(
            actions.deleteBudget(2)
        ).toEqual({
            type: types.DELETE_BUDGET_ITEM,
            id: 2,
        });
    });

    test('should setCurrentBudget', () => {
        expect(
            actions.setCurrentBudget(3)
        ).toEqual({
            type: types.SET_CURRENT_BUDGET,
            currentBudgetId: 3,
        })
    })
})