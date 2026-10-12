'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, ExploreCard, TitleText } from '../components';
import { staggerContainer } from '../utils/motion';

import { solutions } from '../constants';

const Solutions = () => {
  const [active, setActive] = useState('solution-automation');

  return (
    <section className={`${styles.paddings}`} id="solutions">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Our Solutions" textStyles="text-center" />
        <TitleText title={<>Four ways we put AI <br className="md:block hidden" />to work for your business</>} textStyles="text-center" />
        <p className="mt-[16px] mx-auto max-w-[760px] font-normal sm:text-[18px] text-[15px] sm:leading-[30px] leading-[24px] text-secondary-white text-center">
          From a single automated process to an AI agent working across your tools, every solution is designed around how your business already operates.
        </p>

        <div className="mt-[50px] flex lg:flex-row flex-col gap-5">
          {solutions.map((solution, index) => (
            <ExploreCard
              key={solution.id}
              {...solution}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Solutions;
