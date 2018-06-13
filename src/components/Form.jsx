import React from 'react'

const Form = props => (
    <div>
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="city" required/>
            <input type="text" name="country" placeholder="country" required/>
            <button> CLick </button>
        </form>
    </div>
  )

export default Form;