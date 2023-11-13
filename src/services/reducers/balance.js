import {
	INCREMENT_BALANCE,
	INCREMENT_BALANCE_DONE,
	RESET_BALANCE
} from '../../constants/OperationTypes';

const initialState = {
	value: 0,
	loading: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case INCREMENT_BALANCE:
		return {...state,
			loading: true
		};
	case INCREMENT_BALANCE_DONE:
		return {...state,
			loading: false,
			value: state.value + action.payload
		};
	case RESET_BALANCE:
		return {...state,
			loading: false,
			value: 0
		};
	default:
		return state;
	}
};

export default reducer;
