'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-black py-8 md:py-0">
      {/* Main container with rounded corners */}
      <motion.div 
        className="relative max-w-4xl md:max-w-6xl w-full bg-[#DEDEE0] rounded-[30px] md:rounded-[50px] overflow-hidden flex flex-col md:flex-row mx-4 md:mx-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        {/* Left section - Gray box */}
        <motion.div 
          className="w-full md:pr-[45%] p-6 md:p-[70px] text-[#1C1A1A]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.h2 
            className="font-syne font-bold text-2xl md:text-[30px] leading-none tracking-normal mb-6 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Next-Gen AI Summit 2052
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 md:mr-15">
            <motion.div 
              className="flex flex-col space-y-2 md:space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/agenda" className="font-syne text-sm md:text-[16px] hover:underline">Agenda</Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/speakers" className="font-syne text-sm md:text-[16px] hover:underline">Speakers</Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/register" className="font-syne text-sm md:text-[16px] hover:underline">Register</Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/venue" className="font-syne text-sm md:text-[16px] hover:underline">Venue</Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/faq" className="font-syne text-sm md:text-[16px] hover:underline">FAQ</Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex flex-col space-y-2 md:space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/terms" className="font-syne text-sm md:text-[16px] hover:underline">Terms & Conditions</Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/privacy" className="font-syne text-sm md:text-[16px] hover:underline">Privacy Policy</Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="/cookies" className="font-syne text-sm md:text-[16px] hover:underline">Cookie Policy</Link>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="font-syne font-normal text-base md:text-[20px] leading-[30px] tracking-normal mt-8 md:mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            © 2052 Next-Gen AI Summit. All rights reserved.
          </motion.div>
        </motion.div>
        
        {/* Right section - Blue box */}
        <motion.div 
          className="w-full md:w-[50%] md:absolute top-0 right-0 bottom-0 bg-[#0147FF] p-6 md:p-[70px] rounded-[30px] md:rounded-[50px] text-white"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div 
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.h3 
              className="font-syne font-bold text-xl md:text-[26px] leading-[30px] tracking-normal uppercase mb-2 md:mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              STAY UPDATED
            </motion.h3>
            <motion.p 
              className="font-syne font-normal text-base md:text-[20px] leading-[30px] tracking-normal mb-6 md:mb-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Subscribe for event updates & exclusive content.
            </motion.p>
            
            <motion.div 
              className="mb-6 md:mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <input
                type="email"
                className="w-full bg-transparent border-b border-white pb-2 outline-none placeholder-white"
                placeholder="Email"
              />
            </motion.div>
            
            <motion.button 
              className="font-syne font-medium text-base md:text-[20px] leading-none tracking-normal rounded-[100px] px-6 py-3 md:px-13 md:py-5 text-[#1C1A1A] bg-white mb-4 md:mb-5 w-full md:w-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Stay updated
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.h3 
              className="font-syne font-bold text-xl md:text-[26px] leading-[30px] tracking-normal uppercase mb-4 md:mb-7"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              FOLLOW US
            </motion.h3>
            <motion.div 
              className="flex space-x-4 md:space-x-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="#" className="hover:opacity-80">
                  <FaFacebookF size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="#" className="hover:opacity-80">
                  <FaLinkedinIn size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="#" className="hover:opacity-80">
                  <FaInstagram size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="#" className="hover:opacity-80">
                  <FaYoutube size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;