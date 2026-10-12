'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ index, title, subtitle }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.15, 1)}
    className="flex flex-row gap-5 sm:p-8 p-6 rounded-[32px] border-[1px] border-white/10 gradient-05 hover:border-white/30 transition-colors"
  >
    <div className="flex items-center justify-center shrink-0 w-[56px] h-[56px] rounded-full bg-transparent border-[1px] border-white/60">
      <span className="font-bold text-[16px] text-forge">{String(index).padStart(2, '0')}</span>
    </div>
    <div className="flex-1 flex flex-col">
      <h3 className="font-semibold lg:text-[24px] text-[20px] lg:leading-[32px] leading-[28px] text-white">{title}</h3>
      <p className="mt-[10px] font-normal lg:text-[17px] text-[14px] lg:leading-[27px] leading-[22px] text-secondary-white">{subtitle}</p>
    </div>
  </motion.div>
);

export default InsightCard;
