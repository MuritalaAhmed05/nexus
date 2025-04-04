import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export default function AgendaList() {
  return (
    <div className="bg-[#121212] text-white py-8 md:py-37 px-6 md:px-19 max-w-4xl md:max-w-6xl mx-auto rounded-[50px] font-syne relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-8">
        <div className="md:col-span-1">
          <h3 className="font-syne font-bold text-3xl md:text-[40px] leading-none tracking-normal">
            Day 1
          </h3>
          <p className="font-syne font-bold text-xl md:text-[40px] leading-[30px] tracking-normal">
            09:00 - 19:00
          </p>
        </div>
        <div className="md:col-span-2">
          <h2 className="font-syne font-bold text-2xl md:text-4xl leading-tight tracking-tight">
            AI Innovations & Trends
          </h2>
          <p className="font-syne font-normal text-base md:text-[20px] leading-[30px] tracking-normal">
            Explore the latest in generative AI, robotics, and NLP, with
            industry-led discussions and tech demos. A startup showcase and
            investor insights highlight AI's business potential.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-8">
        <div className="md:col-span-1">
          <h3 className="font-syne font-bold text-3xl md:text-[40px] leading-none tracking-normal">
            Day 2
          </h3>
          <p className="font-syne font-bold text-xl md:text-[40px] leading-[30px] tracking-normal">
            09:00 - 20:00
          </p>
        </div>
        <div className="md:col-span-2">
          <h2 className="font-syne font-bold text-2xl md:text-4xl leading-tight tracking-tight">
            AI Technologies & Applications
          </h2>
          <p className="font-syne font-normal text-base md:text-[20px] leading-[30px] tracking-normal">
            Explore the latest in generative AI, robotics, and NLP, with
            industry-led discussions and tech demos. A startup showcase and
            investor insights highlight AI's business potential.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-12">
        <div className="md:col-span-1">
          <h3 className="font-syne font-bold text-3xl md:text-[40px] leading-none tracking-normal">
            Day 3
          </h3>
          <p className="font-syne font-bold text-xl md:text-[40px] leading-[30px] tracking-normal">
            09:30 - 16:00
          </p>
        </div>
        <div className="md:col-span-2">
          <h2 className="font-syne font-bold text-2xl md:text-4xl leading-tight tracking-tight">
            Future of AI & Networking
          </h2>
          <p className="font-syne font-normal text-base md:text-[20px] leading-[30px] tracking-normal">
            Dive into AI's long-term impact, attend expert-led workshops, and
            watch the startup pitch competition. The event closes with a
            visionary keynote and final networking sessions.
          </p>
        </div>
      </div>

      <div className="flex justify-end mb-4 md:mb-6">
        <Link
          href="/detailed-schedule"
          className="font-syne font-medium gap-3 md:gap-5 text-lg md:text-[25px] bg-gradient-to-r from-[#0147FF] via-[#0147FF] to-transparent leading-none tracking-normal py-3 px-6 md:py-5 md:px-35 flex items-center rounded-[100px]"
        >
          View detailed schedule
          <GoArrowUpRight />
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-1/3 h-1/3">
        <div className="w-full h-full">
          <Image
            src="/Mark.svg"
            alt="Abstract AI shapes"
            width={320}
            height={320}
            className="opacity-80 scale-125 md:scale-110 lg:scale-100"
            priority
          />
        </div>
      </div>
    </div>
  );
}