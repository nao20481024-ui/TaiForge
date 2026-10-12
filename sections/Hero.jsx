'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { discoveryCallUrl } from '../constants';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth2} mx-auto flex flex-col`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center sm:pr-16 pr-6">
        <motion.p
          variants={textVariant(1.0)}
          className="font-normal sm:text-[14px] text-[11px] text-secondary-white uppercase tracking-[0.2em] text-center"
        >
          Managed AI Operations · Technical Support · Ongoing Care
        </motion.p>
        <h1 className="sr-only">Keep AI live. Care for it.</h1>
        <motion.div variants={textVariant(1.1)} aria-hidden="true" className="mt-[16px]">
          <p className={styles.heroHeading}>Keep AI live.</p>
        </motion.div>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
          aria-hidden="true"
        >
          <p className={styles.heroHeading}>Care</p>
          <div className={styles.heroDText} />
          <p className={styles.heroHeading}>for it.</p>
        </motion.div>

        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="mt-[24px] max-w-[780px] font-normal sm:text-[20px] text-[16px] sm:leading-[32px] leading-[26px] text-secondary-white text-center"
        >
          TAI Forge monitors, maintains, troubleshoots, and optimizes the AI agents, automations, and integrations your business already relies on.
        </motion.p>

        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          className="mt-[32px] flex sm:flex-row flex-col items-center justify-center gap-4"
        >
          <a href={discoveryCallUrl} className={styles.primaryButton}>
            Book a Support Call
          </a>
          <a href="#solutions" className={styles.secondaryButton}>
            See Our Services
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full sm:mt-[64px] mt-[48px] 2xl:pl-[280px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] sm:-top-[20px] -top-[10px] opacity-80" />
        <img
          src="/hero-workflow.svg"
          alt="Illustration of business systems around an AI operations hub, including inquiries, documents, email, CRM, ERP, reports, and a human review step"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#solutions" aria-label="Explore our services">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]">
            <motion.img
              src="/stamp.svg"
              alt=""
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain "
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
