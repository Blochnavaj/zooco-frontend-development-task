import React from 'react';
import herosection from '../assets/herosection.jpg';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-bg py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Daily Pet Care Made Easy 🐶
          </h1>
          <p className="text-lg text-secondary mb-6">
            Stay on top of your furry friend's care routines with smart, intuitive reminders.
          </p>
          <NavLink
            to="/add"
            className="inline-block bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            Add Your First Reminder
          </NavLink>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img src={herosection} alt="Pet care reminder" className="w-4/5 max-w-sm" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
