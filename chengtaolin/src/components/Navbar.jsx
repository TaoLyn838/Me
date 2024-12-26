import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState(location.pathname)

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location.pathname])

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto">
        <div className="px-4 md:px-0 flex justify-between items-center">
          <h2 className="flex-none rounded-md text-xl inline-block font-semibold">
            Chengtao Lin
          </h2>
        </div>
        <div className="hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block">
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
            {[
              { href: '/', label: 'Home' },
              { href: '/projects', label: 'Projects' },
              { href: '/blogs', label: 'Blogs' },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 font-medium focus:outline-none transition-all duration-300 ${
                  activeLink === link.href
                    ? 'md:border-b-2 border-gray-800 text-gray-800'
                    : 'md:border-b-0 hover:border-b-2 hover:border-gray-400 text-gray-500 hover:text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
