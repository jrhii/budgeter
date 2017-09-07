import React, { Component } from 'react';
import RootBudgetHeader from '../components/RootBudgetHeader';
import ChildBudgetList from '../components/ChildBudgetList';
import { connect } from 'react-redux';
import {setCurrentBudget, addBudgetItem} from '../actions';

const mapStateToProps = state => {
    const currentBudget = state.budgetItems.find(budget => budget.id === state.miscStore.currentBudgetId);
    const parentBudgetArray = filterParents(currentBudget, state.budgetItems);
    const childBudgetArray = state.budgetItems.filter(budget => budget.parentBudgetId === currentBudget.id);

    return {
        // budgetItems: state.budgetItems,
        currentBudget,
        parentBudgetArray,
        childBudgetArray,
    };
};

const mapDispatchToProps = dispatch => {
    return {
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
    render() {
        return (
            <div className="body">
                <RootBudgetHeader />
                <ChildBudgetList />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Body);