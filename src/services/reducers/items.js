import {
	FETCH_ITEMS,
	FETCH_ITEMS_DONE,
	DECREMENT_ITEM_QUANTITY
} from '../../constants/OperationTypes';
import keyBy from 'lodash/keyBy';

const initialState = {
	loading: false,
	data: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case FETCH_ITEMS:
		return {...state,
			loading: true
		};
	case FETCH_ITEMS_DONE:
		return {...state,
			loading: false,
			data: keyBy(action.payload.data.items.map(item => (
				{...item,
					loading: false
				}
			)), 'id')
		};
	case DECREMENT_ITEM_QUANTITY:
		let data_updated = state.data;
		data_updated[action.payload].quantity -= 1; 
		
		return {
			...state,
			loading: false,
			data: data_updated
		} 
	default:
		return state;
	}
};

export default reducer;
