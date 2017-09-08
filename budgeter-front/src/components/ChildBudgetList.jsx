import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildBudgetList extends Component {
    static propTypes = {
        parentBudgetId: PropTypes.number.isRequired,
        childBudgetArray : PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                initialAmount: PropTypes.number.isRequired,
                currentAmount: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                parentBudgetId: PropTypes.number.isRequired,
            }).isRequired
        ).isRequired,
        selectBudget: PropTypes.func.isRequired,
        addBudget: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            amount: '',
            renderAddBudgetForm: false,
        };

        this.toggleAddBudgetForm = this.toggleAddBudgetForm.bind(this);
        this.addBudget = this.addBudget.bind(this);
        this.onChange = this.onChange.bind(this);
        this.changeBudget = this.changeBudget.bind(this);
    }

    toggleAddBudgetForm() {
        this.setState(prevState => ({renderAddBudgetForm : !prevState.renderAddBudgetForm}));
    }

    addBudget(event) {
        const {name, amount} = this.state;

        this.props.addBudget(name, amount, this.props.parentBudgetId, true);
        event.preventDefault();
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    changeBudget(event) {
        const id = parseInt(event.target.key, 10);
        
        this.props.selectBudget(id);
    }

    render() {
        const { childBudgetArray } = this.props;

        console.log(this.state);

        return (
            <div className="child-budget-list">
                <button id="add-budget-button" onClick={this.toggleAddBudgetForm}>Add Item</button>
                {
                    this.state.renderAddBudgetForm ?
                        <form id="add-budget-form" onSubmit={this.addBudget}>
                            <input type="text" id="add-budget-form-name" name="name" placeholder="Name" value={this.state.name} onChange={this.onChange}/>
                            <input type="number" id="add-budget-form-amount" name="amount" placeholder="Amount" value={this.state.amount} onChange={this.onChange}/>
                            <input type="submit" id="add-budget-form-submit" value="Submit" />
                        </form>
                        : null
                }
                <ul className="list">
                    {childBudgetArray.map((budget) => 
                        <div className="child-budget" id={`budget-${budget.id}`}>
                            <button className="child-budget-name" key={budget.id} onClick={this.changeBudget}>
                                {budget.name}
                            </button>
                            <p className="child-budget-initial-amount">{budget.initialAmount}</p>
                            <p className="child-budget-current-amount">{budget.currentAmount}</p>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default ChildBudgetList;