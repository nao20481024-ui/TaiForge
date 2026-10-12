'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const MAP_WIDTH = 3510;
const MAP_HEIGHT = 1578;
const origin = { x: 2735, y: 715 };
const regions = [
  { name: 'North America', x: 450, y: 420, route: 'Q 1600 0' },
  { name: 'Europe', x: 1600, y: 330, route: 'Q 2200 150' },
  { name: 'Asia-Pacific', x: 3100, y: 1230, route: 'Q 3150 850' },
];

const toPercent = (point) => ({
  left: `${(point.x / MAP_WIDTH) * 100}%`,
  top: `${(point.y / MAP_HEIGHT) * 100}%`,
});

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| About TAI Forge" textStyles="text-center" />
      <TitleText title="Taiwan roots. Global ambition." textStyles="text-center" />

      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[40px] grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6 font-normal sm:text-[18px] text-[15px] sm:leading-[30px] leading-[25px] text-secondary-white"
      >
        <div className="flex flex-col gap-6">
          <p>
            TAI Forge was founded on a simple belief: <span className="font-bold text-white">AI systems need care after they go live.</span> Monitoring, maintenance, troubleshooting, and optimization are part of keeping them useful.
          </p>
          <p>
            Our name brings together <span className="font-bold text-white">Tai</span>, a nod to our roots in Taiwan, and <span className="font-bold text-white">Forge</span>, the craft of shaping something useful and built to last. We apply that to the AI agents, automations, and integrations businesses already depend on.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p>
            We start by understanding what is running, where it struggles, and how your team uses it. From there we monitor, troubleshoot, maintain, and optimize.
          </p>
          <p>
            Our ambition is global: to help businesses everywhere keep their AI operations in good working order.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[56px] w-full aspect-[3510/1578]"
      >
        <img
          src="/map.png"
          alt="World map showing TAI Forge based in Taiwan, with a global outlook toward North America, Europe, and Asia-Pacific"
          className="w-full h-full object-contain"
        />

        <svg
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {regions.map((region) => (
            <path
              key={region.name}
              d={`M ${origin.x} ${origin.y} ${region.route} ${region.x} ${region.y}`}
              stroke="#7FC8EE"
              strokeOpacity="0.7"
              strokeWidth="5"
              fill="none"
              vectorEffect="non-scaling-stroke"
              className="map-route"
            />
          ))}
        </svg>

        {regions.map((region) => (
          <div
            key={region.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={toPercent(region)}
          >
            <span className="block sm:w-[16px] sm:h-[16px] w-[10px] h-[10px] rounded-full bg-brand-sky border-[3px] border-primary-black" />
            <span className="md:block hidden absolute top-[22px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[13px] text-secondary-white">
              {region.name}
            </span>
          </div>
        ))}

        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={toPercent(origin)}
        >
          <span className="map-pulse absolute inset-0 rounded-full bg-forge" />
          <span className="relative block sm:w-[22px] sm:h-[22px] w-[14px] h-[14px] rounded-full bg-forge border-[4px] border-primary-black" />
          <span className="sm:block hidden absolute -top-[44px] left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-forge text-primary-black text-[13px] font-bold">
            Taiwan
          </span>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
