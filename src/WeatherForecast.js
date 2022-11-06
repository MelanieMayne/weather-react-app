import React, { useState, useEffect } from "react";
import FormatForecastData from "./FormatForecastData";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    const [ready, setReady] = useState(false);
    const [forecast, setForecast] = useState("");

    useEffect(() => {
        setReady(false)
    }, [props.city]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setReady(true);
    }
    if(ready) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index !== 0) {
                            if (index <=5) {
                                return (
                                    <div className="col" key={index}>
                                        <FormatForecastData forecastData={dailyForecast}/>
                                    </div>           
                                    );
                                }
                            }     
                        }
                    ,)}    
                </div>
            </div>        
        );
    } else {
        let apiKey = "440461d4fbdf3d442aeb4ff32t4abo8a";
        let city = props.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`
    
        axios.get(apiUrl).then(handleResponse);
        return null;
    } 
}