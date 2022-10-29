import React, { useState } from "react";
import axios from "axios";

import "./CurrentWeather.css";
import image from "./images/sun.png";

export default function CurrentWeather(props) {
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
  });
  }

  if (weatherData.ready) {
    return (
    <div className="CurrentWeather">
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
      <main className="container">
        <div className="row">
          <div className="col-3">
            <img
              src={image}
              alt="Weather Icon"
              className="img-fluid weather-icon"
            />
          </div>
          <div className="col-6">
            <ul>
              <li className="locale-and-temp">
                {weatherData.city} {Math.round(weatherData.temperature)}°F
              </li>
              <li className="date-and-time">September 21st, 2022 | 09:46</li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="extra-weather">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} else {
  const apiKey = "440461d4fbdf3d442aeb4ff32t4abo8a";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=imperial`
  axios.get(apiUrl).then(handleResponse);
  return <div>Loading...</div>
}
}