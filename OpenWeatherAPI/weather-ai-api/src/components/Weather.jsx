import { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=kr`
      );
      setData(response.data);
    } catch (err) {
      setError('도시를 찾을 수 없습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>🌤 날씨 검색기</h2>
      <input
        type="text"
        value={city}
        placeholder="도시 이름 입력"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>검색</button>

      {loading && <p>로딩 중...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>{data.weather[0].description}</p>
          <p>🌡 {data.main.temp}°C</p>
          <p>💧 습도: {data.main.humidity}%</p>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      )}
    </div>
  );
}

export default Weather;
