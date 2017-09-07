import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';
import RootBudgetHeader from './RootBudgetHeader';
// import {createStore} from 'redux';
// import reducer from './reducers';
// import {Provider} from 'react-redux';

function setup() {
    const rootBudget = {
        id: 1,
        name: 'Sub Budget',
        initialAmount: 1000,
        currentAmount: 1000,
        parentBudgetId: 0,
        canHaveChildren: true,
    };
    const parentBudgetArray = [{
        id: 0,
        name: 'Total Budget',
        initialAmount: 1500,
        currentAmount: 500,
        parentBudgetId: -1,
        canHaveChildren: true,
    }];
    const selectBudget = id => {
        console.log('budget set to ', id);
    };
    const editBudget = (id, name, amount) => {
        console.log(`Editing budget '${name}'`);
    };

    const enzymeWrapper = mount(<RootBudgetHeader rootBudget={rootBudget} parentBudgetArray={parentBudgetArray} selectBudget={selectBudget} editBudget={editBudget}/>);


    return {
        enzymeWrapper,
    };
}
 
describe('RootBudgetHeader', () => {
    test('renders correctly', () => {
        const { enzymeWrapper } = setup();
        
        expect(enzymeWrapper.find('div.root-budget-header').exists()).toBeTruthy();
        // expect(enzymeWrapper.find('RootBudgetHeader').exists()).toBeTruthy();
        // expect(enzymeWrapper.find('ChildBudgetList').exists()).toBeTruthy();
    });
});