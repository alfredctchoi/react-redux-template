import {ENUMS} from '../actions/counter'

const counter = (state = 0, action) => {
  switch (action.type) {
    case ENUMS.INCREMENT_COUNTER:
      return state + 1;
    case ENUMS.DECREMENT_COUNTER:
      return state -1;
    default:
      return state;
  }
};

export default counter;