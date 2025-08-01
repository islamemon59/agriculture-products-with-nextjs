import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#001f4c] text-white py-10 md:py-12 lg:py-14"> {/* Reduced vertical padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"> {/* Reduced gap between columns */}
          {/* Join Our JF Products */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Join Our JF Products</h3> {/* Smaller heading */}
            <p className="text-gray-300 text-sm mb-4">We'll tell you about store updates and discounts</p> {/* Smaller text */}
            <div className="flex flex-col space-y-3"> {/* Reduced space */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2.5 rounded-md bg-[#001f4c] border border-gray-600 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" // Smaller padding and text
              />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="subscribe" className="form-checkbox text-blue-500 rounded text-sm" />
                <label htmlFor="subscribe" className="text-gray-300 text-sm">Yes, subscribe me to your newsletter.</label> {/* Smaller text */}
              </div>
              <button className="w-full bg-white text-[#001f4c] py-2.5 rounded-md font-semibold text-sm hover:bg-gray-100 transition duration-300"> {/* Smaller padding and text */}
                Join Now
              </button>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Information</h3> {/* Smaller heading */}
            <ul className="space-y-2"> {/* Reduced space */}
              <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition duration-300">Shop</Link></li>
              <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition duration-300">Our Story</Link></li>
              <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition duration-300">Blogs</Link></li>
              <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Helpful */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Helpful</h3> {/* Smaller heading */}
            <ul className="space-y-2"> {/* Reduced space */}
              <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition duration-300">FAQs</Link></li>
              <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition duration-300">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition duration-300">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition duration-300">Shipping Policy</Link></li>
              <li><Link href="#" className="text-gray-300 text-sm hover:text-white transition duration-300">My Account</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8 md:my-10" /> {/* Reduced vertical margin */}

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"> {/* Reduced space */}
          {/* Logo and Branches */}
          <div className="flex items-center space-x-3"> {/* Reduced space */}
            <div className='relative bg-white p-4 rounded-[77px]'>
                <img src="https://i.ibb.co/Kjrghnrv/Frame-5.png" alt="JF Products Logo" className="h-28 w-22 indent-0  object-cover" />
                </div> {/* Adjusted size and added object-contain */}
            <div>
              <p className="text-base font-semibold">Our Branches</p> {/* Smaller text */}
              <p className="text-gray-300 text-sm">Coimbatore, Chennai, Hyderabad, Goa, Kochi</p> {/* Smaller text */}
            </div>
          </div>

          {/* Contact Us Button */}
          <div>
            <button className="bg-[#b3ff00] text-[#001f4c] py-2.5 px-6 rounded-md font-semibold text-sm hover:bg-[#a0eb00] transition duration-300"> {/* Smaller padding and text */}
              Contact Us
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-10 text-center text-gray-400 text-sm"> {/* Reduced vertical margin and smaller text */}
          <p>Copyright © 2025 JF Products. All rights reserved</p>
        </div>

        {/* Social Icons - Positioned at bottom right as per image */}
        <div className="flex justify-center md:justify-end mt-6 space-x-3"> {/* Reduced vertical margin and space */}
          <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaFacebookF size={20} /> {/* Smaller icon size */}
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaInstagram size={20} /> {/* Smaller icon size */}
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaYoutube size={20} /> {/* Smaller icon size */}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;