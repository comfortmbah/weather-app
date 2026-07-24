import { useState, useEffect } from "react";
import { fetchWeatherData } from "../services/weatherApi";

const useWeather = (city) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchWeatherData(city);
        setWeather(data);
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

  return { weather, loading, error };
};

export default useWeather;