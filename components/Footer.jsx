'use client';

import { motion } from 'framer-motion';
import { navLinks } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-8 h-[2px] bg-white opacity-10" />

        <div className="flex md:flex-row flex-col md:items-center justify-between gap-6">
          <div className="flex flex-col gap-[6px]">
            <a href="#top" className="inline-flex min-h-[44px] items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-sky" aria-label="TAI Forge home">
              <img
                src="/logo.svg"
                alt="TAI Forge"
                width={760}
                height={190}
                className="h-[32px] w-auto object-contain"
              />
            </a>
            <p className="font-normal text-[14px] text-secondary-white">
              Taiwan roots. Global ambition.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="inline-flex min-h-[44px] items-center rounded-sm font-normal text-[14px] text-white opacity-70 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-sky">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="font-normal text-[14px] text-white opacity-50">
            © {new Date().getFullYear()} TAI Forge. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
