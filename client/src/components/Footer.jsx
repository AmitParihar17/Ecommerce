import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-[90%] mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* LOGO + ABOUT */}
        <div className="max-w-md">
          <Link to="/">
            <img className="w-32 mb-3" src={assets.logo} alt="Forever logo" />
          </Link>
          <p className="text-base text-gray-700">
            Forever is built on timeless style and everyday comfort. We create
            thoughtfully designed pieces that stay relevant beyond trends— made
            to be worn, loved, and lived in forever.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h2 className="text-lg font-medium mb-2">COMPANY</h2>
          <ul className="flex flex-col gap-1 text-gray-700">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/collection">Collections</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-lg font-medium mb-2">GET IN TOUCH</h2>
          <p className="text-gray-700">+1-212-456-7890</p>
          <p className="text-gray-700">amitparihar1208@gmail.com</p>
        </div>
      </div>
      <hr className='my-2' />
      <p className='text-gray-700 text-center py-2'>Copyright 2024 © AmitParihar.dev - All Right Reserved.</p>
    </div>
  );
}

export default Footer
