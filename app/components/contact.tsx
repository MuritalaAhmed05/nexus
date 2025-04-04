'use client';

import React from 'react';
import Head from 'next/head';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-[#121212] gap-8 md:gap-21 mb-10 rounded-[50px] py-10 px-6 md:px-13">
            {/* Contact Information */}
            <div className="">
              <h1 className="font-syne font-bold text-[30px] md:text-[50px] leading-none tracking-normal capitalize mb-8">
                We're Here To Connect And Assist You
              </h1>
              <p className="font-syne font-normal text-[16px] md:text-[20px] leading-[30px] tracking-normal mb-8 md:mb-26">
                Have questions about the summit? Need help with registration or travel? Our team is ready to assist you.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <div className="">
                  <h3 className="font-syne font-bold text-[22px] md:text-[26px] leading-[30px] tracking-normal uppercase mb-5">CONTACT US</h3>
                  <p className="font-syne font-normal text-[16px] md:text-[20px] leading-[30px] tracking-normal">+1 (555) 123-4567</p>
                </div>
                <div className="">
                  <h3 className="font-syne font-bold text-[22px] md:text-[26px] leading-[30px] tracking-normal uppercase text-nowrap mb-5">EVENT LOCATION</h3>
                  <p className="font-syne font-normal text-[16px] md:text-[20px] leading-[30px] tracking-normal">
                    123 Business Avenue, <br /> Metro Center, Suite 100
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="font-syne font-bold text-[22px] md:text-[26px] leading-[30px] tracking-normal uppercase mb-5">EMAIL</h3>
                  <p className="font-syne font-normal text-[16px] md:text-[20px] leading-[30px] tracking-normal">info@example.com</p>
                </div>

                <div>
                  <h3 className="font-syne font-bold text-[22px] md:text-[26px] leading-[30px] tracking-normal uppercase mb-5">FOLLOW US</h3>
                  <div className="flex space-x-4 mt-2">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <FaFacebookF className="text-[16px] md:text-[20px]" />
                    </div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <FaTwitter className="text-[16px] md:text-[20px]" />
                    </div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <FaLinkedinIn className="text-[16px] md:text-[20px]" />
                    </div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <FaInstagram className="text-[16px] md:text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white text-[#1c1a1a] rounded-[50px] px-6 py-8 md:px-15 md:py-19">
              <div className="mb-6">
                <h2 className="font-syne font-bold text-[22px] md:text-[26px] leading-[30px] tracking-normal uppercase text-[#1C1A1A] mb-4">
                  GET IN TOUCH
                </h2>
                <p className="font-syne font-normal text-[16px] md:text-[20px] leading-[30px] tracking-normal text-[#1C1A1A] mb-9">
                  Reach out with inquiries about tickets, partnerships, or event details.
                </p>
              </div>

              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600"
                  />
                </div>

                <div className="mb-8">
                  <textarea
                    placeholder="Message"
                    className="w-full p-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600"
                  />
                </div>

                <div className="flex justify-start items-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#0147FF] via-[#0147FF] to-transparent font-syne font-medium text-[18px] md:text-[20px] leading-none tracking-normal hover:bg-blue-600 text-white 
                    rounded-[100px] py-4 px-10 md:py-5 md:px-12"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          <div className="bg-gray-800 rounded-lg hidden md:block overflow-hidden h-72 w-full col-span-2">
            <Image
              src="/map.svg"
              alt="Map"
              width={1000}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          </div>
          <div className="bg-gray-800 rounded-lg md:hidden overflow-hidden h-72 w-full col-span-2">
            <Image
              src="/map.svg"
              alt="Map"
              width={1000}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Map Section */}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
