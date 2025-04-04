'use client';

import React from 'react';
import Image from 'next/image';

export default function Logo() {
  // List of company logos
  const logos = [
    { src: '/Company logo.svg', alt: 'Company logo' },
    { src: '/Company logo (1).svg', alt: 'Company logo 1' },
    { src: '/Company logo (2).svg', alt: 'Company logo 2' },
    { src: '/Company logo (3).svg', alt: 'Company logo 3' },
    { src: '/Company logo (4).svg', alt: 'Company logo 4' },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#000000] py-12">
      <div className="flex animate-scroll">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-8">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`dup-${index}`} className="flex-shrink-0 mx-8">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}