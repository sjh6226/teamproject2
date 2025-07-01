import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function WeatherDetailPage() {
  const { locationId } = useParams();
  const navigate = useNavigate();

  // 샘플 데이터 (API 연동 전)
  const weatherDetail = {
    1: { location: "서울", detail: "맑음, 25°C, 습도 40%" },
    2: { location: "부산", detail: "흐림, 22°C, 습도 60%" },
    3: { location: "대구", detail: "비, 20°C, 습도 80%" },
  }[locationId];

  if (!weatherDetail) return <div>날씨 정보를 찾을 수 없습니다.</div>;

  return (
    <div style={{ padding: 16, maxWidth: 720, margin: "0 auto" }}>
      <button onClick={() => navigate("/")}>뒤로가기</button>
      <h2>{weatherDetail.location} 상세 날씨</h2>
      <p>{weatherDetail.detail}</p>
    </div>
  );
}

export default WeatherDetailPage;
