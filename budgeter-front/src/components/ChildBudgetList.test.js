import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';
import ChildBudgetList from './ChildBudgetList';

function setup() {
    const childBudgetArray = [
        {
            id: 1,
            name: 'Sub Budget 1',
            initialAmount: 1500,
            currentAmount: 500,
            parentBudgetId: 0,
            canHaveChildren: true,
        },
        {
            id: 2,
            name: 'Sub Budget 2',
            initialAmount: 100,
            currentAmount: 100,
            parentBudgetId: 0,
            canHaveChildren: true,
        },
    ];
    const selectBudget = jest.fn();
    const addBudget = jest.fn();

    const enzymeWrapper = mount(<ChildBudgetList childBudgetArray={childBudgetArray} selectBudget={selectBudget} addBudget={addBudget}/>);


    return {
        enzymeWrapper,
    };
}
 
describe('ChildBudgetList', () => {
    test('renders correctly', () => {
        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.find('div.child-budget-list').exists()).toBeTruthy();
        expect(enzymeWrapper.find('button#add-budget-button').exists()).toBeTruthy();
        expect(enzymeWrapper.find('div.child-budget-list').find('ul.list').exists()).toBeTruthy();
        
        expect(enzymeWrapper.find('div#budget-1').exists()).toBeTruthy();
        const childBudgetOneWrapper = enzymeWrapper.find('div#budget-1');

        expect(childBudgetOneWrapper.find('button.child-budget-name').text()).toBe('Sub Budget 1');
        expect(childBudgetOneWrapper.find('p.child-budget-initial-amount').text()).toBe('1500');
        expect(childBudgetOneWrapper.find('p.child-budget-current-amount').text()).toBe('500');

        expect(enzymeWrapper.find('div#budget-2').exists()).toBeTruthy();
        const childBudgetTwoWrapper = enzymeWrapper.find('div#budget-2');

        expect(childBudgetTwoWrapper.find('button.child-budget-name').text()).toBe('Sub Budget 2');
        expect(childBudgetTwoWrapper.find('p.child-budget-initial-amount').text()).toBe('100');
        expect(childBudgetTwoWrapper.find('p.child-budget-current-amount').text()).toBe('100');
    });

    test('renders add-budget-form on click', () => {
        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.find('form#add-budget-form').exists()).toBeFalsy();
        enzymeWrapper.find('button#add-budget-button').simulate('click');
        expect(enzymeWrapper.find('form#add-budget-form').exists()).toBeTruthy();
    });
});