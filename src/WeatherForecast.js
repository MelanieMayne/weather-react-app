import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <ul>
                        <li className="day">Sunday</li>
                        <li><WeatherIcon icon="few-clouds-day" size={40}/></li>
                        <li className="high-low-temp">H: 69° | L: 50°</li>
                    </ul>
                </div>
            </div>        
        </div>
    );
}