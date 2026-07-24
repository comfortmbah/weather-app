import SearchForm from "../components/SearchForm"
import PageTitle from "../components/PageTitle"
import WeatherCard from "../components/WeatherCard"

const Home = () => {
  return (
    <>
      <PageTitle
        title={"Weather Forecast"}
        subtitle={"Search for any city around the world and view its current weather conditions."}
      />

      <SearchForm />

      <WeatherCard 
        city={'Lagos'}
        country={'Nigeia'}
        temperature={29}
        description={'Clear Sky'}
        humidity={82}
        windSpeed={15}
      />
    </>
  )
}

export default Home