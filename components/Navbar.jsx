'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { discoveryCallUrl, navLinks } from '../constants';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative z-20`}
      aria-label="Main navigation"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8 relative`}>
        <a href="#top" className="flex items-center gap-[12px]" aria-label="TaiForge home">
          <img src="/taiforge-mark.svg" alt="" className="w-[36px] h-[36px] object-contain" />
          <span className="font-extrabold text-[24px] text-white leading-[30px] tracking-[0.04em]">
            TAIFORGE
          </span>
        </a>

        <ul className="lg:flex hidden items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="font-normal text-[16px] text-secondary-white hover:text-white transition-colors">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <a href={discoveryCallUrl} className={`${styles.primaryButton} lg:inline-flex hidden !py-3`}>
          Book a Discovery Call
        </a>

        <button
          type="button"
          className="lg:hidden flex"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <img src="/menu.svg" alt="" className="w-[24px] h-[24px] object-contain" />
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute left-6 right-6 sm:left-16 sm:right-16 top-[88px] z-30 p-6 rounded-[24px] bg-primary-black border-[1px] border-white/10 shadow-2xl"
        >
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="font-normal text-[18px] text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={discoveryCallUrl}
            className={`${styles.primaryButton} mt-6 w-full`}
            onClick={() => setMenuOpen(false)}
          >
            Book an AI Discovery Call
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
