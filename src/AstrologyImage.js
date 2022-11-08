import React from "react";
import AriesImage from "./images/aries.png";
import TaurusImage from "./images/taurus.png";
import GeminiImage from "./images/gemini.png";
import CancerImage from "./images/cancer.png";
import LeoImage from "./images/leo.png";
import VirgoImage from "./images/virgo.png";
import LibraImage from "./images/libra.png";
import ScorpioImage from "./images/scorpio.png";
import SagittariusImage from "./images/sagittarius.png";
import CapricornImage from "./images/capricorn.png";
import AquariusImage from "./images/aquarius.png";
import PiscesImage from "./images/pisces.png";

export default function AstrologyImage(props) {
  if (props.season === "aries") {
    return (
      <img src={AriesImage} alt="aries" className="img-fluid zodiac-icon" />
    );
  } else if (props.season === "taurus") {
    return (
      <img src={TaurusImage} alt="taurus" className="img-fluid zodiac-icon" />
    );
  } else if (props.season === "gemini") {
    return (
      <img src={GeminiImage} alt="gemini" className="img-fluid zodiac-icon" />
    );
  } else if (props.season === "cancer") {
    return (
      <img src={CancerImage} alt="cancer" className="img-fluid zodiac-icon" />
    );
  } else if (props.season === "leo") {
    return <img src={LeoImage} alt="leo" className="img-fluid zodiac-icon" />;
  } else if (props.season === "virgo") {
    return (
      <img src={VirgoImage} alt="virgo" className="img-fluid zodiac-icon" />
    );
  } else if (props.season === "libra") {
    return (
      <img src={LibraImage} alt="libra" className="img-fluid zodiac-icon" />
    );
  } else if (props.season === "scorpio") {
    return (
      <img src={ScorpioImage} alt="scorpio" className="img-fluid zodiac-icon" />
    );
  } else if (props.season === "sagittarius") {
    return (
      <img
        src={SagittariusImage}
        alt="sagittarius"
        className="img-fluid zodiac-icon"
      />
    );
  } else if (props.season === "capricorn") {
    return (
      <img
        src={CapricornImage}
        alt="capricorn"
        className="img-fluid zodiac-icon"
      />
    );
  } else if (props.season === "aquarius") {
    return (
      <img
        src={AquariusImage}
        alt="aquarius"
        className="img-fluid zodiac-icon"
      />
    );
  } else if (props.season === "pisces") {
    return (
      <img src={PiscesImage} alt="pisces" className="img-fluid zodiac-icon" />
    );
  } else {
    return null;
  }
}