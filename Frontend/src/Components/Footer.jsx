 import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-2 md:mb-0">
          © {new Date().getFullYear()} ZOOCO. All rights reserved.
        </p>
        <div className="flex space-x-4 text-sm">
          <a href="/privacy" className="hover:text-accent transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-accent transition">Terms of Service</a>
          <a href="/contact" className="hover:text-accent transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
