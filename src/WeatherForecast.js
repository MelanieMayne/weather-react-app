import React, { useState } from "react";
import FormatForecastData from "./FormatForecastData";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast() {
    const [ready, setReady] = useState(false);
    const [forecast, setForecast] = useState("");

    function handleResponse(response) {
        setForecast(response.data.daily);
        setReady(true);
    }
    if(ready) {
        return (
           <FormatForecastData forecastData={forecast[1]}/>
        );
    } else {
        let apiKey = "440461d4fbdf3d442aeb4ff32t4abo8a";
        let city = "Long Beach";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`
    
        axios.get(apiUrl).then(handleResponse);
        return null;
  } 
}