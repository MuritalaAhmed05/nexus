'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

export default function EventFeatures() {
  return (
    <div className="w-full bg-black text-white py-8 md:py-12 px-4">
      <div className="max-w-4xl md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] gap-4 md:gap-6">
        <div className="bg-[#0147FF] rounded-[30px] md:rounded-[50px] py-8 md:py-15 px-6 md:px-12 relative overflow-hidden flex flex-col justify-between h-full">
          <div>
            <h2 className="font-[Syne] font-bold text-3xl md:text-[40px] leading-[100%] tracking-[0%]">Speakers</h2>
            
            <div className="flex flex-col md:flex-row md:items-center my-4 md:my-6 gap-4">
              <div className="bg-white rounded-full w-12 h-12 md:w-auto md:h-auto md:mr-13 md:p-6 flex items-center justify-center">
                <GoArrowUpRight className="text-[#0147FF] font-extrabold text-2xl md:text-4xl" />
              </div>

              <p className="text-sm md:text-base">
                Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence.
              </p>
            </div>
          </div>
          
          <div className="mt-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="flex -space-x-4 md:-space-x-6 mb-2 md:mb-4">
              <Image 
                src="/Image.svg" 
                alt="Speaker" 
                width={45} 
                height={45} 
                className="rounded-[100px] w-12 h-12 md:w-[74px] md:h-[74px]"
              />
              <Image 
                src="/Image (1).svg" 
                alt="Speaker" 
                width={45} 
                height={45} 
                className="rounded-[100px] w-12 h-12 md:w-[74px] md:h-[74px]"
              />
              <Image 
                src="/Image (2).svg" 
                alt="Speaker" 
                width={45} 
                height={45} 
                className="rounded-[100px] w-12 h-12 md:w-[74px] md:h-[74px]"
              />
              <Image 
                src="/Image (3).svg" 
                alt="Speaker" 
                width={45} 
                height={45} 
                className="rounded-[100px] w-12 h-12 md:w-[74px] md:h-[74px]"
              />
            </div>
            
            <Link href="/speakers" className="inline-flex items-center border border-white rounded-[100px] py-3 px-4 md:py-[22px] md:px-[31px] text-white transition-all">
              And more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="bg-[#0147FF] rounded-[30px] md:rounded-[50px] py-8 md:py-15 px-6 md:px-12 h-full">
            <h2 className="font-[Syne] font-bold text-3xl md:text-[40px] leading-[100%] tracking-[0%] mb-4 md:mb-9">Technologies</h2>
            <p className="text-sm md:text-base">
              Explore advanced machine learning, natural language processing, AI-driven automation, and emerging cybersecurity applications.
            </p>
          </div>
          
          <div className="bg-gray-200 text-black rounded-[30px] md:rounded-[50px] py-8 md:py-15 px-6 md:px-12 h-full">
            <h2 className="font-[Syne] font-bold text-3xl md:text-[40px] leading-[100%] tracking-[0%] mb-4 md:mb-9 text-nowrap">Networking Opportunities</h2>
            <p className="text-sm md:text-base">
              Enjoy exclusive networking sessions, roundtables, and social events to foster collaboration and spark new partnerships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}