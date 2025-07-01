import React from "react";

function WeatherListItem({ weather, onClick }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 16,
        cursor: "pointer",
        background: "#fff",
      }}
      onClick={onClick}
    >
      <strong>{weather.location}</strong>
      <div>{weather.summary}</div>
    </div>
  );
}

export default WeatherListItem;
