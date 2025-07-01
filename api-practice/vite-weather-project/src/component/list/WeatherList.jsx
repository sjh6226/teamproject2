import React from "react";
import WeatherListItem from "./WeatherListItem";

function WeatherList({ weathers, onClickItem }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {weathers.map((weather) => (
        <WeatherListItem
          key={weather.id}
          weather={weather}
          onClick={() => onClickItem(weather)}
        />
      ))}
    </div>
  );
}

export default WeatherList;
