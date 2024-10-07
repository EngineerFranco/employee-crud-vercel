import React from 'react'
import { FaAddressBook } from "react-icons/fa";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='bg-gray-100 shadow-black/20 shadow-md w-full flex justify-center h-10 items-center cursor-pointer text-gray-700 font-medium'>
  
      <div className='flex justify-center items-center p-5 gap-2'>
        <h1 className='uppercase font-medium text-xl text-gray-700 mx-auto cursor-pointer tracking-widest'>
          Records
        </h1>
        <FaAddressBook className='text-blue-500 text-2xl' />
      </div>
      
      <nav className='ml-auto p-5'>
        <ul className='flex justify-center items-center gap-5 font-normal '>
        <Link to={"/"}>
          <li className='cursor-pointer'>Home</li>
          </Link>
          <Link to={"/about"}>
          <li className='cursor-pointer'>About</li>
          </Link>
          <Link to={"/employee"}>
          <li className='cursor-pointer'>Employee</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header