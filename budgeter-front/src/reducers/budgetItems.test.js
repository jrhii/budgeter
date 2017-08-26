import budgetItems from './budgetItems'
import * as types from '../constants/ActionTypes'

describe('budget Items reducer', () => {
  test('should handle intitial state', () => {
    expect(
      budgetItems(undefined, {})
    ).toEqual([
    ])
  })

  test('should handle ADD_BUDGET_ITEMS', () => {
    expect(
      budgetItems([], {
        type: types.ADD_BUDGET_ITEM,
        name: 'test start',
        amount: 100,
        parentBudget: null,
      })
    ).toEqual([
      {
        name: 'test start',
        amount: 100,
        parentBudget: null,
        id: 0,
      }
    ])

    expect(
      budgetItems([
        {
            name: 'test start',
            amount: 100,
            parentBudget: null,
            id: 0,
        }
      ], {
        type: types.ADD_BUDGET_ITEM,
        name: 'test charge',
        amount: -25,
        parentBudget: 0,
      })
    ).toEqual([
        {
            name: 'test start',
            amount: 100,
            parentBudget: null,
            id: 0,
        },
        {
            name: 'test charge',
            amount: -25,
            parentBudget: 0,
            id: 1,
        }
    ]) 
  })

  test('should handle DELETE_BUDGET_ITEM', () => {
    expect(
      budgetItems([
        {
            name: 'test start',
            amount: 100,
            parentBudget: null,
            id: 0,
        },
        {
            name: 'test charge',
            amount: -25,
            parentBudget: 0,
            id: 1,
        }
      ], {
        type: types.DELETE_BUDGET_ITEM,
        id: 1
      })
    ).toEqual([
        {
            name: 'test start',
            amount: 100,
            parentBudget: null,
            id: 0,
        }
    ])
  })

  test('should handle EDIT_BUDGET_ITEM', () => {
    expect(
      budgetItems([
        {
            name: 'test start',
            amount: 100,
            parentBudget: null,
            id: 0,
        },
        {
            name: 'test charge',
            amount: -25,
            parentBudget: 0,
            id: 1,
        }
      ], {
        type: types.EDIT_BUDGET_ITEM,
        name: 'test fund',
        amount: 35,
        parentBudget: 0,
        id: 1,
      })
    ).toEqual([
        {
            name: 'test start',
            amount: 100,
            parentBudget: null,
            id: 0,
        },
        {
            name: 'test fund',
            amount: 35,
            parentBudget: 0,
            id: 1,
        }
    ])
  })
})