import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RootBudgetHeader extends Component {

    static propTypes = {
        rootBudget: PropTypes.shape({
            id: PropTypes.number.isRequired,
            initialAmount: PropTypes.number.isRequired,
            currentAmount: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            parentBudgetId: PropTypes.number.isRequired,
        }).isRequired,
        parentBudgetArray: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                initialAmount: PropTypes.number.isRequired,
                currentAmount: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                parentBudgetId: PropTypes.number.isRequired,
            }).isRequired
        ).isRequired,
        selectBudget: PropTypes.func.isRequired,
        editBudget: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            renderEditBox: false,
        };

        this.changeBudget = this.changeBudget.bind(this);
        this.toggleEditBox = this.toggleEditBox.bind(this);
    }

    changeBudget(event) {
        const id = parseInt(event.target.key, 10);

        this.props.selectBudget(id);
    }

    toggleEditBox(event) {
        this.setState(prevState => ({renderEditBox : !prevState.renderEditBox}));
        event.preventDefault();
    }

    render() {
        const {rootBudget, parentBudgetArray, editBudget} = this.props;

        console.log('parent Budgets: ', parentBudgetArray);

        return (
            <div className="root-budget-header">
                <div id="parent-budget-bar">
                    {
                        parentBudgetArray.map(budget => {
                            return (
                                <button className="parent-budget" id={`budget-${budget.id}`} key={budget.id} onClick={this.changeBudget}>
                                    {budget.name}
                                </button>
                            );
                        })
                    }
                </div>
                <div className="root-budget">
                    <p id="root-budget-name">Current Budget: {rootBudget.name}</p>
                    <p id="root-budget-init-amount">Total Funds: {rootBudget.initialAmount}</p>
                    <p id="root-budget-current-amount">Unalotted Funds: {rootBudget.currentAmount}</p>
                    <button id="root-budget-edit" key={rootBudget.id} onClick={this.toggleEditBox}>Edit</button>
                </div>
                {
                    this.state.renderEditBox ? 
                        <div className="root-budget-edit-box">EDIT BOX HERE</div> :
                        null
                }
            </div>
        );
    }
}

export default RootBudgetHeader;