import React from 'react';
import {shallow} from 'enzyme'; 
import toJSON from 'enzyme-to-json';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('should render Dashboard Page correctly',()=>{
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});