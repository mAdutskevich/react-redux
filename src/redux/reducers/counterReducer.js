import { INCREMENT, DECREMENT } from 'redux/types';

const defaultState = {
  value: 0,
};

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
