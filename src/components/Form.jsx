import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <h1> form Component</h1>
        <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="city"/>
            <input type="text" name="country" placeholder="country"/>
            <button> CLick </button>
        </form>
      </div>
    )
  }
}
