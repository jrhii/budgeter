import budgetItems from './budgetItems'
import * as types from '../constants/ActionTypes'

describe('budget Items reducer', () => {
  test('should handle intitial state', () => {
    expect(
      budgetItems(undefined, {})
    ).toEqual([{
      id: 0,
      name: 'Total Budget',
      initialAmount: 1000,
      currentAmount: 1000,
      parentBudget: -1,
  },
    ])
  })

  test('should handle ADD_BUDGET_ITEMS', () => {
    expect(
      budgetItems([], {
        type: types.ADD_BUDGET_ITEM,
        name: 'test start',
        initialAmount: 100,
        parentBudget: -1,
      })
    ).toEqual([
      {
        name: 'test start',
        initialAmount: 100,
        currentAmount: 100,
        parentBudget: -1,
        id: 0,
      }
    ])

    expect(
      budgetItems([
        {
            name: 'test start',
            initialAmount: 100,
            currentAmount: 100,
            parentBudget: -1,
            id: 0,
        }
      ], {
        type: types.ADD_BUDGET_ITEM,
        name: 'test charge',
        initialAmount: -25,
        parentBudget: 0,
      })
    ).toEqual([
        {
            name: 'test start',
            initialAmount: 100,
            currentAmount: 75,
            parentBudget: -1,
            id: 0,
        },
        {
            name: 'test charge',
            initialAmount: -25,
            currentAmount: -25,
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
            initialAmount: 100,
            currentAmount: 75,
            parentBudget: -1,
            id: 0,
        },
        {
            name: 'test charge',
            initialAmount: -25,
            currentAmount: -25,
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
            initialAmount: 100,
            currentAmount: 100,
            parentBudget: -1,
            id: 0,
        }
    ])
  })

  test('should handle EDIT_BUDGET_ITEM', () => {
    expect(
      budgetItems([
        {
            name: 'test start',
            initialAmount: 100,
            currentAmount: 75,
            parentBudget: -1,
            id: 0,
        },
        {
            name: 'test charge',
            initialAmount: -25,
            currentAmount: -25,
            parentBudget: 0,
            id: 1,
        }
      ], {
        type: types.EDIT_BUDGET_ITEM,
        name: 'test fund',
        initialAmount: 35,
        parentBudget: 0,
        id: 1,
      })
    ).toEqual([
        {
            name: 'test start',
            initialAmount: 100,
            currentAmount: 135,
            parentBudget: -1,
            id: 0,
        },
        {
            name: 'test fund',
            initialAmount: 35,
            currentAmount:35,
            parentBudget: 0,
            id: 1,
        }
    ])
  })
})