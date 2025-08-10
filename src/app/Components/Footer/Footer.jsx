import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001f4c] text-white py-10 md:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-3">Join Our JF Products</h3>
            <p className="text-gray-300 text-sm mb-4">
              We'll tell you about store updates and discounts
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2.5 rounded-md bg-[#001f4c] border border-gray-600 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="subscribe"
                  className="form-checkbox text-blue-500 rounded text-sm"
                />
                <label htmlFor="subscribe" className="text-gray-300 text-sm">
                  Yes, subscribe me to your newsletter.
                </label>
              </div>
              <button className="w-full my-button">
                Join Now
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition duration-300"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition duration-300"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition duration-300"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Helpful</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition duration-300"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition duration-300"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition duration-300"
                >
                  My Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-t border-gray-700 my-8 md:my-10" />
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="relative bg-white p-4 rounded-[77px]">
              <img
                src="https://i.ibb.co/Kjrghnrv/Frame-5.png"
                alt="JF Products Logo"
                className="h-28 w-22 indent-0  object-cover"
              />
            </div>
            <div>
              <p className="text-base font-semibold">Our Branches</p>
              <p className="text-gray-300 text-sm">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
            </div>
          </div>
          <div>
            <button className="my-button">Contact Us</button>
          </div>
        </div>
        <div className="mt-8 md:mt-10 text-center text-gray-400 text-sm">
          <p>Copyright © 2025 JF Products. All rights reserved</p>
        </div>
        <div className="flex justify-center md:justify-end mt-6 space-x-3">
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaYoutube size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
