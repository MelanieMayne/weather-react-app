import React, { useState } from "react";

import "./TempConversion.css"

export default function TempConversion(props) {
    const [unit, setUnit] = useState("Fahrenheit");

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("Celsius");
    }

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("Fahrenheit");
    }

    function celsius() {
        return ((props.fahrenheit - 32) * 5) / 9;
    }
    if (unit === "Fahrenheit") {
        return (
            <div className="TempConversion">
                <span>{Math.round(props.fahrenheit)}</span>
                <span><a href="/" className="temp-unit" onClick={convertToCelsius}>°F</a></span>
            </div>
        )
    } else {
        return (
            <div className="TempConversion">
                <span>{Math.round(celsius())}</span>
                <span><a href="/" className="temp-unit" onClick={convertToFahrenheit}>°C</a></span>
            </div>
        )
    }
}