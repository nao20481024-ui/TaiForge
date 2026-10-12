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
      <TypingText title="| Business Applications" textStyles="text-center" />
      <TitleText title={<>What business process automation <br className="lg:block hidden" />can look like in practice</>} textStyles="text-center" />
      <p className="mt-[16px] mx-auto max-w-[760px] font-normal sm:text-[18px] text-[15px] sm:leading-[30px] leading-[24px] text-secondary-white text-center">
        A few examples of the workflows we can help design and build. Every business is different, so we shape each solution around your processes and systems.
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
