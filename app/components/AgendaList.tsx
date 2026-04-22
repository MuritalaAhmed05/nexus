"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

export default function AgendaList() {
  // References and controls for scroll animations
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const mainControls = useAnimation();

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 0.8,
      scale: [0.8, 1.1, 1],
      rotate: 0,
      transition: {
        duration: 1.2,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Trigger animations whenever component comes into view
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={containerRef}
      className="bg-[#121212] text-white py-8 md:py-37 px-6 md:px-19 max-w-4xl md:max-w-6xl mx-auto rounded-[50px] font-syne relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={mainControls}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-8"
        variants={itemVariants}
      >
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
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-8"
        variants={itemVariants}
      >
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
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-12"
        variants={itemVariants}
      >
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
      </motion.div>

      <div className="flex justify-end mb-4 md:mb-6">
        <motion.div variants={buttonVariants} whileHover="hover">
          <Link
            href="/detailed-schedule"
            className="font-syne font-medium gap-3 md:gap-5 text-lg md:text-[25px] bg-gradient-to-r from-[#0147FF] via-[#0147FF] to-transparent leading-none tracking-normal py-3 px-6 md:py-5 md:px-35 flex items-center rounded-[100px]"
          >
            View detailed schedule
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <GoArrowUpRight />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-1/3 h-1/3">
        <motion.div className="w-full h-full" variants={imageVariants}>
          <Image
            src="/Mark.svg"
            alt="Abstract AI shapes"
            width={320}
            height={320}
            className="opacity-80 scale-125 md:scale-110 lg:scale-100"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
