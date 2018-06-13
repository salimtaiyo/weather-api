import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
      <div>
        <h1>  {this.props.city}</h1>
        <h2> {this.props.temperature}</h2>
      </div>
    )
  }
}
