import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" to="/">Home</Link>
          <Link className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" to="/projects">Projects</Link>
          <Link className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" to="/contact">Contact Me</Link>
          <Link className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" to="/about">About Me</Link>
        </div>
        <button 
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-md"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
