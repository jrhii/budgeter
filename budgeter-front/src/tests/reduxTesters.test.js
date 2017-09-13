import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedBody from '../containers/Body';
import { createStore } from 'redux';
import reducer from '../reducers';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

const store = createStore(reducer);

function setup() {

    const enzymeWrapper = mount(<Provider store={store}><ConnectedBody/></Provider>);
    return {
        enzymeWrapper,
    };
}

describe('ConnectedBody', () => {
    test('renders without crashing', () => {
        setup();
    });

    test('initiates state', () => {
        const {enzymeWrapper} = setup();

        expect(enzymeWrapper.find('Body').props().currentBudget.id).toEqual(0);
        expect(enzymeWrapper.find('Body').props().currentBudget.initialAmount).toEqual(1000);
        expect(enzymeWrapper.find('Body').props().currentBudget.currentAmount).toEqual(1000);
        expect(enzymeWrapper.find('Body').props().currentBudget.name).toEqual('Total Budget');
        expect(enzymeWrapper.find('Body').props().currentBudget.parentBudgetId).toEqual(-1);
    });

    test('adds child', () => {
        const {enzymeWrapper} = setup();
    
        enzymeWrapper.find('Body').props().addBudget('test child', 100, 0, true);

        const child = enzymeWrapper.find('Body').props().childBudgetArray.find(budget => budget.id === 1);

        expect(child.id).toEqual(1);
        expect(child.initialAmount).toEqual(100);
        expect(child.currentAmount).toEqual(100);
        expect(child.name).toEqual('test child');
        expect(child.parentBudgetId).toEqual(0);
    });

    test('changes budget',() => {
        const {enzymeWrapper} = setup();
        
        enzymeWrapper.find('Body').props().addBudget('test child', 100, 0, true);
        enzymeWrapper.find('Body').props().setCurrentBudget(1);

        expect(enzymeWrapper.find('Body').props().currentBudget.id).toEqual(1);
    });
});
