'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { useCases } from '../constants';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

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

const ProblemIcon = ({ id }) => {
  if (id === 'crm') {
    return (
      <svg {...iconProps}>
        <rect x="2.5" y="4" width="7.5" height="6" rx="1.5" />
        <rect x="14" y="14" width="7.5" height="6" rx="1.5" />
        <path d="M10 7h3.2a3 3 0 0 1 3 3V14" />
        <path d="M14 17h-3.2a3 3 0 0 1-3-3V10" />
      </svg>
    );
  }

  if (id === 'credentials') {
    return (
      <svg {...iconProps}>
        <circle cx="8" cy="14" r="3.2" />
        <path d="M10.6 12.2L20 4.5" />
        <path d="M16.2 6.2l1.6 1.6" />
        <path d="M18.4 4.2l1.6 1.6" />
        <path d="M6.2 6.2l3.2 3.2" />
      </svg>
    );
  }

  if (id === 'schedule') {
    return (
      <svg {...iconProps}>
        <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
        <path d="M3.5 9.5h17" />
        <path d="M8 3.5v3" />
        <path d="M16 3.5v3" />
        <path d="M9.2 13.2l5.6 5.2" />
        <path d="M14.8 13.2l-5.6 5.2" />
      </svg>
    );
  }

  if (id === 'assistant') {
    return (
      <svg {...iconProps}>
        <path d="M5 6.5h8.5a2 2 0 0 1 2 2V12a2 2 0 0 1-2 2H9l-3 2.2V14H5a2 2 0 0 1-2-2V8.5a2 2 0 0 1 2-2z" />
        <path d="M11 13.5h6.2a2 2 0 0 1 2 2v2.2a2 2 0 0 1-2 2H16l-2.2 1.8" />
      </svg>
    );
  }

  if (id === 'cost') {
    return (
      <svg {...iconProps}>
        <path d="M4 18V6" />
        <path d="M4 18h16" />
        <path d="M8 15l3.2-4 2.6 2.2L19 7" />
        <path d="M15.2 7H19v3.6" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <path d="M14.2 6.4a3 3 0 0 0-4.1 4.1L4.6 16l3.4 3.4 5.5-5.5a3 3 0 0 0 4.1-4.1L15.2 12l-2.2-2.2z" />
    </svg>
  );
};

const UseCases = () => (
  <section className={`${styles.paddings} relative z-10`} id="use-cases">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Illustrative scenarios" textStyles="text-center" />
      <TitleText title={<>Common Problems We Support</>} textStyles="text-center" />
      <p className="mt-[16px] mx-auto max-w-[760px] font-normal sm:text-[18px] text-[15px] sm:leading-[30px] leading-[24px] text-secondary-white text-center">
        These are examples of the kinds of issues we can look into. They are illustrative scenarios, not completed customer projects. Every environment is different, so support is shaped around the systems you already run.
      </p>

      <div className="mt-[50px] grid grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
        {useCases.map((useCase, index) => (
          <motion.article
            key={useCase.id}
            variants={fadeIn('up', 'spring', index * 0.12, 0.8)}
            className="flex h-full flex-col rounded-[32px] border border-white/10 p-6 gradient-05 transition-colors hover:border-white/30 sm:p-8"
          >
            <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-white/60 text-forge">
              <ProblemIcon id={useCase.id} />
            </div>
            <h3 className="mt-6 font-semibold text-[20px] leading-[28px] text-white lg:text-[24px] lg:leading-[32px]">
              {useCase.title}
            </h3>
            <p className="mt-[10px] font-normal text-[14px] leading-[22px] text-secondary-white lg:text-[17px] lg:leading-[27px]">
              {useCase.subtitle}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.div>
  </section>
);

export default UseCases;
