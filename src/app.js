import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'WaterBill'}));
store.dispatch(addExpense({description: 'Gas'}));
store.dispatch(setTextFilter('Gas'));

const state = store.getState();
const visible = getVisibleExpenses(state.expenses, state.filters);

console.log(visible);

//console.log(store.getState());

ReactDOM.render(<AppRouter/>, document.getElementById('app'))