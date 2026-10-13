'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { ServiceCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';
import { solutions } from '../constants';

const Solutions = () => (
  <section className={`${styles.paddings}`} id="solutions">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Services" textStyles="text-center" />
      <TitleText
        title={<>Managed AI Support Services</>}
        textStyles="text-center"
      />
      <p className="mx-auto mt-[16px] max-w-[760px] text-center font-normal text-[15px] leading-[24px] text-secondary-white sm:text-[18px] sm:leading-[30px]">
        Ongoing care for the agents, automations, and integrations already in your business.
      </p>

      <div className="mt-[50px] grid grid-cols-1 gap-5 md:grid-cols-2">
        {solutions.map((solution, index) => (
          <ServiceCard
            key={solution.id}
            {...solution}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Solutions;
