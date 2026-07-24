import PropTypes from 'prop-types'

const SearchForm = ({ city, onCityChange, onSearch }) => {
  return (
    <form
      onSubmit={onSearch}
      className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4"
    >
      <input 
        type="text"
        value={city}
        placeholder="Enter city name..."
        onChange={onCityChange}
        className="flex-1 border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
    </form>
  )
}

SearchForm.propTypes = {
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm