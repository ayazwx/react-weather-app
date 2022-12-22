import React from "react";

import "./CityWeather.css";

const CityWeather = ({ weather }) => {
  return (
      <div className="content">
        <h1>{weather.name}</h1>
        <div>Tempature: {weather.main.temp} °C</div>
        <h4 >{weather.weather[0].main}</h4>
      </div>
  );
};

export default CityWeather;
