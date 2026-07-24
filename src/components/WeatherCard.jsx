import PropTypes from 'prop-types'

const WeatherCard = ({ city, country, temperature, description, humidity, windSpeed }) => {
  return (
    <section className='max-w-md mx-auto mt-10 rounded-xl bg-white p-6 shadow-md'>
        <h2 className='text-2xl font-bold text-slate-800'>
            {city}, {country}
        </h2>

        <p className='mt-2 text-slate-500 capitalize'>
            {description}
        </p>

        <h3 className='mt-6 text-5xl font-bold text-blue-600'>
            {temperature}C
        </h3>

        <div className='flex justify-between mt-6 text-slate-600'>
            <div>
                <p className='font-semibold'>
                    Humidity
                </p>
                <p>
                    {humidity}%
                </p>
            </div>

            <div>
                <p className='font-semibold'>
                    Wind
                </p>
                <p>
                    {windSpeed} km/h
                </p>
            </div>
        </div>
    </section>
  )
}

WeatherCard.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
};

export default WeatherCard