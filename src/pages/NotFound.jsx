import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='text-center py-20'>
      <h1 className='text-5xl font-bold text-slate-800'>
        404
      </h1>

      <p className='mt-4 text-slate-600'>
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to={'/'}
        className='inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'
      >
        Go Home
      </Link>
    </section>
  )
}

export default NotFound