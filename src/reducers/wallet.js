import { CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCY:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
}

export default wallet;
