"use client";
import React, { useState, useRef, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

interface TicketCardProps {
  title: string;
  description: string;
  price: string;
  delay?: number;
}

const TicketCard: React.FC<TicketCardProps> = ({
  title,
  description,
  price,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
    >
      <div
        className={`rounded-[50px] border border-white overflow-hidden transition-colors duration-300 flex flex-col px-6 py-8 md:px-15 md:py-18
          ${isHovered ? "bg-blue-600" : "bg-black"} h-full`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-4 md:p-8 flex-grow flex flex-col justify-between">
          <h2 className="font-syne font-bold text-[22px] md:text-[26px] leading-[30px] tracking-normal uppercase mb-4 md:mb-6">
            {title}
          </h2>
          <p className="font-syne font-normal text-[16px] md:text-[20px] leading-[30px] tracking-normal mb-4 md:mb-6">
            {description}
          </p>
          <p className="font-syne font-bold text-[30px] md:text-[50px] leading-none tracking-normal uppercase mb-6 md:mb-10">
            €{price}
          </p>
        </div>
        <div className="p-4 flex justify-center">
          <button
            className={`flex items-center justify-center rounded-[100px] gap-3 px-6 py-4 md:px-10 md:py-6
              ${isHovered ? "bg-white text-blue-600" : "bg-gradient-to-r from-[#0147FF] via-[#0147FF] to-transparent text-white"}`}
          >
            <span className="font-syne font-medium text-[18px] md:text-[25px] leading-none tracking-normal text-nowrap">
              Get your ticket
            </span>
            <GoArrowUpRight />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const TicketOptions: React.FC = () => {
  return (
    <div className="bg-black min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="font-syne font-bold text-[30px] md:text-[50px] leading-none tracking-normal capitalize mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Ticket Options
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4">
          <TicketCard
            title="EARLY BIRD PASS"
            description="Limited time offer!"
            price="299"
            delay={0}
          />
          <TicketCard
            title="STANDARD PASS"
            description=""
            price="399"
            delay={0.2}
          />
          <TicketCard
            title="VIP EXPERIENCE"
            description="Includes exclusive speaker meetups & front-row seating"
            price="699"
            delay={0.4}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketOptions;
