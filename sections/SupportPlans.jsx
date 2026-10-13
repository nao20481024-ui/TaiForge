'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { contactIntentUrl, discoveryCallUrl, healthCheck, supportPlans } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-[2px] h-[18px] w-[18px] shrink-0 text-forge">
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12.2l2.4 2.4L16.2 9" />
  </svg>
);

const SupportPlans = () => (
  <section className={`${styles.paddings} relative z-10`} id="plans">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Support Plans" textStyles="text-center" />
      <TitleText title="Start with a health check" textStyles="text-center" />
      <p className="mx-auto mt-[16px] max-w-[760px] text-center font-normal text-[15px] leading-[24px] text-secondary-white sm:text-[18px] sm:leading-[30px]">
        Ongoing care is quoted for the agents, automations, and integrations you already run. Pricing and response commitments are confirmed in that quote.
      </p>

      <motion.article
        variants={fadeIn('up', 'tween', 0.15, 0.8)}
        className="relative mt-12 overflow-hidden rounded-[32px] border border-forge/45 bg-[#141c26] p-6 sm:p-10"
      >
        <div className="pointer-events-none absolute -right-16 -top-24 h-[280px] w-[280px] rounded-full bg-forge/15 blur-[100px]" />
        <div className="relative grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <div>
            <p className="font-normal text-[12px] uppercase tracking-[0.2em] text-forge sm:text-[13px] sm:tracking-[0.22em]">
              {healthCheck.eyebrow}
            </p>
            <h3 className="mt-4 font-bold text-[32px] leading-[40px] text-white sm:text-[44px] sm:leading-[52px]">
              {healthCheck.title}
            </h3>
            <p className="mt-4 max-w-[560px] font-normal text-[16px] leading-[26px] text-secondary-white sm:text-[18px] sm:leading-[30px]">
              {healthCheck.summary}
            </p>
            <Link href={discoveryCallUrl} className={`${styles.primaryButton} mt-8 w-full sm:w-auto`}>
              Request an AI Health Check
            </Link>
          </div>
          <ul className="flex flex-col gap-4 rounded-[24px] border border-white/10 bg-primary-black/50 p-5 sm:p-6">
            {healthCheck.includes.map((item) => (
              <li key={item} className="flex gap-3 font-normal text-[15px] leading-[24px] text-white sm:text-[16px] sm:leading-[26px]">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.article>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {supportPlans.map((plan, index) => (
          <motion.article
            key={plan.id}
            variants={fadeIn('up', 'spring', 0.1 + (index * 0.08), 0.75)}
            className="flex h-full flex-col rounded-[32px] border border-white/10 p-6 gradient-05 sm:p-8"
          >
            <h3 className="font-bold text-[28px] leading-[34px] text-white">{plan.name}</h3>
            <p className="mt-3 font-normal text-[14px] uppercase tracking-[0.12em] text-brand-sky">
              {plan.audience}
            </p>
            <p className="mt-4 font-normal text-[16px] leading-[26px] text-secondary-white">
              {plan.summary}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {plan.includes.map((item) => (
                <li key={item} className="flex gap-3 font-normal text-[15px] leading-[24px] text-white">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <p className="mb-4 font-normal text-[14px] leading-[22px] text-secondary-white">
                Scope and price are confirmed in a quote.
              </p>
              <Link
                href={contactIntentUrl(plan.id)}
                aria-label={`Request a quote for ${plan.name}`}
                className={`${styles.primaryButton} w-full`}
              >
                Request a Quote
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-[720px] text-center font-normal text-[14px] leading-[22px] text-secondary-white">
        Plans are quoted for your environment. This page does not list prices or service-level commitments.
      </p>
    </motion.div>
  </section>
);

export default SupportPlans;
