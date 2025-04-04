"use client"

import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import Image from 'next/image';

interface Speaker {
  id: number;
  name: string;
  role: string;
  image: string;
  type: 'text' | 'image';
}

export default function KeyNoteSpeakers() {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: "Dr. Emily Carter",
      role: "CTO at Quantum Digital",
      image: "/Image (4).svg",
      type: 'text'
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "CEO, InnovateTech",
      image: "/Image (4).svg",
      type: 'image'
    },
    {
      id: 3,
      name: "Elon Park",
      role: "CTO, ElectrifyAI",
      image: "/Image (6).svg",
      type: 'text'
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Director of AI Research",
      image: "/Image (5).svg",
      type: 'image'
    },
    {
      id: 5,
      name: "Laura Kim",
      role: "AI Policy Advisor, EU Commission",
      image: "/Image (6).svg",
      type: 'image'
    },
    {
      id: 6,
      name: "Laura Kim",
      role: "AI Policy Advisor, EU Commission",
      image: "/Image (5).svg",
      type: 'text'
    },
    {
      id: 7,
      name: "Laura Kim",
      role: "AI Policy Advisor, EU Commission",
      image: "/Image (7).svg",
      type: 'image'
    },
    {
      id: 8,
      name: "Dr. Alan Foster",
      role: "Stanford AI Lab",
      image: "/Image (6).svg",
      type: 'text'
    }
  ];

  return (
    <div className="bg-black text-white my-8 md:my-12 font-syne max-w-4xl md:max-w-6xl mx-auto px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-start mb-6 md:mb-10 gap-4 md:gap-0">
        <h2 className="font-syne font-bold text-4xl md:text-6xl lg:text-[100px] leading-none tracking-normal">
          KEYNOTE SPEAKERS
        </h2>
        <p className="font-syne font-normal text-base md:text-lg lg:text-[20px] leading-[30px] tracking-normal max-w-md">
          Meet the industry leaders shaping the future of AI.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {speakers.map((speaker) => (
          <SpeakerCard 
            key={speaker.id} 
            speaker={speaker} 
          />
        ))}
        <div className="hidden md:block"></div>
      </div>
      
      <div className="mt-6 md:mt-8 flex justify-start">
        <button className="border border-white gap-3 md:gap-5 rounded-[100px] py-3 px-6 md:py-5 md:px-13 font-syne font-medium text-base md:text-lg lg:text-[25px] leading-none tracking-normal flex items-center hover:bg-white hover:text-black transition-colors duration-300">
          View all speakers
          <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
}
interface SpeakerCardProps {
  speaker: Speaker;
}

function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="bg-[#DEDEE0] rounded-[30px] md:rounded-[50px] overflow-hidden h-[452px] sm:h-[350px] md:h-[452px]">
      {speaker.type === 'text' ? (
        <div className="p-4 md:p-6 h-full flex flex-col justify-between py-6 md:py-13 px-4 md:px-10">
          <div>
            <h3 className="font-syne font-semibold text-xl md:text-2xl lg:text-[30px] leading-none tracking-normal text-[#1C1A1A]">
              {speaker.name}
            </h3>
          </div>
          <div>
            <p className="font-syne font-normal text-sm md:text-base lg:text-[20px] leading-[30px] tracking-normal text-[#1C1A1A]">
              {speaker.role}
            </p>
          </div>
        </div>
      ) : (
        <div className="h-full w-full relative">
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover mix-blend-luminosity"
          />
        </div>
      )}
    </div>
  );
}