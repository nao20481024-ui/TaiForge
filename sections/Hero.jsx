'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { discoveryCallUrl } from '../constants';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className="relative overflow-hidden pt-8 sm:pt-14">
    <div className="pointer-events-none absolute left-1/2 top-[-80px] h-[460px] w-[min(920px,90vw)] -translate-x-1/2 rounded-full bg-brand-blue/25 blur-[140px]" />
    <div className="pointer-events-none absolute left-[12%] top-[220px] h-[240px] w-[280px] rounded-full bg-forge/15 blur-[120px]" />
    <div className="pointer-events-none absolute right-[8%] top-[80px] h-[180px] w-[220px] rounded-full bg-brand-sky/10 blur-[110px]" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={`${styles.innerWidth} relative z-10 mx-auto flex flex-col items-center px-6 sm:px-16`}
    >
      <motion.p
        variants={textVariant(0.15)}
        className="text-center font-normal text-[11px] uppercase tracking-[0.16em] text-forge sm:text-[13px] sm:tracking-[0.32em]"
      >
        MANAGED AI OPERATIONS & SUPPORT
      </motion.p>

      <motion.h1
        variants={textVariant(0.3)}
        className="mt-8 w-full min-w-0 max-w-[1100px] text-center font-bold tracking-[-0.035em] text-white text-[clamp(30px,8.5vw,96px)] leading-[1.05] sm:mt-10"
      >
        Your AI.
        <span className="mt-1 block sm:mt-2">Always Supported.</span>
      </motion.h1>

      <motion.p
        variants={fadeIn('up', 'tween', 0.45, 0.8)}
        className="mt-8 max-w-[680px] text-center font-normal text-[17px] leading-[28px] text-secondary-white sm:mt-10 sm:text-[20px] sm:leading-[34px]"
      >
        We monitor, maintain and troubleshoot the AI agents, automations and integrations your business relies on.
      </motion.p>

      <motion.div
        variants={fadeIn('up', 'tween', 0.55, 0.8)}
        className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:mt-14 sm:w-auto sm:flex-row"
      >
        <a href={discoveryCallUrl} className={`${styles.primaryButton} w-full sm:w-auto`}>
          Request an AI Health Check
        </a>
        <a href="#solutions" className={`${styles.secondaryButton} w-full sm:w-auto`}>
          Explore Our Services
        </a>
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="hero-visual relative z-10 mx-auto mt-16 w-full max-w-[1680px] sm:mt-24"
    >
      <div className="relative aspect-[860/1050] w-full md:aspect-[1920/768]">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/tai-forge-website-images/tai-forge-hero-mobile.webp"
            type="image/webp"
          />
          <img
            src="/tai-forge-website-images/tai-forge-hero.webp"
            alt="A luminous sphere of connected systems on a dark operations floor, surrounded by monitoring panels"
            width={1920}
            height={768}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>
      </div>
    </motion.div>
  </section>
);

export default Hero;
