// Modules
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Components
import { AppContainer } from './App'

// Reducer, actions, store
import reducer from './reducers/reducer'

let store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('chess-timer-app')
)