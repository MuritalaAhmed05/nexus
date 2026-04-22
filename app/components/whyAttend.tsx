"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

interface Benefit {
  id: number;
  title: string;
  description: string;
}

export default function WhyAttend() {
  const benefits: Benefit[] = [
    {
      id: 1,
      title: "CUTTING-EDGE INSIGHTS",
      description:
        "Gain firsthand knowledge from top AI experts and pioneers shaping the industry.",
    },
    {
      id: 2,
      title: "HANDS-ON LEARNING",
      description:
        "Participate in interactive workshops, live demos, and deep-dive sessions to sharpen your skills.",
    },
    {
      id: 3,
      title: "EXCLUSIVE NETWORKING",
      description:
        "Connect with AI leaders, investors, startups, and fellow professionals at curated networking events.",
    },
    {
      id: 4,
      title: "INNOVATION SHOWCASE",
      description:
        "Explore groundbreaking AI solutions, from emerging startups to tech giants redefining the future.",
    },
  ];

  // Set up animation controls and refs
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  // Animation variants
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
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
      className="bg-black text-white font-syne max-w-4xl md:max-w-6xl mx-auto py-8 md:py-12 px-4 md:px-0"
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="mb-6 md:mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-17"
        variants={headerVariants}
      >
        <h2 className="font-syne font-bold text-4xl md:text-6xl lg:text-[100px] leading-none tracking-normal">
          WHY ATTEND?
        </h2>
        <p className="font-syne font-normal text-base md:text-lg lg:text-[20px] leading-[30px] tracking-normal max-w-md">
          Discover why Next-Gen AI Summit is the must-attend event for AI
          professionals, innovators, and industry leaders.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        variants={cardsContainerVariants}
      >
        {benefits.map((benefit) => (
          <BenefitCard
            key={benefit.id}
            id={benefit.id}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

interface BenefitCardProps {
  id: number;
  title: string;
  description: string;
}

function BenefitCard({ id, title, description }: BenefitCardProps) {
  const isRightAligned = id > 2;

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: isRightAligned ? 20 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const numberVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: isRightAligned ? 50 : -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="bg-[#121212] rounded-[30px] md:rounded-[50px] py-6 md:py-10 px-6 md:px-15 relative overflow-hidden"
      variants={cardVariants}
      whileHover="hover"
    >
      <motion.h3
        className={`font-syne font-bold text-base md:text-lg lg:text-[20px] leading-[30px] tracking-normal uppercase text-white mb-6 md:mb-23 ${isRightAligned ? "text-right" : "text-left"}`}
        variants={titleVariants}
      >
        {title}
      </motion.h3>

      <div
        className={`flex ${isRightAligned ? "justify-start" : "justify-end"} relative`}
      >
        <motion.div
          className={`absolute ${isRightAligned ? "right-[-30px] md:right-[-50px]" : "left-[-30px] md:left-[-50px]"} bottom-1/4 transform translate-y-1/2`}
          variants={numberVariants}
        >
          <span className="font-syne font-normal text-[150px] md:text-[200px] lg:text-[300px] leading-[0.8] tracking-normal bg-gradient-to-r from-[#0147FF] via-[#0147FF] to-transparent bg-clip-text text-transparent">
            {id.toString().padStart(2, "0")}
          </span>
        </motion.div>

        <motion.p
          className={`font-syne font-normal text-sm md:text-base lg:text-[18px] leading-[30px] tracking-normal text-white max-w-[60%]`}
          variants={descriptionVariants}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
