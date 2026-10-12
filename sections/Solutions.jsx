'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, ExploreCard, TitleText } from '../components';
import { staggerContainer } from '../utils/motion';

import { solutions } from '../constants';

const Solutions = () => {
  const [active, setActive] = useState('service-watch');

  return (
    <section className={`${styles.paddings}`} id="solutions">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Our Services" textStyles="text-center" />
        <TitleText title={<>Four ways we look after <br className="md:block hidden" />the AI you already run</>} textStyles="text-center" />
        <p className="mt-[16px] mx-auto max-w-[760px] font-normal sm:text-[18px] text-[15px] sm:leading-[30px] leading-[24px] text-secondary-white text-center">
          Watch, resolve, maintain, and optimize the agents, automations, and integrations already in your business.
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
