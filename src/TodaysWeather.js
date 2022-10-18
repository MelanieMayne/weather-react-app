import React from "react";

import "./TodaysWeather.css";

export default function TodaysWeather() {
  return (
    <div className="TodaysWeather">
      <div className="mainWeatherIcon">
        <i class="bi bi-sun-fill text-warning"></i>
      </div>
      <div>
        <ul>
          <li className="dateAndTime">September 16th, 2022 | 14:44</li>
          <li className="localeAndTemp">Long Beach, CA 75°C</li>
          <li className="highAndLow">H: 75° L: 60°</li>
        </ul>
      </div>
      <div className="extraForecastInfo">
        <ul>
          <li>Humidity: 30%</li>
          <li>Wind: 5mph</li>
        </ul>
      </div>
    </div>
  );
}