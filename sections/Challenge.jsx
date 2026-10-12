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
        title={<>Your business doesn't need more busywork. <br className="md:block hidden" />It needs better workflows.</>}
        textStyles="text-center max-w-[1200px]"
      />

      <motion.ul
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[48px] w-full grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-5"
      >
        {challenges.map((challenge) => (
          <li key={challenge.title} className="p-6 rounded-[24px] border-[1px] border-white/10 gradient-05">
            <h3 className="font-bold text-[18px] leading-[26px] text-white">{challenge.title}</h3>
            <p className="mt-[10px] font-normal text-[15px] leading-[24px] text-secondary-white">{challenge.text}</p>
          </li>
        ))}
      </motion.ul>

      <motion.p
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="mt-[48px] font-normal sm:text-[28px] text-[20px] sm:leading-[44px] leading-[32px] text-center text-secondary-white max-w-[1080px]"
      >
        <span className="font-extrabold text-white">TaiForge</span> helps you fix the work behind the work. Through carefully designed <span className="font-extrabold text-white">workflow automation</span>, <span className="font-extrabold text-white">systems integration</span>, and <span className="font-extrabold text-white">AI-enabled processes</span>, we remove unnecessary manual steps so your team can focus on the work that moves your business forward.
      </motion.p>

      <motion.a
        href="#solutions"
        variants={fadeIn('up', 'tween', 0.4, 1)}
        aria-label="Continue to our solutions"
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
