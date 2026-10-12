import styles from '../styles';

const StartSteps = ({ number, title, text }) => (
  <div className={`${styles.flexStart} flex-row`}>
    <div className={`${styles.flexCenter} shrink-0 w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">0{number}</p>
    </div>
    <div className="flex-1 ml-[30px]">
      <h3 className="font-bold text-[22px] leading-[30px] text-white">{title}</h3>
      <p className="mt-[6px] font-normal text-[18px] text-[#b0b0b0] leading-[30px]">{text}</p>
    </div>
  </div>
);

export default StartSteps;
