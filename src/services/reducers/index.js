import { combineReducers } from 'redux';
import items from './items';
import wallet from './wallet';
import balance from './balance';
import acquiredItems from './acquiredItems';

const rootReducer = combineReducers({
	items,
	wallet,
	balance,
	acquiredItems
});

export default rootReducer;
