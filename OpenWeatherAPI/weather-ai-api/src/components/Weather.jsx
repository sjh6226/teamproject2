// src/components/Weather.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const SERVICE_KEY = import.meta.env.VITE_KMA_API_KEY;
      const url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst';

      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      const baseDate = `${yyyy}${mm}${dd}`;

      const baseTime = '0600'; // 또는 시간에 따라 계산 가능 (추후 개선 가능)

      const params = {
        serviceKey: SERVICE_KEY,
        pageNo: 1,
        numOfRows: 1000,
        dataType: 'JSON',
        base_date: baseDate,
        base_time: baseTime,
        nx: 60,
        ny: 121
      };

      try {
        const res = await axios.get(url, { params });
        const items = res.data.response.body.items.item;
        setWeather(items);
      } catch (err) {
        setError('날씨 정보를 불러오지 못했어요 😥');
        console.error(err);
      }
    };

    fetchWeather();
  }, []);

  if (error) return <p>{error}</p>;
  if (!weather) return <p>로딩 중...</p>;

  return (
    <div>
      <h2>📍 수원시 팔달구 초단기 실황</h2>
      <ul>
        {weather.map((item, index) => (
          <li key={index}>
            {item.category}: {item.obsrValue}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Weather;
