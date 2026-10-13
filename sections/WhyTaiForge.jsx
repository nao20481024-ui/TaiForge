'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { differentiators } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhyTaiForge = () => (
  <section className={`${styles.paddings} relative z-10`} id="why-taiforge">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Why TAI Forge" />
        <TitleText title={<>An operations partner for the AI you already run</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[32px]">
          {differentiators.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/why-taiforge.svg"
          alt="Layered systems connected into a single workflow"
          width={700}
          height={700}
          className="h-[90%] w-[90%] max-w-[560px] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhyTaiForge;
