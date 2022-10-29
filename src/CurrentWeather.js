import React from "react";
import FormattedDate from "./FormattedDate";
import image from "./images/sun.png";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
    return <div className="CurrentWeather">
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
                {props.data.city} {Math.round(props.data.temperature)}°F
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