import { connect } from 'react-redux';
import {setCurrentBudget, addBudgetItem} from '../actions';
import BudgetList from '../components/BudgetList';

const mapStateToProps = state => {
  return {
    budgetItems: state.budgetItems,
    currentBudget: state.miscStore.currentBudget,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onBudgetClick: id => {
      dispatch(setCurrentBudget(id));
    },
    onAddBudget: (name, amount, currentBudget) => {
      dispatch(addBudgetItem(name, amount, currentBudget))
    }
  };
};

const SingleBudgetList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetList);

export default SingleBudgetList;