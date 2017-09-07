import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';
import RootBudgetHeader from './RootBudgetHeader';

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
    const selectBudget = jest.fn();
    const editBudget = jest.fn();

    const enzymeWrapper = mount(<RootBudgetHeader rootBudget={rootBudget} parentBudgetArray={parentBudgetArray} selectBudget={selectBudget} editBudget={editBudget}/>);


    return {
        enzymeWrapper,
    };
}
 
describe('RootBudgetHeader', () => {
    test('renders correctly', () => {
        const { enzymeWrapper } = setup();
        
        expect(enzymeWrapper.find('div.root-budget-header').exists()).toBeTruthy();
        
        expect(enzymeWrapper.find('div#parent-budget-bar').exists()).toBeTruthy();
        expect(enzymeWrapper.find('button#budget-0').text()).toBe('Total Budget');
        
        expect(enzymeWrapper.find('div.root-budget').exists()).toBeTruthy();
        expect(enzymeWrapper.find('p#root-budget-name').text()).toBe('Current Budget: Sub Budget');
        expect(enzymeWrapper.find('p#root-budget-init-amount').text()).toBe('Total Funds: 1000');
        expect(enzymeWrapper.find('p#root-budget-current-amount').text()).toBe('Unallotted Funds: 1000');
        expect(enzymeWrapper.find('button#root-budget-edit').key()).toBe('1');
    });

    test('edit form renders on click', () => {
        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.find('div#root-budget-edit-box').exists()).toBeFalsy();
        enzymeWrapper.find('button#root-budget-edit').simulate('click');
        expect(enzymeWrapper.find('div#root-budget-edit-box').exists()).toBeTruthy();
        
    });
});