import React from 'react';
import logo from '../../Assets/LOGO2.png'
import { Button } from "keep-react";

const Footer = () => {
  return (
    <div className=' lg:flex lg:flex-row lg:justify-center bg-white '>
      <div className="flex flex-col justify-center items-start mb-16 ml-40 md:mr-40 ">
        <img className='w-44 lg:w-60 h-15 ml-24 lg:ml-0' src={logo} alt="Footer image" />
        <h1 className='text-start lg:text-3xl mt-2'>Some Heading</h1>
        <p className='text-start mt-2 md:text-2xl max-w-96'>We are already working with teams that want to hire the best engineers</p>
        <Button size="md" className='bg-transparent border-2 text-black mt-3 w-96'>Signup to continue</Button>
      </div>
      <div className=" ml-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:mt-20 lg:mb-12">
          <ul className='md:p-10 space-y-2 '>
            <span className='text-bold text-2xl '>1</span>
            <li className='md:text-2xl  '>Home</li>
            <li className='md:text-2xl '>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
          </ul>
          <ul className='md:p-10 space-y-2'>
            <span className='text-bold text-2xl'>2</span>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
          </ul>
          <ul className='md:p-10 space-y-2'>
            <span className='text-bold text-2xl'>3</span>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
          </ul>
          <ul className='md:p-10 space-y-2'>
            <span className='text-bold text-2xl'>4</span>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
          </ul>
          <ul className='md:p-10 space-y-2'>
            <span className='text-bold text-2xl'>5</span>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
          </ul>
          <ul className='md:p-10 space-y-2'>
            <span className='text-bold text-2xl'>6</span>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
            <li className='md:text-2xl'>Home</li>
          </ul>
        <span className='mt-5'>Made with -- in India @2024, PROTUT</span>
        </div>
      </div>
  );
}

export default Footer;
