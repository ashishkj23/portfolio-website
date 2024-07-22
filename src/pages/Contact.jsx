import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <form className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-gray-700 dark:text-gray-200" htmlFor="name">Name:</label>
          <input
            className="w-full px-3 py-2 mt-1 border rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-200" htmlFor="email">Email:</label>
          <input
            className="w-full px-3 py-2 mt-1 border rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-200" htmlFor="message">Message:</label>
          <textarea
            className="w-full px-3 py-2 mt-1 border rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white"
            id="message"
            name="message"
            rows="4"
          ></textarea>
        </div>
        <button className="px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-md" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

