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
      parentBudgetId: -1,
      canHaveChildren: true,
    },
    ])
  })

  test('should handle ADD_BUDGET_ITEMS', () => {
    expect(
      budgetItems([], {
        type: types.ADD_BUDGET_ITEM,
        name: 'test start',
        initialAmount: 100,
        parentBudgetId: -1,
        canHaveChildren: true,
      })
    ).toEqual([
      {
        name: 'test start',
        initialAmount: 100,
        currentAmount: 100,
        parentBudgetId: -1,
        canHaveChildren: true,
        id: 0,
      }
    ])

    expect(
      budgetItems([
        {
          name: 'test start',
          initialAmount: 100,
          currentAmount: 100,
          parentBudgetId: -1,
          id: 0,
          canHaveChildren: true,
        }
      ], {
          type: types.ADD_BUDGET_ITEM,
          name: 'test charge',
          initialAmount: -25,
          parentBudgetId: 0,
          canHaveChildren: false,
        })
    ).toEqual([
      {
        name: 'test start',
        initialAmount: 100,
        currentAmount: 75,
        parentBudgetId: -1,
        id: 0,
        canHaveChildren: true,
      },
      {
        name: 'test charge',
        initialAmount: -25,
        currentAmount: -25,
        parentBudgetId: 0,
        id: 1,
        canHaveChildren: false,
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
          parentBudgetId: -1,
          id: 0,
          canHaveChildren: true,
        },
        {
          name: 'test charge',
          initialAmount: -25,
          currentAmount: -25,
          parentBudgetId: 0,
          id: 1,
          canHaveChildren: false,
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
        parentBudgetId: -1,
        id: 0,
        canHaveChildren: true,
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
          parentBudgetId: -1,
          id: 0,
          canHaveChildren: true,
        },
        {
          name: 'test charge',
          initialAmount: -25,
          currentAmount: -25,
          parentBudgetId: 0,
          id: 1,
          canHaveChildren: true,
        }
      ], {
          type: types.EDIT_BUDGET_ITEM,
          name: 'test fund',
          initialAmount: 35,
          parentBudgetId: 0,
          id: 1,
          canHaveChildren: true,
        })
    ).toEqual([
      {
        name: 'test start',
        initialAmount: 100,
        currentAmount: 135,
        parentBudgetId: -1,
        id: 0,
        canHaveChildren: true,
      },
      {
        name: 'test fund',
        initialAmount: 35,
        currentAmount: 35,
        parentBudgetId: 0,
        id: 1,
        canHaveChildren: true,
      }
    ])
  })
})