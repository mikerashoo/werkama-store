import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { userReducer, unitReducers, categoryReducers, itemReducers, stockReducers, itemTransactionsReducers, homeReducers } from '../reducers';
import rootSaga from '../saga';
const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    users: userReducer,
    categories: categoryReducers,
    units: unitReducers,
    category: itemReducers,
    stocks: stockReducers,
    itemTransactions: itemTransactionsReducers,
    homeStote: homeReducers
});


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);
export default store;

