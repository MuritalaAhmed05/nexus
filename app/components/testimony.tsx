"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  heading: string;
}

const TestimonialCarousel: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "This summit opened my eyes to the future of AI and how it will shape industries.",
      name: "Mark Vandenberg",
      title: "CTO, NeuralTech",
      heading: "GAME-CHANGING INSIGHTS",
    },
    {
      id: 2,
      quote: "Incredible speakers, top-tier networking, and cutting-edge discussions all in one place.",
      name: "Elena Rojas",
      title: "AI Researcher, DeepMind",
      heading: "THE BEST AI EVENT!",
    },
    {
      id: 3,
      quote: "From hands-on workshops to visionary talks this summit is a must-attend for AI professionals.",
      name: "David Laurent",
      title: "CEO, Futures/Labs",
      heading: "UNMATCHED OPPORTUNITIES",
    },
    {
      id: 4,
      quote: "Innovative perspectives on AI implementation across various sectors.",
      name: "Sarah Chen",
      title: "VP Innovation, TechFuture",
      heading: "TRANSFORMATIVE EXPERIENCE",
    },
    {
      id: 5,
      quote: "The connections made at this summit have been invaluable to our research progress.",
      name: "Michael Rodriguez",
      title: "Lead Developer, AI Solutions",
      heading: "POWERFUL NETWORKING",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const getWrappedIndex = (index: number) => {
    if (index < 0) return testimonials.length + index;
    if (index >= testimonials.length) return index - testimonials.length;
    return index;
  };

  const prevIndex = getWrappedIndex(currentIndex - 1);
  const nextIndex = getWrappedIndex(currentIndex + 1);

  return (
    <div className="bg-black text-white py-8 md:py-16 max-w-4xl md:max-w-6xl mx-auto px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 md:gap-0">
        <h1 className="font-syne font-bold text-3xl md:text-4xl lg:text-[50px] leading-none tracking-normal capitalize">
          What Past Attendees Say
        </h1>

        <div className="flex gap-2 md:gap-3">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 md:w-18 md:h-18 rounded-[100px] border border-white flex items-center justify-center hover:bg-white hover:text-[#0147FF] active:bg-white active:text-[#0147FF]"
            aria-label="Previous testimonial"
          >
            <IoIosArrowRoundBack className="text-white hover:text-[#0147FF] active:text-[#0147FF] text-2xl md:text-3xl" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 md:w-18 md:h-18 rounded-[100px] border border-white flex items-center justify-center hover:bg-white hover:text-[#0147FF] active:bg-white active:text-[#0147FF]"
            aria-label="Next testimonial"
          >
            <IoIosArrowRoundForward className="text-white hover:text-[#0147FF] active:text-[#0147FF] text-2xl md:text-3xl" />
          </button>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row gap-4 md:gap-0">
        {/* Mobile: Single Card View */}
        <div className="md:hidden w-full bg-[#0147FF] rounded-[30px] md:rounded-[50px] p-6 md:py-18 md:px-15 flex flex-col justify-between h-[350px] md:h-[443px] shadow-xl">
          <div>
            <h2 className="font-syne font-bold text-xl md:text-2xl lg:text-[30px] leading-[30px] tracking-normal uppercase">
              {testimonials[currentIndex].heading}
            </h2>
            <p className="font-syne font-normal text-base md:text-lg lg:text-[20px] leading-[30px] tracking-normal my-6 md:my-12">
              &quot;{testimonials[currentIndex].quote}&quot;
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 md:w-10 md:h-10 mr-3">
              <Image
                src={`/image (1).svg`}
                alt={testimonials[currentIndex].name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-syne font-normal text-sm md:text-base lg:text-[18px] leading-[30px] tracking-normal">
                {testimonials[currentIndex].name}
              </p>
              <p className="font-syne font-normal text-sm md:text-base lg:text-[18px] leading-[30px] tracking-normal">
                {testimonials[currentIndex].title}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop: Three Card View */}
        <div className="hidden md:block absolute z-10 w-full md:w-[33%] bg-gradient-to-r from-transparent via-[rgba(26, 26, 26, 0.538)] to-[#1A1A1A] rounded-[50px] py-18 px-15 flex flex-col justify-between h-[443px]">
          <div>
            <h2 className="font-syne font-bold text-[30px] leading-[30px] tracking-normal uppercase">
              {testimonials[prevIndex].heading}
            </h2>
            <p className="font-syne font-normal text-[20px] leading-[30px] tracking-normal my-12">
              &quot;{testimonials[prevIndex].quote}&quot;
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3">
              <Image
                src={`/image (2).svg`}
                alt={testimonials[prevIndex].name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-syne font-normal text-[18px] leading-[30px] tracking-normal">
                {testimonials[prevIndex].name}
              </p>
              <p className="font-syne font-normal text-[18px] leading-[30px] tracking-normal text-gray-400">
                {testimonials[prevIndex].title}
              </p>
            </div>
          </div>
        </div>

        <div className="hidden relative z-30 w-full md:w-[35%] md:ml-[30%] bg-[#0147FF] rounded-[50px] py-18 px-15 md:flex flex-col justify-between h-[443px] shadow-xl">
          <div>
            <h2 className="font-syne font-bold text-[30px] leading-[30px] tracking-normal uppercase">
              {testimonials[currentIndex].heading}
            </h2>
            <p className="font-syne font-normal text-[20px] leading-[30px] tracking-normal my-12">
              &quot;{testimonials[currentIndex].quote}&quot;
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3">
              <Image
                src={`/image (1).svg`}
                alt={testimonials[currentIndex].name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-syne font-normal text-[18px] leading-[30px] tracking-normal">
                {testimonials[currentIndex].name}
              </p>
              <p className="font-syne font-normal text-[18px] leading-[30px] tracking-normal">
                {testimonials[currentIndex].title}
              </p>
            </div>
          </div>
        </div>

        <div className="hidden absolute z-20 w-full md:w-[33%] md:right-0 bg-[#DEDEE0] text-black rounded-[50px] py-18 px-15 md:flex flex-col justify-between h-[443px]">
          <div>
            <h2 className="font-syne font-bold text-[30px] leading-[30px] tracking-normal uppercase">
              {testimonials[nextIndex].heading}
            </h2>
            <p className="font-syne font-normal text-[20px] leading-[30px] tracking-normal my-12">
              &quot;{testimonials[nextIndex].quote}&quot;
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3">
              <Image
                src={`/image.svg`}
                alt={testimonials[nextIndex].name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-syne font-normal text-[18px] leading-[30px] tracking-normal">
                {testimonials[nextIndex].name}
              </p>
              <p className="font-syne font-normal text-[18px] leading-[30px] tracking-normal">
                {testimonials[nextIndex].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;