import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="flex flex-col justify-center items-center text-center mx-5 mt-16 ">
      <div className="max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200">
        <h1 className="text-2xl sm:text-3xl  font-bold mb-10 text-gray-800 ">Welcome to Employee Management System</h1>
        <p className="text-lg text-gray-700 mb-6">
          Manage your employee records efficiently with our simple  <span className='font-semibold'>CRUD application</span>.
         
        </p>
        <Link to={"/employee"}>
        <button className="bg-blue-400 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-500 transition duration-200 mt-10 ">
          <span className='text-lg'>View Employees</span>
        </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
