import React, { useState } from "react";
import sunSign from "sun-sign";
import zodiacimage from "./images/scorpio.png";

import "./AstrologySeason.css";

export default function AstrologySeason(props) { 
    const month = props.month;
    const day = props.day;
    const [season, setSeason] = useState("");
    const [ready, setReady] = useState(false);

    function seasonChange() {
        setSeason(sunSign(month,day).sign);
        setReady(true);
    }

    if (ready) {
        return (
            <div className="AstrologySeason">
                <span className="astro-banner container">
                    <img
                        src={zodiacimage}
                        alt="libra"
                        className="img-fluid zodiac-icon"
                    />
                    <p className="text-capitalize">{season} Season</p>
                    <img
                        src={zodiacimage}
                        alt="libra"
                        className="img-fluid zodiac-icon right-side"
                    />
                </span>
            </div>
        )
    } else {
        seasonChange();
    }
}