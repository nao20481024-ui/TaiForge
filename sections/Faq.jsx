'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { discoveryCallUrl, faqs } from '../constants';
import { FaqItem, TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`${styles.paddings} relative z-10`} id="faq">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-10`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="lg:flex-[0.4] flex flex-col justify-between gradient-05 sm:p-8 p-6 rounded-[32px] border-[1px] border-[#6a6a6a] relative overflow-hidden h-fit"
        >
          <div className="feedback-gradient" />
          <div className="relative">
            <TypingText title="| FAQ" />
            <TitleText title="Questions, answered" />
            <p className="mt-[16px] font-normal sm:text-[18px] text-[15px] sm:leading-[30px] leading-[25px] text-secondary-white">
              Every project is different. Scope, integrations, approval steps, and implementation methods depend on your needs, and we'll be clear about what is and isn't feasible.
            </p>
          </div>
          <a href={discoveryCallUrl} className={`${styles.primaryButton} relative mt-[32px] self-start`}>
            Book an AI Discovery Call
          </a>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-1 flex flex-col border-t-[1px] border-white/10"
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              id={`faq-${index + 1}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Faq;
