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
          AI Automation · Workflow Engineering · Systems Integration
        </motion.p>
        <h1 className="sr-only">Make work flow. Put AI to work.</h1>
        <motion.div variants={textVariant(1.1)} aria-hidden="true" className="mt-[16px]">
          <p className={styles.heroHeading}>Make work flow.</p>
        </motion.div>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
          aria-hidden="true"
        >
          <p className={styles.heroHeading}>Put AI</p>
          <div className={styles.heroDText} />
          <p className={styles.heroHeading}>to work.</p>
        </motion.div>

        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="mt-[24px] max-w-[780px] font-normal sm:text-[20px] text-[16px] sm:leading-[32px] leading-[26px] text-secondary-white text-center"
        >
          TaiForge helps businesses turn repetitive, disconnected processes into reliable AI-powered workflows. We connect your people, tools, and data so your team can spend less time on manual work and more time creating value.
        </motion.p>

        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1)}
          className="mt-[32px] flex sm:flex-row flex-col items-center justify-center gap-4"
        >
          <a href={discoveryCallUrl} className={styles.primaryButton}>
            Book an AI Discovery Call
          </a>
          <a href="#solutions" className={styles.secondaryButton}>
            Explore Our Solutions
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
          alt="Illustration of an AI workflow connecting inquiries, documents, and email to CRM, ERP, and reporting systems, with a human review step"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#solutions" aria-label="Explore our solutions">
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
