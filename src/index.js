import {createStore} from 'redux'
import App from './js/components/app'
import React from 'react'
import ReactDOM from  'react-dom'
import counterApp from './js/reducers'
import {Provider} from 'react-redux'


//store
const store = createStore(counterApp);
// console.log(store.getState());
// store.dispatch(incrementCounter());
// console.log(store.getState());


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);