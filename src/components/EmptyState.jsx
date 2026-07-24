
const EmptyState = () => {
  return (
    <div className="max-w-md mx-auto mt-10 rounded-lg border-2 border-dashed border-slate-300 p-8 text-center">
        <h2 className="text-xl font-semibold text-slate-700">
            No Weather Data
        </h2>

        <p className="mt-2 text-slate-500">
            Search for a city to view its current weather.
        </p>
    </div>
  )
}

export default EmptyState