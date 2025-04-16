"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-4 md:py-8 px-4 md:px-15">
      <motion.div 
       viewport={{ once: false }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl md:max-w-6xl mx-auto rounded-3xl bg-[#121212] p-6 md:p-12 relative overflow-hidden"
      >
        <motion.div 
         viewport={{ once: false }}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.8, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2,
            delay: 0.3,
            ease: "easeOut"
          }}
          className="absolute right-[-50px] bottom-[-80px] md:right-[190px] md:bottom-[40px] z-0"
        >
          <Image
            src="/B1.svg"
            alt="Abstract AI shapes"
            width={280}
            height={280}
            className="opacity-80 scale-150 md:scale-125 lg:scale-110 xl:scale-100"
            priority
          />
        </motion.div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between mb-8 md:mb-12">
          <motion.p 
           viewport={{ once: false }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-syne font-bold text-lg md:text-[22px] leading-[30px] tracking-[0%]"
          >
            OCTOBER 15-17, 2052
          </motion.p>
          <motion.p 
           viewport={{ once: false }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-syne font-bold text-lg md:text-[22px] leading-[30px] tracking-[0%]"
          >
            Horizon Convention Center, TechCity, Utopolis
          </motion.p>
        </div>
        <div className="relative z-10">
          <motion.h1 
           viewport={{ once: false }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              delay: 0.5,
              ease: "easeOut"
            }}
            className="font-syne font-bold text-6xl md:text-[100px] leading-[100%] tracking-[0%]"
          >
            NEXT-GEN AI
            <br />
            SUMMIT
          </motion.h1>
          <motion.p 
           viewport={{ once: false }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-syne font-normal text-lg md:text-[22px] leading-[30px] tracking-[0%] my-6 md:my-12"
          >
            Explore the cutting-edge innovations shaping the future of
            artificial intelligence. <br className="hidden md:block" />
            Join global leaders and visionaries for two days of insights,
            discussions, and breakthroughs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/tickets"
              className="inline-flex items-center gap-3 md:gap-5 px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-[#0147FF] via-[#0147FF] to-transparent hover:to-blue-600 rounded-[100px] font-syne font-medium text-xl md:text-2xl leading-[30px] tracking-[0%]"
            >
              <motion.span
               viewport={{ once: false }}
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center gap-3 md:gap-5"
              >
                Early bird tickets
                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <GoArrowUpRight />
                </motion.div>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;