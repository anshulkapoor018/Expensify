import {createStore, combineReducers} from 'redux';

//Expenses Reducer 
const expensesReducerDefaultState = []

const expensesReducer  = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

//Filters Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined    

}

const filterReducer  = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

//Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'abc123',
        description: 'Rent',
        note: 'Final Payment',
        amount: 5500,
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined        
    }
};