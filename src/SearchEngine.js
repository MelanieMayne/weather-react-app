import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
    });
    }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "440461d4fbdf3d442aeb4ff32t4abo8a";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
    <div className="SearchEngine">
      <div className="Header">
        <header className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a City"
              autoComplete="off"
              className="search-bar"
              onChange={handleChangeCity}
            />
            <input type="submit" value="Search" className="search-button" onSubmit={handleSubmit}/>
          </form>
        </header>
      </div>
      <CurrentWeather data = {weatherData}/>
      <WeatherForecast />
    </div>
  );
} else {
  search();
  return <div>Loading...</div>
}
}