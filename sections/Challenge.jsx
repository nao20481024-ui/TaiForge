'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import styles from '../styles';
import { challenges } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';

const Challenge = () => (
  <section className={`${styles.paddings} relative z-10`} id="challenge">
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| The Challenge"
        textStyles="text-center"
      />
      <TitleText
        title={<>AI works great — <br className="md:block hidden" />until something breaks.</>}
        textStyles="text-center max-w-[1100px]"
      />

      <motion.ul
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[48px] grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {challenges.map((challenge) => (
          <li key={challenge.title} className="flex h-full flex-col rounded-[24px] border border-white/10 p-6 gradient-05">
            <h3 className="font-bold text-[18px] leading-[26px] text-white">{challenge.title}</h3>
            <p className="mt-[10px] font-normal text-[15px] leading-[24px] text-secondary-white">{challenge.text}</p>
          </li>
        ))}
      </motion.ul>

      <motion.p
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="mt-[48px] max-w-[1080px] text-center font-normal text-[20px] leading-[32px] text-secondary-white sm:text-[28px] sm:leading-[44px]"
      >
        <span className="font-extrabold text-white">TAI Forge</span> looks after the AI you already run. We watch for silent failures, repair broken connections, and keep performance, cost, and support ownership clear through <span className="font-extrabold text-white">monitoring</span>, <span className="font-extrabold text-white">troubleshooting</span>, <span className="font-extrabold text-white">maintenance</span>, and <span className="font-extrabold text-white">optimization</span>.
      </motion.p>

      <motion.a
        href="#solutions"
        variants={fadeIn('up', 'tween', 0.4, 1)}
        aria-label="Continue to our services"
      >
        <img
          src="/arrow-down.svg"
          alt=""
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.a>
    </motion.div>
  </section>
);

export default Challenge;
