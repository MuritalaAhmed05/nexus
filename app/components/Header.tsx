'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  path: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-[50px] leading-[100%] tracking-[0%] font-syne"
      >
        nexus
      </motion.div>
      
      <nav className="hidden md:flex gap-6 justify-center items-center">
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: navItems.indexOf(item) * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={item.path}
              className={`relative font-medium text-[25px] leading-[100%] tracking-[0%] font-syne
                ${pathname === item.path ? 'border border-white rounded-[100px] py-[15px] px-[31px] font-normal' : ''}`}
            >
              {item.name}
              {pathname !== item.path && (
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-[2px] bg-white"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </nav>
      
      <div className="md:hidden">
        <motion.button
          className="flex flex-col justify-between w-6 h-[18px] cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-controls="mobile-menu"
          whileTap={{ scale: 0.9 }}
        >
          <motion.span 
            className={`h-[2px] w-full bg-white rounded`}
            animate={isMenuOpen ? { rotate: 45, translateY: 7 } : { rotate: 0, translateY: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className={`h-[2px] w-full bg-white rounded`}
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className={`h-[2px] w-full bg-white rounded`}
            animate={isMenuOpen ? { rotate: -45, translateY: -7 } : { rotate: 0, translateY: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              id="mobile-menu" 
              className="absolute top-[60px] left-0 right-0 flex flex-col bg-black p-4 gap-4 z-10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Link
                    href={item.path}
                    className={`relative text-white no-underline block py-2 ${pathname === item.path ? 'font-medium' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;