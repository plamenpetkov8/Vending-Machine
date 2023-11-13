import {
	INCREMENT_BALANCE,
	RESET_BALANCE
} from '../../constants/OperationTypes';

const initialState = {
	value: 0
};

const reducer = (state = initialState, action) => {
	if (action.type === INCREMENT_BALANCE) {
		return {...state,
			value: state.value + action.payload
		};
	} else if (action.type === RESET_BALANCE) {
		return {...state,
			value: 0
		};
	} else {
		return state;
	}
};

export default reducer;
