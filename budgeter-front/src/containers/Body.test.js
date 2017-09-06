import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';
import Body from './Body';
// import {createStore} from 'redux';
// import reducer from './reducers';
// import {Provider} from 'react-redux';

function setup() {
    const enzymeWrapper = mount(<Body />);

    return {
        enzymeWrapper
    };
};
 
describe('Body', () => {
    test('renders correctly', () => {
        const { enzymeWrapper } = setup();
        
        expect(enzymeWrapper.find('div.body').exists()).toBeTruthy();
        expect(enzymeWrapper.find('RootBudget').exists()).toBeTruthy();
    });
});