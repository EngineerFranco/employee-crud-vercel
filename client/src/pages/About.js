import React from 'react';

function About() {
  return (
    <section className="flex flex-col justify-center items-center text-center mx-5 mt-16 ">
    <div className="max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200 ">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">About Our Employee Management System</h1>
      <p className="text-base sm:text-lg mb-6">
        Welcome to the Employee Management System, a simple and efficient tool for managing employee data within your organization. Our CRUD (Create, Read, Update, Delete) application allows you to easily keep track of employee details, update their records, and ensure data accuracy.
      </p>
      <div className='flex flex-col'>
        <h2 className="text-lg sm:text-xl font-semibold mb-2 mt-10 mr-auto">Key Features</h2>
        <ul className="list-disc list-inside mb-6 text-left mx-auto">
          <li>Create new employee profiles</li>
          <li>View detailed employee information</li>
          <li>Update employee details as needed</li>
          <li>Delete records when employees leave the company</li>
        </ul>
      </div>
      <p className="text-base sm:text-medium font-light  mt-16">
        Our goal is to provide a streamlined and user-friendly interface to help HR teams manage employee data efficiently. Feel free to explore the features and see how it can simplify your day-to-day tasks.
      </p>
    </div>
  </section>
  
  );
}

export default About;
