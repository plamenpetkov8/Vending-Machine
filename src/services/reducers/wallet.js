import {
	INCREMENT_CAPITAL,
	DECREMENT_CAPITAL
} from '../../constants/OperationTypes';

const initialState = {
	value: 1000
};

const reducer = (state = initialState, action) => {
	if (action.type === INCREMENT_CAPITAL) {
		return {...state,
			value: state.value + action.payload
		};
	} else if (action.type === DECREMENT_CAPITAL) {
		return {...state,
			value: state.value - action.payload
		};
	} else {
		return state;
	}
};

export default reducer;
