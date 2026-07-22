

const SearchForm = () => {
  return (
    <form className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
        <input 
          type="text"
          placeholder="Enter city name..."
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

export default SearchForm