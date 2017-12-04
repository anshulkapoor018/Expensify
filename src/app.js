import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
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

const notFoundPage = () => (
    <div>
        Error 404
        
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> &nbsp;
        <NavLink to="/add" activeClassName="is-active">Add</NavLink> &nbsp;
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink> &nbsp;
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

const routes = (
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

ReactDOM.render(routes, document.getElementById('app'))