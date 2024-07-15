import React, { useState } from "react";
import "./WeatherDetails.css";
import { FaWind } from "react-icons/fa6";
import clearIcon from "../Assets/clear.png";
import cloudIcon from "../Assets/cloud.png";
import drizzleIcon from "../Assets/drizzle.png";
import rainIcon from "../Assets/rain.png";
import snowIcon from "../Assets/snow.png";
import humidityIcon from "../Assets/humidity.png";

const WeatherDetails = ({
  icon,
  temp,
  city,
  country,
  lat,
  long,
  humidity,
  wind
}) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt={icon} />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="cordinates">
        <div>
          <span className="latitude">latitude </span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="longitude">longitude </span>
          <span>{long}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="humidity" className="icon" />
          <div className="data">
            <div className="humidity-percentage">{humidity}%</div>
            <div className="humidity">Humidity</div>
          </div>
        </div>
        <div className="element">
          <FaWind className="icon" />
          <div className="data">
            <div className="windspeed">{wind} km/h</div>
            <div className="wind">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
