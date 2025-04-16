"use client"
import React, { useRef, useEffect } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import Image from 'next/image';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';

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

  // Set up refs and animation controls
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#FFFFFF",
      color: "#000000",
      transition: { duration: 0.2 }
    }
  };

  // Trigger animations whenever component comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div 
      ref={containerRef}
      className="bg-black text-white my-8 md:my-12 font-syne max-w-4xl md:max-w-6xl mx-auto px-4 md:px-0"
      initial="hidden"
      animate={controls}
    >
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-start mb-6 md:mb-10 gap-4 md:gap-0"
        variants={headerVariants}
      >
        <h2 className="font-syne font-bold text-4xl md:text-6xl lg:text-[100px] leading-none tracking-normal">
          KEYNOTE SPEAKERS
        </h2>
        <p className="font-syne font-normal text-base md:text-lg lg:text-[20px] leading-[30px] tracking-normal max-w-md">
          Meet the industry leaders shaping the future of AI.
        </p>
      </motion.div>
     
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        variants={gridVariants}
      >
        <AnimatePresence>
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
            />
          ))}
        </AnimatePresence>
        <div className="hidden md:block"></div>
      </motion.div>
     
      <motion.div 
        className="mt-6 md:mt-8 flex justify-start"
        variants={buttonVariants}
        whileHover="hover"
      >
        <button className="border border-white gap-3 md:gap-5 rounded-[100px] py-3 px-6 md:py-5 md:px-13 font-syne font-medium text-base md:text-lg lg:text-[25px] leading-none tracking-normal flex items-center transition-colors duration-300">
          View all speakers
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          >
            <GoArrowUpRight />
          </motion.div>
        </button>
      </motion.div>
    </motion.div>
  );
}

interface SpeakerCardProps {
  speaker: Speaker;
}

function SpeakerCard({ speaker }: SpeakerCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      }
    },
    hover: {
      y: -10,
      transition: { 
        duration: 0.3,
        ease: "easeOut" 
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="bg-[#DEDEE0] rounded-[30px] md:rounded-[50px] overflow-hidden h-[452px] sm:h-[350px] md:h-[452px]"
      variants={cardVariants}
      whileHover="hover"
    >
      {speaker.type === 'text' ? (
        <motion.div 
          className="p-4 md:p-6 h-full flex flex-col justify-between py-6 md:py-13 px-4 md:px-10"
          variants={textVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="font-syne font-semibold text-xl md:text-2xl lg:text-[30px] leading-none tracking-normal text-[#1C1A1A]">
              {speaker.name}
            </h3>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="font-syne font-normal text-sm md:text-base lg:text-[20px] leading-[30px] tracking-normal text-[#1C1A1A]">
              {speaker.role}
            </p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div 
          className="h-full w-full relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover mix-blend-luminosity"
          />
        </motion.div>
      )}
    </motion.div>
  );
}