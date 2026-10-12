'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, iconUrl, label, title, description, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-none h-[560px]' : 'lg:flex-[0.5] flex-none h-[120px]'
    } flex items-center justify-center min-w-[170px] lg:h-[620px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick(id);
      }
    }}
    role="button"
    tabIndex={0}
    aria-expanded={active === id}
    aria-label={label}
  >
    <img src={imgUrl} alt="" className="absolute w-full h-full object-cover rounded-[24px]" />

    { active !== id ? (
      <h3 className="font-semibold sm:text-[24px] text-[18px] text-white absolute z-0 lg:bottom-10 lg:[writing-mode:vertical-rl] lg:rotate-180 lg:whitespace-nowrap lg:px-0 px-6 text-center">
        {label}
      </h3>
    ) : (
      <div className="absolute bottom-0 sm:p-8 p-6 justify-start w-full flex-col bg-[rgba(0,0,0,0.55)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] glassmorphism mb-[16px] rounded-[12px]`}>
          <img src={iconUrl} alt="" className="w-1/2 h-1/2 object-contain" />
        </div>
        <h3 className="font-normal text-[16px] leading-[20.16px] text-forge uppercase tracking-[0.08em]">{label}</h3>
        <p className="mt-[16px] font-semibold sm:text-[32px] text-[24px] sm:leading-[40px] leading-[30px] text-white">
          {title}
        </p>
        <p className="mt-[12px] font-normal sm:text-[18px] text-[15px] sm:leading-[28px] leading-[24px] text-secondary-white max-w-[620px]">
          {description}
        </p>
      </div>
    )}
  </motion.div>

);

export default ExploreCard;
