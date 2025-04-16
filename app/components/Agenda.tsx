'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Agenda: React.FC = () => {
  // Set up refs and animation controls
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
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

  return (
    <motion.div 
      ref={containerRef}
      className="w-full bg-black text-white py-6 md:py-10 px-4 md:px-6"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="max-w-4xl md:max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <motion.h2 
          className="text-4xl md:text-6xl lg:text-[100px] font-bold font-syne leading-tight"
          variants={titleVariants}
        >
          AGENDA
        </motion.h2>
       
        <motion.p 
          className="text-base md:text-lg lg:text-[20px] font-normal text-left md:text-right leading-tight"
          variants={textVariants}
        >
          October 15-17, 2052 | Horizon <br className="hidden md:block" />
          Convention Center, Amsterdam
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Agenda;