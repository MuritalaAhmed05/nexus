'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  path: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when window is resized above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Tickets', path: '/tickets' },
    { name: 'Venue', path: '/venue' },
    { name: 'Sponsors', path: '/sponsors' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center md:px-[6.5rem] px-6 py-5 text-white sticky top-0 bg-[#000000] z-50">
      <div className="font-bold text-[50px] leading-[100%] tracking-[0%] font-syne">nexus</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 justify-center items-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`relative font-medium text-[25px] leading-[100%] tracking-[0%] font-syne
              ${pathname === item.path ? 'border border-white rounded-[100px] py-[15px] px-[31px] font-normal' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          className="flex flex-col justify-between w-6 h-[18px] cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-controls="mobile-menu"
        >
          <span className={`h-[2px] w-full bg-white rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`h-[2px] w-full bg-white rounded transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`h-[2px] w-full bg-white rounded transition-all ${isMenuOpen ? '-rotate-45 translate-y-[-7px]' : ''}`}></span>
        </button>

        {isMenuOpen && (
          <nav id="mobile-menu" className="absolute top-[60px] left-0 right-0 flex flex-col bg-black p-4 gap-4 z-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative text-white no-underline ${pathname === item.path ? 'font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
