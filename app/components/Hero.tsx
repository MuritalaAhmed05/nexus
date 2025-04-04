"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Hero: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-4 md:py-8 px-4 md:px-15">
      <div className="max-w-4xl md:max-w-6xl mx-auto rounded-3xl bg-[#121212] p-6 md:p-12 relative overflow-hidden">
        <div className="absolute right-[-50px] bottom-[-80px] md:right-[190px] md:bottom-[40px]  z-0">
          <Image
            src="/B1.svg"
            alt="Abstract AI shapes"
            width={280}
            height={280}
            className="opacity-80 scale-150 md:scale-125 lg:scale-110 xl:scale-100"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between mb-8 md:mb-12">
          <p className="font-syne font-bold text-lg md:text-[22px] leading-[30px] tracking-[0%]">
            OCTOBER 15-17, 2052
          </p>
          <p className="font-syne font-bold text-lg md:text-[22px] leading-[30px] tracking-[0%]">
            Horizon Convention Center, TechCity, Utopolis
          </p>
        </div>

        <div className="relative z-10">
          <h1 className="font-syne font-bold text-6xl md:text-[100px] leading-[100%] tracking-[0%]">
            NEXT-GEN AI
            <br />
            SUMMIT
          </h1>

          <p className="font-syne font-normal text-lg md:text-[22px] leading-[30px] tracking-[0%] my-6 md:my-12">
            Explore the cutting-edge innovations shaping the future of
            artificial intelligence. <br className="hidden md:block" />
            Join global leaders and visionaries for two days of insights,
            discussions, and breakthroughs.
          </p>

          <Link
            href="/tickets"
            className="inline-flex items-center gap-3 md:gap-5 px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-[#0147FF] via-[#0147FF] to-transparent hover:to-blue-600 rounded-[100px] font-syne font-medium text-xl md:text-2xl leading-[30px] tracking-[0%]"
          >
            Early bird tickets
            <GoArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;