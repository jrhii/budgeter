import React from 'react'
import PropTypes from 'prop-types'
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
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event){
    this.props.onAddBudget(this.state.name, this.state.amount, this.props.currentBudget);
    event.preventDefault();
  }
  
  render() {
    const {budgetItems, currentBudget} = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit}>.
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.onChange}/>
          Amount:
          <input type="text" name="amount" value={this.state.amount} onChange={this.onChange}/>
          <input type="submit" value="Add Budget" />
        </form>
        <ul>
          {
            budgetItems
              .filter(budgetItem => budgetItem.parentBudget === currentBudget)
              .map(budgetItem => (
                <div>{budgetItem.name}</div>
              ))
          }
        </ul>
      </div>
    )
  }
}

BudgetList.propTypes = {
  budgetItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      parentBudget: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  currentBudget: PropTypes.number.isRequired,
  onBudgetClick: PropTypes.func,
  onAddBudget: PropTypes.func,
}

export default BudgetList