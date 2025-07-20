import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800 py-4 mb-8">
      <div className="flex flex-row gap-8 justify-center">
        <NavLink
          to="/"
          className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition"
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition"
        >
          Pastes
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
