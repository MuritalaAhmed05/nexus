import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-black py-8 md:py-0">
      {/* Main container with rounded corners */}
      <div className="relative max-w-4xl md:max-w-6xl w-full bg-[#DEDEE0] rounded-[30px] md:rounded-[50px] overflow-hidden flex flex-col md:flex-row mx-4 md:mx-0">
        {/* Left section - Gray box */}
        <div className="w-full md:pr-[45%] p-6 md:p-[70px] text-[#1C1A1A]">
          <h2 className="font-syne font-bold text-2xl md:text-[30px] leading-none tracking-normal mb-6 md:mb-10">
            Next-Gen AI Summit 2052
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 md:mr-15">
            <div className="flex flex-col space-y-2 md:space-y-3">
              <Link href="/agenda" className="font-syne text-sm md:text-[16px] hover:underline">Agenda</Link>
              <Link href="/speakers" className="font-syne text-sm md:text-[16px] hover:underline">Speakers</Link>
              <Link href="/register" className="font-syne text-sm md:text-[16px] hover:underline">Register</Link>
              <Link href="/venue" className="font-syne text-sm md:text-[16px] hover:underline">Venue</Link>
              <Link href="/faq" className="font-syne text-sm md:text-[16px] hover:underline">FAQ</Link>
            </div>

            <div className="flex flex-col space-y-2 md:space-y-3">
              <Link href="/terms" className="font-syne text-sm md:text-[16px] hover:underline">Terms & Conditions</Link>
              <Link href="/privacy" className="font-syne text-sm md:text-[16px] hover:underline">Privacy Policy</Link>
              <Link href="/cookies" className="font-syne text-sm md:text-[16px] hover:underline">Cookie Policy</Link>
            </div>
          </div>
          
          <div className="font-syne font-normal text-base md:text-[20px] leading-[30px] tracking-normal mt-8 md:mt-20">
            © 2052 Next-Gen AI Summit. All rights reserved.
          </div>
        </div>
        
        {/* Right section - Blue box */}
        <div className="w-full md:w-[50%] md:absolute top-0 right-0 bottom-0 bg-[#0147FF] p-6 md:p-[70px] rounded-[30px] md:rounded-[50px] text-white">
          <div className="mb-8 md:mb-12">
            <h3 className="font-syne font-bold text-xl md:text-[26px] leading-[30px] tracking-normal uppercase mb-2 md:mb-3">STAY UPDATED</h3>
            <p className="font-syne font-normal text-base md:text-[20px] leading-[30px] tracking-normal mb-6 md:mb-10">
              Subscribe for event updates & exclusive content.
            </p>
            
            <div className="mb-6 md:mb-8">
              <input
                type="email"
                className="w-full bg-transparent border-b border-white pb-2 outline-none placeholder-white"
                placeholder="Email"
              />
            </div>
            
            <button className="font-syne font-medium text-base md:text-[20px] leading-none tracking-normal rounded-[100px] px-6 py-3 md:px-13 md:py-5 text-[#1C1A1A] bg-white mb-4 md:mb-5 w-full md:w-auto">
              Stay updated
            </button>
          </div>
          
          <div>
            <h3 className="font-syne font-bold text-xl md:text-[26px] leading-[30px] tracking-normal uppercase mb-4 md:mb-7">FOLLOW US</h3>
            <div className="flex space-x-4 md:space-x-5">
              <Link href="#" className="hover:opacity-80">
                <FaFacebookF size={18} />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <FaLinkedinIn size={18} />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <FaInstagram size={18} />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <FaYoutube size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;