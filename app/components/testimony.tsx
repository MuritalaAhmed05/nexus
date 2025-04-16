"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";

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
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // For scroll animations
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const getWrappedIndex = (index: number) => {
    if (index < 0) return testimonials.length + index;
    if (index >= testimonials.length) return index - testimonials.length;
    return index;
  };

  const prevIndex = getWrappedIndex(currentIndex - 1);
  const nextIndex = getWrappedIndex(currentIndex + 1);

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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.4
      }
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#FFFFFF",
      color: "#0147FF",
      transition: { duration: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.2
      }
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction * 100,
      transition: { duration: 0.3 }
    })
  };

  // Desktop card variants
  const leftCardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut" 
      }
    }
  };

  const centerCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const rightCardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut" 
      }
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

  // Arrow animation
  const arrowIconVariants = {
    hover: (direction: number) => ({
      x: direction * 5,
      transition: { duration: 0.2, repeat: Infinity, repeatType: "reverse" }
    })
  };

  return (
    <motion.div 
      ref={containerRef}
      className="bg-black text-white py-8 md:py-16 max-w-4xl md:max-w-6xl mx-auto px-4 md:px-0"
      initial="hidden"
      animate={controls}
    >
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 md:gap-0"
        variants={headerVariants}
      >
        <h1 className="font-syne font-bold text-3xl md:text-4xl lg:text-[50px] leading-none tracking-normal capitalize">
          What Past Attendees Say
        </h1>

        <div className="flex gap-2 md:gap-3">
          <motion.button
            onClick={handlePrevious}
            className="w-12 h-12 md:w-18 md:h-18 rounded-[100px] border border-white flex items-center justify-center"
            variants={buttonVariants}
            whileHover="hover"
            aria-label="Previous testimonial"
          >
            <motion.div
              custom={-1}
              // variants={arrowIconVariants}
              whileHover="hover"
            >
              <IoIosArrowRoundBack className="text-2xl md:text-3xl" />
            </motion.div>
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="w-12 h-12 md:w-18 md:h-18 rounded-[100px] border border-white flex items-center justify-center"
            variants={buttonVariants}
            whileHover="hover"
            aria-label="Next testimonial"
          >
            <motion.div
              custom={1}
              // variants={arrowIconVariants}
              whileHover="hover"
            >
              <IoIosArrowRoundForward className="text-2xl md:text-3xl" />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>

      <div className="relative flex flex-col md:flex-row gap-4 md:gap-0">
        {/* Mobile: Single Card View */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div 
            key={currentIndex}
            className="md:hidden w-full bg-[#0147FF] rounded-[30px] md:rounded-[50px] p-6 md:py-18 md:px-15 flex flex-col justify-between h-[350px] md:h-[443px] shadow-xl"
            custom={direction}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div>
              <motion.h2 
                className="font-syne font-bold text-xl md:text-2xl lg:text-[30px] leading-[30px] tracking-normal uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {testimonials[currentIndex].heading}
              </motion.h2>
              <motion.p 
                className="font-syne font-normal text-base md:text-lg lg:text-[20px] leading-[30px] tracking-normal my-6 md:my-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                &quot;{testimonials[currentIndex].quote}&quot;
              </motion.p>
            </div>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
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
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Desktop: Three Card View */}
        <motion.div 
          className="hidden md:block absolute z-10 w-full md:w-[33%] bg-gradient-to-r from-transparent via-[rgba(26, 26, 26, 0.538)] to-[#1A1A1A] rounded-[50px] py-18 px-15 flex flex-col justify-between h-[443px]"
          variants={leftCardVariants}
        >
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
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            className="hidden relative z-30 w-full md:w-[35%] md:ml-[30%] bg-[#0147FF] rounded-[50px] py-18 px-15 md:flex flex-col justify-between h-[443px] shadow-xl"
            variants={centerCardVariants}
          >
            <div>
              <motion.h2 
                className="font-syne font-bold text-[30px] leading-[30px] tracking-normal uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {testimonials[currentIndex].heading}
              </motion.h2>
              <motion.p 
                className="font-syne font-normal text-[20px] leading-[30px] tracking-normal my-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                &quot;{testimonials[currentIndex].quote}&quot;
              </motion.p>
            </div>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
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
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="hidden absolute z-20 w-full md:w-[33%] md:right-0 bg-[#DEDEE0] text-black rounded-[50px] py-18 px-15 md:flex flex-col justify-between h-[443px]"
          variants={rightCardVariants}
        >
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestimonialCarousel;