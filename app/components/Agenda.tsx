'use client';

import React from 'react';

const Agenda: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-6 md:py-10 px-4 md:px-6">
      <div className="max-w-4xl md:max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <h2 className="text-4xl md:text-6xl lg:text-[100px] font-bold font-syne leading-tight">
          AGENDA
        </h2>
        
        <p className="text-base md:text-lg lg:text-[20px] font-normal text-left md:text-right leading-tight">
          October 15-17, 2052 | Horizon <br className="hidden md:block" />
          Convention Center, Amsterdam
        </p>
      </div>
    </div>
  );
};

export default Agenda;