 import React, { useState } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">
          🐾 ZOOCO
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li className="hover:text-accent transition"><a href="/">Home</a></li>
          <li className="hover:text-accent transition"><NavLink to="/add">Add Reminder</NavLink></li>
          <li className="hover:text-accent transition"><NavLink to="/complete">Completed</NavLink></li>
        </ul>

        {/* Right-side Icon */}
        <div className="hidden md:block">
          <FaUserCircle size={28} className="cursor-pointer hover:text-accent transition" />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 bg-primary text-white space-y-3">
          <NavLink to="/" className="block hover:text-accent">Home</NavLink>
          <NavLink to="/add" className="block hover:text-accent">Add Reminder</NavLink>
          <NavLink to="/complete" className="block hover:text-accent">Completed</NavLink>
          <div className="pt-2 border-t border-white">
            <FaUserCircle size={24} className="inline mr-2" /> Profile
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
