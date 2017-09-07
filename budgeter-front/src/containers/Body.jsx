import React, { Component } from 'react';
import RootBudgetHeader from '../components/RootBudgetHeader';
import ChildBudgetList from '../components/ChildBudgetList';
import { connect } from 'react-redux';
import {setCurrentBudget, addBudgetItem} from '../actions';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
    const currentBudget = state.budgetItems.find(budget => budget.id === state.miscStore.currentBudgetId);
    const parentBudgetArray = filterParents(currentBudget, state.budgetItems);
    const childBudgetArray = state.budgetItems.filter(budget => budget.parentBudgetId === currentBudget.id);

    return {
        currentBudget,
        parentBudgetArray,
        childBudgetArray,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentBudget: id => {
            dispatch(setCurrentBudget(id));
        },
        editBudget: (id, name, initialAmount) => {
            dispatch(id, name, initialAmount);
        },
        onBudgetClick: id => {
            dispatch(setCurrentBudget(id));
        },
        onAddBudget: (name, amount, currentBudget) => {
            dispatch(addBudgetItem(name, amount, currentBudget));
        },
    };
};

function filterParents(currentBudget, budgetArray) {
    const parentBudgetArray = [];

    while (currentBudget.parentBudgetId >= 0) {
        parentBudgetArray.push(budgetArray.find(budget => budget.id === currentBudget.parentBudgetId));
    }

    return parentBudgetArray;
}

export class Body extends Component {
    static propTypes = {
        currentBudget: PropTypes.shape({
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
        setCurrentBudget: PropTypes.func.isRequired,
        editBudget: PropTypes.func.isRequired,
    }

    render() {
        const {currentBudget, parentBudgetArray, setCurrentBudget, editBudget} = this.props;

        return (
            <div className="body">
                <RootBudgetHeader rootBudget={currentBudget} parentBudgetArray={parentBudgetArray} selectBudget={setCurrentBudget} editBudget={editBudget}/>
                <ChildBudgetList />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Body);