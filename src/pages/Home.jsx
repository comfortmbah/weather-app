import SearchForm from "../components/SearchForm"
import PageTitle from "../components/PageTitle"
import WeatherCard from "../components/WeatherCard"
import Loader from '../components/Loader'
import Error from '../components/Error'
import EmptyState from '../components/EmptyState'
import useWeather from "../hooks/useWeather"  
import { useState } from "react"

const Home = () => {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const { weatherData, loading, error } = useWeather(searchCity);

  function handleSubmit(e) {
    e.preventDefault();

    if (!city.trim()) return;

    setSearchCity(city);
  }

  return (
    <>
      <PageTitle
        title={"Weather Forecast"}
        subtitle={"Search for any city around the world and view its current weather conditions."}
      />

      <SearchForm 
        city={city}
        onCityChange={(e) => setCity(e.target.value)}
        onSearch={handleSubmit}
      />

      {loading && <Loader />}

      {error && <Error message={error} />}

      {!loading && !error && !weatherData && <EmptyState />}

      {weatherData && (
        <WeatherCard 
          city={weatherData.name}
          country={weatherData.sys.country}
          temperature={weatherData.main.temp}
          description={weatherData.weatherData[0].description}
          humidity={weatherData.main.humidity}
          windSpeed={weatherData.wind.speed}
        />
      )}
    </>
  )
}

export default Home