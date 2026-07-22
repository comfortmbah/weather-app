import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const activeLink = ({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-slate-700 hover:text-blue-600";

  return (
    <header className='bg-white shadow'>
        <nav className='container mx-auto flex items-center justify-between px-4 py-4'>
            <h1 className='text-2xl font-bold text-blue-600'>
              Weather App
            </h1>

            <div className='flex gap-6'>
                <NavLink
                  to={'/'}
                  className={activeLink}
                >
                  Home
                </NavLink>

                <NavLink
                  to={'/about'}
                  className={activeLink}
                >
                  About
                </NavLink>
            </div>
        </nav>
    </header>
  )
}

export default Navbar