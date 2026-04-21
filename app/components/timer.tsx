"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const RegistrationBanner: React.FC = () => {
  const targetDate = new Date("2025-04-30T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const timerVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 10 
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="flex flex-col w-full bg-black text-white overflow-x-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-4xl md:max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16 w-full">
        <div className="mb-6 md:mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-[15rem]">
          <motion.h1 
            variants={itemVariants}
            className="font-syne font-bold text-4xl md:text-6xl lg:text-[100px] leading-none tracking-normal"
          >
            REGISTER NOW
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="font-syne font-normal text-base md:text-lg lg:text-[20px] leading-[30px] tracking-normal max-w-md"
          >
            Secure your spot at the Next-Gen AI Summit 2052 and join the future
            of AI innovation.
          </motion.p>
        </div>

        <motion.div 
          variants={itemVariants}
          className="bg-[#121212] rounded-[30px] md:rounded-[50px] relative overflow-hidden"
        >
          <div className="py-8 md:py-12 lg:py-24 px-6 md:px-12 lg:px-26 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col w-full">
              <motion.p 
                variants={itemVariants}
                className="font-syne font-normal text-base md:text-lg lg:text-[20px] leading-[30px] tracking-normal mb-4 md:mb-0"
              >
                Early Bird Pricing Ends in:
              </motion.p>
              <div className="flex items-end justify-center md:justify-start space-x-1 md:space-x-2">
                {["days", "hours", "minutes"].map((unit, index) => (
                  <React.Fragment key={unit}>
                    {index > 0 && (
                      <span className="font-syne font-normal text-4xl md:text-6xl lg:text-[200px] leading-none tracking-normal mb-1">
                        :
                      </span>
                    )}
                    <motion.div 
                      variants={timerVariants}
                      className="flex flex-col items-center min-w-[60px] md:min-w-[100px]"
                    >
                      <span className="font-syne font-normal text-4xl md:text-6xl lg:text-[200px] leading-none tracking-normal">
                        {timeLeft[unit as keyof typeof timeLeft] < 10
                          ? `0${timeLeft[unit as keyof typeof timeLeft]}`
                          : timeLeft[unit as keyof typeof timeLeft]}
                      </span>
                      <span className="font-syne font-normal text-xs md:text-sm lg:text-[16px] leading-[30px] tracking-normal text-center">
                        {unit.toUpperCase()}
                      </span>
                    </motion.div>
                  </React.Fragment>
                ))}
                <div className="hidden  items-center">
                  <span className="font-syne font-normal text-6xl lg:text-[200px] leading-none tracking-normal mb-1">
                    :
                  </span>
                  <motion.div 
                    variants={timerVariants}
                    className="flex flex-col items-center min-w-[100px] "
                  >
                    <span className="font-syne font-normal text-6xl lg:text-[200px] leading-none tracking-normal">
                      {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
                    </span>
                    <span className="font-syne font-normal text-sm lg:text-[16px] leading-[30px] tracking-normal text-center">
                      SECONDS
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            className="absolute bottom-0 right-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
            animate={{ 
              rotate: [0, 15, 0], 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              ease: "easeInOut" 
            }}
          >
            <Image
              src="/Vector (3).svg"
              alt="Blue starburst design"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RegistrationBanner;
