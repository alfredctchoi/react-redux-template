import React from 'react'

const CounterDisplay = ({count, increment, decrement}) => (
  <div>
    <div>Counter: {count}</div>
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  </div>
);

export default CounterDisplay;