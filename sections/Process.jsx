'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { processSteps } from '../constants';

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  className: 'h-[22px] w-[22px]',
};

const StepIcon = ({ id }) => {
  if (id === 'assess') {
    return (
      <svg {...iconProps}>
        <circle cx="11" cy="11" r="6.2" />
        <path d="M15.8 15.8L20 20" />
      </svg>
    );
  }

  if (id === 'onboard') {
    return (
      <svg {...iconProps}>
        <rect x="4" y="3.5" width="12" height="17" rx="2" />
        <path d="M8 8h5" />
        <path d="M8 12h5" />
        <path d="M15.5 16.5l1.6 1.6 3.2-3.4" />
      </svg>
    );
  }

  if (id === 'monitor') {
    return (
      <svg {...iconProps}>
        <path d="M3 12h3.2l2.2-4.5 3.6 9 2.2-4.5H21" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <path d="M4 16l5-5 3.2 3.2L20 6.5" />
      <path d="M14.5 6.5H20V12" />
    </svg>
  );
};

const Process = () => (
  <section className={`${styles.paddings} relative z-10`} id="process">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div variants={fadeIn('up', 'tween', 0.1, 0.8)} className="mx-auto max-w-[760px] text-center">
        <TypingText title="| How We Work" textStyles="text-center" />
        <TitleText title={<>From first look to<br />ongoing care</>} textStyles="text-center" />
        <p className="mt-[16px] font-normal text-[15px] leading-[24px] text-secondary-white sm:text-[18px] sm:leading-[30px]">
          We learn what is already running, get set up with your team, watch and repair what breaks, and improve it as the work changes.
        </p>
      </motion.div>

      <motion.figure variants={fadeIn('up', 'tween', 0.2, 0.8)} className="mx-auto mt-12 w-full max-w-[1040px] sm:mt-14">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#121a24] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <Image
            src="/tai-forge-website-images/tai-forge-monitoring.webp"
            alt="Illustration of a monitoring station linking document, data, and message panels to a central operations display"
            width={1440}
            height={810}
            sizes="(min-width: 1104px) 1040px, calc(100vw - 3rem)"
            className="aspect-[16/9] h-auto w-full object-cover object-center"
          />
        </div>
        <figcaption className="mt-4 text-center font-normal text-[13px] leading-[20px] text-secondary-white">
          Illustration of connected systems under watch.
        </figcaption>
      </motion.figure>

      <motion.ol
        variants={staggerContainer(0.12, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="process-timeline mt-12 sm:mt-16"
      >
        {processSteps.map((step, index) => (
          <motion.li
            key={step.id}
            variants={fadeIn('up', 'tween', 0, 0.6)}
            className="process-step"
          >
            <div className="process-marker">
              <StepIcon id={step.id} />
            </div>
            <div className="process-copy">
              <h3 className="font-bold text-[22px] leading-[30px] text-white">
                <span className="mr-2 text-[15px] tracking-[0.14em] text-forge">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {step.title}
              </h3>
              <p className="mt-[8px] font-normal text-[16px] leading-[26px] text-secondary-white">
                {step.text}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </motion.div>
  </section>
);

export default Process;
