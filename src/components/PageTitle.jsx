import PropTypes from 'prop-types'

const PageTitle = ({ title, subtitle }) => {
  return (
    <section className='text-center mb-10'>
        <h1 className='text-4xl font-bold text-slate-800'>
            {title}
        </h1>

        <p className='mt-3 text-slate-600 max-w-2xl mx-auto'>
            {subtitle}
        </p>
    </section>
  )
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default PageTitle