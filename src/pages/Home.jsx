import SearchForm from "../components/SearchForm"
import PageTitle from "../components/PageTitle"

const Home = () => {
  return (
    <>
      <PageTitle
        title={"Weather Forecast"}
        subtitle={"Search for any city around the world and view its current weather conditions."}
      />

      <SearchForm />
    </>
  )
}

export default Home