'use client';

import { useState } from 'react';
import Link from 'next/link';
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
      <div className={`${styles.innerWidth} mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-4 relative`}>
        <a href="#top" className="flex items-center" aria-label="TAI Forge home">
          <img
            src="/logo.svg"
            alt="TAI Forge"
            className="h-[36px] w-auto object-contain"
          />
        </a>

        <ul className="hidden shrink-0 items-center gap-x-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="whitespace-nowrap font-normal text-[16px] text-secondary-white transition-colors hover:text-white">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <Link href={discoveryCallUrl} className={`${styles.primaryButton} hidden shrink-0 whitespace-nowrap !px-5 !py-3 !text-[14px] lg:inline-flex`}>
          Request an AI Health Check
        </Link>

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
          <Link
            href={discoveryCallUrl}
            className={`${styles.primaryButton} mt-6 w-full`}
            onClick={() => setMenuOpen(false)}
          >
            Request an AI Health Check
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
