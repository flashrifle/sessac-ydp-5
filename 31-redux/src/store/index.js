import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';
import moneyReducer from './moneyReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    isVisible: isVisibleReducer,
    bank: moneyReducer,
});

export default rootReducer;
