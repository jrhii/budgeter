import { connect } from 'react-redux'
import BudgetList from '../components/BudgetList'

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }

const mapStateToProps = state => {
  return {
    budgetItems: state.budgetItems,
    currentBudget: state.miscStore.currentBudget,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

const SingleBudgetList = connect(
  mapStateToProps
)(BudgetList)

export default SingleBudgetList;