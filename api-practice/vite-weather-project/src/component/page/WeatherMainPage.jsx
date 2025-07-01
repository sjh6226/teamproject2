import React from "react";
import { useNavigate } from "react-router-dom";
import WeatherList from "../list/WeatherList";

function WeatherMainPage() {
  const navigate = useNavigate();

  // 샘플 데이터 (API 연동 전)
  const weatherList = [
    { id: 1, location: "서울", summary: "맑음, 25°C" },
    { id: 2, location: "부산", summary: "흐림, 22°C" },
    { id: 3, location: "대구", summary: "비, 20°C" },
  ];

  return (
    <div style={{ padding: 16, maxWidth: 720, margin: "0 auto" }}>
      <h1>지역별 날씨 정보</h1>
      <WeatherList
        weathers={weatherList}
        onClickItem={(item) => navigate(`/weather/${item.id}`)}
      />
    </div>
  );
}

export default WeatherMainPage;
