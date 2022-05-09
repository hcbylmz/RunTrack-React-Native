import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function useAxios({lat, lon}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,
            hourly,
            daily,
            alerts&appid="YOUR_API_KEY"`,
        );
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    }

    fetchWeather();
    setIsLoading(false);
  }, [lat, lon]);

  return {data, error, isLoading};
}
