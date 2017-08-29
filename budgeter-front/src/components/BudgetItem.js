import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class BudgetItem extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    static propTypes = {
        budgetItem: PropTypes.shape({
            id: PropTypes.number.isRequired,
            amount: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            //parentBudget: PropTypes.number.isRequired,
        }).isRequired,
        onBudgetClick: PropTypes.func.isRequired,
    }

    handleClick(event) {
        event.preventDefault();

        this.props.onBudgetClick(parseInt(event.target.value,10));
    }

    render() {
        const {id, amount, name} = this.props.budgetItem;

        return (
            <div>
                <button onClick={this.handleClick} value={id}>{name}</button>
                <span>{amount}</span>
            </div>
        );
    }
}