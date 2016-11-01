import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        <button onClick={onIncrement}>+</button>
        <p>{value}</p>
        <button onClick={onDecrement}>-</button>
      </div>  
    )
  }  
}
