import React from 'react';

const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-semibold">To-do App</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">This was initial project of Web-dev, in which i learn about
            using local storage that will store to do's and we can also delete them once they are completed.
          </p>
          <a 
            href="https://github.com/ashishkj23/CodeCraft_WD_ass1_-Ashish-Kumar-Jha-" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-md"
          >
            View on GitHub
          </a>
        </div>
        <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-semibold">SuperHero Stats</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">I created this project
            with my basic knowledge of react. It uses data fetching to get superhero image and details on user search. 
          </p>
          <a 
            href="https://github.com/ashishkj23/SuperHero-Details" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-md"
          >
            View on GitHub
          </a>
        </div>
        <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-semibold">Voice-Morph-Companion</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400"> The goal of this project was to 
            build a chatbot that can take voice command like basic conversatio and respond.     
          </p>
          <a 
            href="https://github.com/yourusername/project3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-md"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;


