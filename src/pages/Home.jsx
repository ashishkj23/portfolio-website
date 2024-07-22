import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import portfolioImage from './portfolio-image.jpg';

const Home = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="relative mb-6">
        <img 
          src=  {portfolioImage}
          alt="Profile" 
          className="w-32 h-32 rounded-full border-4 border-gray-300 dark:border-gray-700"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-center">
        Hello! I am <br></br> <strong>Ashish Kumar Jha</strong>,<br></br> 
        <h1 className="text-4xl font-bold mb-4">Frontend Developer</h1><br></br> Explore my projects and get to know more about me.
      </p>
      <div className="mt-6 flex space-x-4">
        <a 
          href="https://github.com/ashishkj23" 
          className="group relative"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon 
            icon={faGithub} 
            className="text-2xl text-gray-700 dark:text-gray-300 transition-transform transform group-hover:scale-110"
          />
          <span className="absolute left-0 w-0 overflow-hidden whitespace-nowrap transition-all duration-200 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 rounded-lg group-hover:w-auto group-hover:px-2 ml-8 -top-1/2"></span>
        </a>
        <a 
          href="https://www.linkedin.com/in/ashish-jha-490889285/" 
          className="group relative"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon 
            icon={faLinkedin} 
            className="text-2xl text-gray-700 dark:text-gray-300 transition-transform transform group-hover:scale-110"
          />
          <span className="absolute left-0 w-0 overflow-hidden whitespace-nowrap transition-all duration-200 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 rounded-lg group-hover:w-auto group-hover:px-2 ml-8 -top-1/2"></span>
        </a>
        <a 
          href="mailto:aashishkrjha21@gmail.com" 
          className="group relative"
        >
          <FontAwesomeIcon 
            icon={faEnvelope} 
            className="text-2xl text-gray-700 dark:text-gray-300 transition-transform transform group-hover:scale-110"
          />
          <span className="absolute left-0 w-0 overflow-hidden whitespace-nowrap transition-all duration-200 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 rounded-lg group-hover:w-auto group-hover:px-2 ml-8 -top-1/2"></span>
        </a>
      </div>
    </div>
  );
};

export default Home;

