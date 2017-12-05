import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters/> &nbsp;
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
