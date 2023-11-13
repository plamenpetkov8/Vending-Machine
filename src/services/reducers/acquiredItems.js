import {
	BUY_ITEM
} from '../../constants/OperationTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
	if (action.type === BUY_ITEM) {
		return [
			...state,
			action.payload
		];
	}

	return state;
};

export default reducer;
