import React from 'react'
import PropTypes from 'prop-types'
// import Todo from './Todo'

const BudgetList = ({ budgetItems, currentBudget }) => (
  <ul>
    {
      budgetItems
        .filter(budgetItem => budgetItem.parentBudget === currentBudget)
        .map(budgetItem => (
          <div>
              <p>{budgetItem.name}</p>
              <p>{budgetItem.amount}</p>
          </div>
        ))
    }
  </ul>
)

BudgetList.propTypes = {
  budgetItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      parentBudget: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired
}

export default BudgetList