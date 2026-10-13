'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from '../styles';
import { discoveryCallUrl, navLinks } from '../constants';

const linkClass = 'whitespace-nowrap rounded-sm font-normal text-[16px] text-secondary-white transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-sky';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const firstLink = menuRef.current?.querySelector('a');
    firstLink?.focus();

    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <nav
      className={`${styles.xPaddings} relative z-20 py-8`}
      aria-label="Main navigation"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-4 relative`}>
        <a href="#top" className="inline-flex min-h-[44px] items-center" aria-label="TAI Forge home">
          <img
            src="/logo.svg"
            alt="TAI Forge"
            width={760}
            height={190}
            className="h-[36px] w-auto object-contain"
          />
        </a>

        <ul className="hidden shrink-0 items-center gap-x-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={linkClass}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <Link href={discoveryCallUrl} className={`${styles.primaryButton} hidden shrink-0 whitespace-nowrap !px-5 !py-3 !text-[14px] lg:inline-flex`}>
          Request an AI Health Check
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sky"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <img src="/menu.svg" alt="" width={24} height={24} className="h-[24px] w-[24px] object-contain" />
        </button>
      </div>

      <div
        ref={menuRef}
        id="mobile-menu"
        hidden={!menuOpen}
        className="absolute left-6 right-6 top-[88px] z-30 rounded-[24px] border-[1px] border-white/10 bg-primary-black p-6 shadow-2xl sm:left-16 sm:right-16 lg:hidden"
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="flex min-h-[44px] items-center rounded-sm font-normal text-[18px] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sky"
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
    </nav>
  );
};

export default Navbar;
