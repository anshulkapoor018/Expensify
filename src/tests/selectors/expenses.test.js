import moment from 'moment'; 
import selectExpenses from '../../selectors/expenses';

const expenses = [{
    id: '1',
    description: 'Hello',
    note: '',
    amount: 200,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 2000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Party',
    note: '',
    amount: 20000,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

test('should filter by text value', ()=>{
    const filters = {
        text: 'party',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2]]);
});

test('should filter by startDate value', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0]]);
});

test('should filter by endDate value', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1]]);
});

test('should sortby Date value', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1]]);
});

test('should sortby Amount value', ()=>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1], expenses[0]]);
});