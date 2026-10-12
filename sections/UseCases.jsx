'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { useCases } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';

const UseCases = () => (
  <section className={`${styles.paddings} relative z-10`} id="use-cases">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Support Areas" textStyles="text-center" />
      <TitleText title={<>Where managed AI support <br className="lg:block hidden" />can help</>} textStyles="text-center" />
      <p className="mt-[16px] mx-auto max-w-[760px] font-normal sm:text-[18px] text-[15px] sm:leading-[30px] leading-[24px] text-secondary-white text-center">
        Examples of situations we can look into. Every environment is different, so support is shaped around the systems you already run.
      </p>

      <div className="mt-[50px] grid md:grid-cols-2 grid-cols-1 gap-[24px]">
        {useCases.map((useCase, i) => (
          <InsightCard
            key={useCase.title}
            {...useCase}
            index={i + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default UseCases;
