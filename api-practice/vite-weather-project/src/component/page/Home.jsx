import { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get("https://api.weatherapi.com/v1/current.json?key=API_KEY&q=Seoul")
      .then(res => setWeather(res.data))
      .catch(err => console.error(err));
  }, []);

  return weather ? <p>{weather.current.temp_c}°C</p> : <p>Loading...</p>;
}
