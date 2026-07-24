import PropTypes from 'prop-types'

const Error = ({ message }) => {
  return (
    <div className='max-w-md mx-auto mt-8 rounded-lg bg-red-100 p-4 text-center'>
        <p className='text-red-600 font-medium'>
            {message}
        </p>
    </div>
  )
}

Error.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Error