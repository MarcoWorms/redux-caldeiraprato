import React, { Component } from 'react'
import { createStore } from 'redux'
import counter from './reducers'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { render } from 'react-dom'

const store = createStore(counter)

render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.querySelector('#react-render-root')
)
