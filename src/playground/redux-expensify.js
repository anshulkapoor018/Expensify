import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//Add Expense
const addExpense = (
                {
                    description='', 
                    note='', 
                    amount=0, 
                    createdAt=0
                } = {}) => ({
                    type: 'ADD_EXPENSE',
                    expense: {
                        id: uuid(),
                        description,
                        note,
                        amount,
                        createdAt
                    }
});

//Remove Expense
const removeExpense = ({id} ={}) => ({
        type: 'REMOVE_EXPENSE',
        id
});


//Expenses Reducer 
const expensesReducerDefaultState = []

const expensesReducer  = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => {
                return id !== action.id; 
            });
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

store.subscribe(()=> {
    console.log(store.getState());    
});

const e1 = store.dispatch(addExpense({description:'Rent', amount:2500}));
const e2 = store.dispatch(addExpense({description:'Car', amount:250000}));
store.dispatch(removeExpense({ id: e2.expense.id}));


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