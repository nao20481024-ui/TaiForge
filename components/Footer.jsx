'use client';

import { motion } from 'framer-motion';
import { discoveryCallUrl, navLinks } from '../constants';

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
      <section id="contact" className="flex lg:flex-row flex-col lg:items-end justify-between gap-8 py-8">
        <div className="max-w-[760px]">
          <p className="font-normal text-[14px] text-forge uppercase tracking-[0.2em]">Start the conversation</p>
          <h2 className="mt-[12px] font-bold md:text-[64px] text-[40px] md:leading-[76px] leading-[48px] text-white">
            Let's make your business work smarter.
          </h2>
          <p className="mt-[20px] font-normal md:text-[20px] text-[16px] md:leading-[32px] leading-[26px] text-secondary-white">
            Tell us where your team spends too much time on repetitive work. We'll explore where automation and AI could make a meaningful difference.
          </p>
        </div>
        <a href={discoveryCallUrl} className={`${styles.primaryButton} shrink-0`}>
          Book an AI Discovery Call
          <img src="/arrow.svg" alt="" className="w-[18px] h-[18px] object-contain invert" />
        </a>
      </section>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex md:flex-row flex-col md:items-center justify-between gap-6">
          <div className="flex flex-col gap-[6px]">
            <a href="#top" className="flex items-center" aria-label="TaiForge home">
              <img
                src="/logo.svg"
                alt="TaiForge"
                className="h-[32px] w-auto object-contain"
              />
            </a>
            <p className="font-normal text-[14px] text-secondary-white">
              Taiwan roots. Global ambition.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="font-normal text-[14px] text-white opacity-70 hover:opacity-100 transition-opacity">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <p className="font-normal text-[14px] text-white opacity-50">
            © {new Date().getFullYear()} TaiForge. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
