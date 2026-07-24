import { useState, useEffect } from "react";
import { fetchWeatherData } from "../services/weatherApi";

const useWeather = (city) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchWeatherData(city);
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      getWeatherData();
    }
  }, [city]);

  return { weatherData, loading, error };
};

export default useWeather;