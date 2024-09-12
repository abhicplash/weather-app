import React, { useEffect, useState } from "react";
import "./Weather.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import WeatherDetails from "./WeatherDetails";
import { apiKey } from "../utils/common";

function Weather() {
  const [icon, setIcon] = useState(
    "https://openweathermap.org/img/wn/02n@2x.png"
  );
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Bangalore");
  const [country, setCountry] = useState("IN");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWindspeed] = useState(0);

  const [text, setText] = useState("Bangalore");

  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    setLoading(true);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=metric`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      // console.log(data);
      // ------------------------------------------------------------
      // cod ==="404" was added to all data so if condtion wont work
      // if ((data.cod = "404")) {
      //   console.log("City not Found");
      //   setLoading(true);
      //   setCityNotFound(true);
      // }
      // ------------------------------------------------------------
      setHumidity(data.main.humidity);
      setCity(data.name);
      setWindspeed(data.wind.speed);
      setLat(data.coord.lat);
      setLong(data.coord.lon);
      setTemp(Math.floor(data.main.temp));
      setCountry(data.sys.country);
      setIcon(
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
    } catch (error) {
      console.error("An Error Found", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCity = (e) => {
    setText(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  useEffect(() => {
    search();
  }, []);
  return (
    <>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            className="cityInput"
            placeholder="Search Your City"
            onChange={handleCity}
            value={text}
            onKeyDown={handleKeyDown}
          />
          <div
            className="search-icon"
            onClick={() => {
              search();
            }}
          >
            <FaMagnifyingGlass />
          </div>
        </div>
        <WeatherDetails
          icon={icon}
          temp={temp}
          city={city}
          country={country}
          lat={lat}
          long={long}
          humidity={humidity}
          wind={wind}
        />
      </div>
    </>
  );
}

export default Weather;
