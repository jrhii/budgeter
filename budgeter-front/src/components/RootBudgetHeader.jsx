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
            editableName: this.props.rootBudget.name,
            editableAmount: this.props.rootBudget.initialAmount,

        };

        this.changeBudget = this.changeBudget.bind(this);
        this.toggleEditBox = this.toggleEditBox.bind(this);
        this.onChange = this.onChange.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
    }

    changeBudget(event) {
        const id = parseInt(event.target.key, 10);

        this.props.selectBudget(id);
    }

    submitEdit(event) {
        const {editableName, editableAmount} = this.state;

        console.log(editableAmount, editableName);

        this.props.editBudget(this.props.rootBudget.id, editableName, parseInt(editableAmount,10));
        this.setState({renderEditBox: false});
        event.preventDefault();
    }

    toggleEditBox() {
        this.setState(prevState => ({renderEditBox : !prevState.renderEditBox}));
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        const {rootBudget, parentBudgetArray} = this.props;
        const {editableName, editableAmount} = this.state;

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
                    <p id="root-budget-current-amount">Unallotted Funds: {rootBudget.currentAmount}</p>
                    <button id="root-budget-edit" key={rootBudget.id} onClick={this.toggleEditBox}>Edit</button>
                </div>
                {
                    this.state.renderEditBox ? 
                        <form id="root-budget-edit-box" onSubmit={this.submitEdit}>
                            <input type="text" id="root-budget-edit-name" placeholder="Name" name="editableName" value={editableName} onChange={this.onChange} />
                            <input type="number" id="root-budget-edit-amount" placeholder="Amount" name="editableAmount" value={editableAmount} onChange={this.onChange} />
                            <input type="submit" id="root-budget-edit-submit" value="Submit" />
                        </form> :
                        null
                }
            </div>
        );
    }
}

export default RootBudgetHeader;