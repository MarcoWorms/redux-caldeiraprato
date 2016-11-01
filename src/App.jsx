import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from './components/Counter.jsx'

class App extends Component {
  render() {
    const { state, dispatch } = this.props
    console.log(this.props)
    return (
      <Counter 
        value={state}
        onIncrement={() => dispatch({type: 'INCREMENT'})} 
        onDecrement={() => dispatch({type: 'DECREMENT'})} 
      />
    )
  }
}

export default connect(state => ({
  state
}))(App)
