import React from "react";
import FormattedDate from "./FormattedDate";

import "./CurrentWeather.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
    return <div className="CurrentWeather">
        <main className="container">
        <div className="row">
          <div className="col-3">
            <WeatherIcon icon={props.data.icon} size={70}/>
          </div>
          <div className="col-6">
            <ul>
              <li className="locale-and-temp">
                <span>{props.data.city} {Math.round(props.data.temperature)}°<span className="unit">F</span></span>
              </li>
              <li className="date-and-time">
                <FormattedDate date={props.data.date}/>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="extra-weather">
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
        </div>
      </main>
    </div>;
}