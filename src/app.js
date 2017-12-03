import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
//CSS
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const expenseDashboardPage = () => (
    <div>
        This is Dashboard.
    </div>
);

const addExpensePage = () => (
    <div>
        This is Add Expense.
    </div>
);

const editExpensePage = () => (
    <div>
        This is Edit Expense.
    </div>
);

const helpPage = () => (
    <div>
        This is Help Page for Expense App.
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={expenseDashboardPage} exact={true}/>
            <Route path="/add" component={addExpensePage} exact={true}/>
            <Route path="/edit" component={editExpensePage} exact={true}/>
            <Route path="/help" component={helpPage} exact={true}/>  
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'))