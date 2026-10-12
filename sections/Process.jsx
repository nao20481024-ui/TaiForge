'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';

import { processSteps } from '../constants';

const Process = () => (
  <section className={`${styles.paddings} relative z-10`} id="process">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src="/process.svg"
          alt="A four-stage cycle: discover, design, build and integrate, optimize"
          className="w-[90%] h-[90%] max-w-[560px] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.9] flex justify-center flex-col"
      >
        <TypingText title="| How We Work" />
        <TitleText title={<>From first conversation to dependable workflow</>} />
        <p className="mt-[16px] font-normal text-[18px] leading-[30px] text-secondary-white max-w-[560px]">
          We don't hand you a slide deck and walk away. We take responsibility for thoughtful implementation, from discovery through ongoing improvement.
        </p>
        <div className="mt-[31px] flex flex-col max-w-[560px] gap-[28px]">
          {processSteps.map((step, index) => (
            <StartSteps
              key={step.title}
              number={index + 1}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Process;
