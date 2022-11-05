import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function FormatForecastData(props) {
    function maxTemp() {
        let temp = Math.round(props.forecastData.temperature.maximum);
        return `${temp}°`
    }
    function minTemp() {
        let temp = Math.round(props.forecastData.temperature.minimum);
        return `${temp}°`
    }
    function day() {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let date = new Date(props.forecastData.time * 1000);
        let day = days[date.getDay()];
        return day;
    }
    return (
        <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <ul>
                            <li className="day">{day()}</li>
                            <li><WeatherIcon icon={props.forecastData.condition.icon} size={40}/></li>
                            <li className="high-low-temp">H: {maxTemp()} | L: {minTemp()}</li>
                        </ul>
                    </div>
                </div>        
            </div>
    );
}