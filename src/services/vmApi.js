import {
	FETCH_ITEMS,
	FETCH_ITEMS_DONE,
	BUY_ITEM,
	INCREMENT_BALANCE,
	RESET_BALANCE,
	DECREMENT_ITEM_QUANTITY,
	INCREMENT_CAPITAL,
	DECREMENT_CAPITAL
} from '../constants/OperationTypes';
import axios from 'axios';

export const fetchItems = () => dispatch => {
	dispatch({
		type: FETCH_ITEMS
	});	

	axios.get(
        'api/items.json').then(items => {
		// Add some timeout so that we could see loading
		setTimeout(() => {
			dispatch({
				type: FETCH_ITEMS_DONE,
				payload: items
			});
		}, 1000);
	});
};

export const incrementBalance = amount => dispatch => {
	dispatch(decrementCapital(amount));

	dispatch({
		type: INCREMENT_BALANCE,
		payload: amount
	});
};

const resetBalance = () => dispatch => {
	dispatch({
		type: RESET_BALANCE,
		payload: null
	});
};

export const ejectBalance = () => (dispatch, getState) => {
	dispatch(incrementCapital(getState().balance.value));
	
	dispatch({
		type: RESET_BALANCE,
		payload: null
	});
};

export const incrementCapital = amount => dispatch => {
	dispatch({
		type: INCREMENT_CAPITAL,
		payload: amount
	});
};

const decrementCapital = amount => dispatch => {
	dispatch({
		type: DECREMENT_CAPITAL,
		payload: amount
	});
};

export const decrementQuantity = id => dispatch => {
	dispatch({
		type: DECREMENT_ITEM_QUANTITY,
		payload: id
	});
}

export const buyItem = id => (dispatch, getState) => {
	// actually this should be done this on backend
	//// Return the money inserted in the machine only after having the price of the newly 
	//// bought item substracted from it
	dispatch(incrementCapital(getState().balance.value - getState().items.data[id].price));
	
	//// Reset balance back to zero
	dispatch(resetBalance());

	dispatch({
		type: BUY_ITEM,
		payload: id
	});
};
