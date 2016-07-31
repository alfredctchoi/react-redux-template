export const ENUMS = {
  INCREMENT_COUNTER: 'INCREMENT_COUNTER',
  DECREMENT_COUNTER: 'DECREMENT_COUNTER'
};

// action creators
export const increment = () => {
  return {
    type: ENUMS.INCREMENT_COUNTER
  }
};

export const decrement = () => {
  return {
    type: ENUMS.DECREMENT_COUNTER
  }
};
