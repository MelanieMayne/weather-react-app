import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";

import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleChangeCity(event) {
    console.log(event.target.value);
  }

  function handleResponse(response) {
  setWeatherData({
    ready: true,
    temperature: response.data.temperature.current,
    humidity: response.data.temperature.humidity,
    wind: response.data.wind.speed,
    description: response.data.condition.description,
    city: response.data.city,
    date: new Date(response.data.time * 1000),
  });
  }

  if (weatherData.ready) {
    return (
    <div className="SearchEngine">
      <div className="Header">
        <header className="container">
          <button className="temp-unit-button">°F</button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a City"
              autoComplete="off"
              className="search-bar"
              onChange={handleChangeCity}
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
          <button className="geo-locale-button">
            <i className="bi bi-geo-alt-fill"></i>
          </button>
        </header>
      </div>
      <CurrentWeather data = {weatherData}/>
    </div>
  );
} else {
  const apiKey = "440461d4fbdf3d442aeb4ff32t4abo8a";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=imperial`
  axios.get(apiUrl).then(handleResponse);
  return <div>Loading...</div>
}
}