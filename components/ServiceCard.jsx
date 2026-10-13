'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ServiceCard = ({ imgUrl, label, description, index }) => (
  <motion.article
    variants={fadeIn('up', 'spring', index * 0.12, 0.75)}
    className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#121a24] transition-colors duration-300 hover:border-white/25"
  >
    <div className="overflow-hidden border-b border-white/10">
      <img
        src={imgUrl}
        alt=""
        width={1280}
        height={800}
        loading="lazy"
        decoding="async"
        className="aspect-[8/5] w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
      />
    </div>
    <div className="flex flex-1 flex-col p-6 sm:p-7">
      <span className="mb-4 h-[2px] w-10 rounded-full bg-forge" aria-hidden="true" />
      <h3 className="font-bold text-[22px] leading-[28px] text-white sm:text-[24px] sm:leading-[30px]">
        {label}
      </h3>
      <p className="mt-3 font-normal text-[16px] leading-[26px] text-secondary-white">
        {description}
      </p>
    </div>
  </motion.article>
);

export default ServiceCard;
