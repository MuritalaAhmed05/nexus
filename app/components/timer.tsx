"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const RegistrationBanner: React.FC = () => {
  const targetDate = new Date("2025-04-30T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  return (
    <div className="flex flex-col w-full  bg-black text-white">
      <div className="max-w-4xl md:max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16 w-full">
        <div className="mb-6 md:mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-[15rem]">
          <h1 className="font-syne font-bold text-4xl md:text-6xl lg:text-[100px] leading-none tracking-normal">
            REGISTER NOW
          </h1>
          <p className="font-syne font-normal text-base md:text-lg lg:text-[20px] leading-[30px] tracking-normal max-w-md">
            Secure your spot at the Next-Gen AI Summit 2052 and join the future
            of AI innovation.
          </p>
        </div>

        <div className="bg-[#121212] rounded-[30px] md:rounded-[50px] relative overflow-hidden">
          <div className="py-8 md:py-12 lg:py-24 px-6 md:px-12 lg:px-26 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col w-full">
              <p className="font-syne font-normal text-base md:text-lg lg:text-[20px] leading-[30px] tracking-normal mb-4 md:mb-0">
                Early Bird Pricing Ends in:
              </p>
              <div className="flex items-end justify-center md:justify-start space-x-1 md:space-x-2">
                {["days", "hours", "minutes"].map((unit, index) => (
                  <React.Fragment key={unit}>
                    {index > 0 && (
                      <span className="font-syne font-normal text-4xl md:text-6xl lg:text-[200px] leading-none tracking-normal mb-1">
                        :
                      </span>
                    )}
                    <div className="flex flex-col items-center min-w-[60px] md:min-w-[100px]">
                      <span className="font-syne font-normal text-4xl md:text-6xl lg:text-[200px] leading-none tracking-normal">
                        {timeLeft[unit as keyof typeof timeLeft] < 10
                          ? `0${timeLeft[unit as keyof typeof timeLeft]}`
                          : timeLeft[unit as keyof typeof timeLeft]}
                      </span>
                      <span className="font-syne font-normal text-xs md:text-sm lg:text-[16px] leading-[30px] tracking-normal text-center">
                        {unit.toUpperCase()}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
                {/* Show seconds only on desktop */}
                <div className="hidden md:flex items-center">
                  <span className="font-syne font-normal text-6xl lg:text-[200px] leading-none tracking-normal mb-1">
                    :
                  </span>
                  <div className="flex flex-col items-center min-w-[100px]">
                    <span className="font-syne font-normal text-6xl lg:text-[200px] leading-none tracking-normal">
                      {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
                    </span>
                    <span className="font-syne font-normal text-sm lg:text-[16px] leading-[30px] tracking-normal text-center">
                      SECONDS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]">
            <Image
              src="/Vector (3).svg"
              alt="Blue starburst design"
              layout="fill"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationBanner;