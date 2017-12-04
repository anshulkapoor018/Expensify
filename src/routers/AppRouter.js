import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import expenseDashboardPage from '../components/expenseDashboardPage';
import addExpensePage from '../components/addExpensePage';
import editExpensePage from '../components/editExpensePage';
import Header from '../components/Header';
import notFoundPage from '../components/notFoundPage';
import helpPage from '../components/helpPage';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={expenseDashboardPage} exact={true}/>
            <Route path="/add" component={addExpensePage}/>
            <Route path="/edit" component={editExpensePage}/>
            <Route path="/help" component={helpPage}/>
            <Route component={notFoundPage} />            
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;