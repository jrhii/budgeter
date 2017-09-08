import React from 'react';
import PropTypes from 'prop-types';
import BudgetItem from './BudgetItem';
// import Todo from './Todo'

class BudgetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickParent = this.onClickParent.bind(this);
  }

  static propTypes = {
    budgetItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        //parentBudget: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
    //currentBudget: PropTypes.number.isRequired,
    onBudgetClick: PropTypes.func.isRequired,
    onAddBudget: PropTypes.func.isRequired,
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit(event){
    this.props.onAddBudget(this.state.name, parseInt(this.state.amount, 10), this.props.currentBudget);
    event.preventDefault();
  }

  onClickParent(event) {
    event.preventDefault();
    if (event.target.value)
      this.props.onBudgetClick(parseInt(event.target.value, 10));
  }
  
  render() {
    const {budgetItems, currentBudget, onBudgetClick} = this.props;
    const thisBudget = this.props.budgetItems.find(budgetItem => budgetItem.id === this.props.currentBudget);

    //const budgetChildren = filterChildren();
    //buildDetails();

    return (
      <div>
        <div className="budget-details">
          <p id="budget-name">{thisBudget && thisBudget.name}</p>
          <p id="budget-amount">{thisBudget && thisBudget.amount}</p>
          <span>
            <button onClick={this.onClickParent} value={thisBudget && thisBudget.parentBudget}>Go to Parent Budget</button>
          </span>
        </div>
        <form className="add-item" onSubmit={this.onSubmit}>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.onChange}/>
          Amount:
          <input type="text" name="amount" value={this.state.amount} onChange={this.onChange}/>
          <input type="submit" value="Add Budget" />
        </form>
        <ul className="budget-list">
          {
            budgetItems
              .filter(budgetItem => budgetItem.parentBudget === currentBudget)
              .map(budgetItem => (
                <BudgetItem key={budgetItem.id} budgetItem={budgetItem} onBudgetClick={onBudgetClick}/>
              ))
          }
        </ul>
      </div>
    )
  }
}

export default BudgetList