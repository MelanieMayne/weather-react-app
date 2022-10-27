import React from "react";

import "./CurrentWeather.css";
import image from "./images/sun.png";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="Header">
        <header className="container">
          <button className="temp-unit-button">°F</button>
          <form>
            <input
              type="text"
              placeholder="Enter a City"
              autoComplete="off"
              className="search-bar"
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
              <li className="date-and-time">September 21st, 2022 | 09:46</li>
              <li className="locale-and-temp">
                Long Beach, <small>CA</small> 71°F
              </li>
              <li className="high-and-low">H: 80° | L: 60°</li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="extra-weather">
              <li>Humidity: 30%</li>
              <li>Wind: 7 mph</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}