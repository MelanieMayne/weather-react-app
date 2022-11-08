import React, { useState } from "react";
import AstrologyImage from "./AstrologyImage";
import sunSign from "sun-sign";
import zodiacimage from "./images/scorpio.png";

import "./AstrologySeason.css";

export default function AstrologySeason(props) { 
    let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let month = months[props.date.getMonth()];
    let day = props.date.getDate();
    const [season, setSeason] = useState("");
    const [ready, setReady] = useState(false);
  
    function seasonChange() {
        setSeason(sunSign(month, day).sign);
        setReady(true);
    }

    if (ready) {
        return (
            <div className="AstrologySeason">
                <span className="astro-banner container">
                    <AstrologyImage season={season}/>
                    <p className="text-capitalize season-title">{season} Season</p>
                </span>
            </div>
        )
    } else {
        seasonChange();
    }
}