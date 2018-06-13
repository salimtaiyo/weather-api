import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const API_KEY = "4bc2c64875a37068052211a47f8e04fb";
class App extends Component {
  state={
    city: '',
    temperature: '',
    country: '',
    description: '',
    error: ''
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api_call.json();
    console.log(data);
    this.setState({
      city: data.name,
      temperature: data.main.temp,
      country: data.sys.country,
      description: data.weather[0].description
    })
  }

  render() {
    return (
      <div className="App">
        <Titles/>
        <Form getWeather= {this.getWeather}/>
        <Weather 
        city={this.state.city}
        temperature={this.state.temperature}
        country={this.state.country}
        description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
