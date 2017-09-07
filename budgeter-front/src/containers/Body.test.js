import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';
import {Body} from './Body';
// import {createStore} from 'redux';
// import reducer from './reducers';
// import {Provider} from 'react-redux';

function setup() {
    const currentBudget = {
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
    const setCurrentBudget = jest.fn();
    const editBudget = jest.fn();

    const enzymeWrapper = mount(<Body currentBudget={currentBudget} parentBudgetArray={parentBudgetArray} setCurrentBudget={setCurrentBudget} editBudget={editBudget}/>);

    return {
        enzymeWrapper,
    };
}
 
describe('Body', () => {
    test('renders correctly', () => {
        const { enzymeWrapper } = setup();
        
        expect(enzymeWrapper.find('div.body').exists()).toBeTruthy();
        expect(enzymeWrapper.find('RootBudgetHeader').exists()).toBeTruthy();
        expect(enzymeWrapper.find('ChildBudgetList').exists()).toBeTruthy();
    });
});