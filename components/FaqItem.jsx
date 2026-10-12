const FaqItem = ({ id, question, answer, isOpen, onToggle }) => (
  <div className="border-b-[1px] border-white/10">
    <h3>
      <button
        type="button"
        id={`${id}-button`}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
      >
        <span className="font-semibold sm:text-[20px] text-[17px] sm:leading-[30px] leading-[26px] text-white">{question}</span>
        <span
          className={`flex items-center justify-center shrink-0 w-[36px] h-[36px] rounded-full border-[1px] border-white/40 text-white text-[22px] leading-none transition-transform duration-300 ${isOpen ? 'rotate-45 border-forge text-forge' : ''}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
    </h3>
    <div
      id={`${id}-panel`}
      role="region"
      aria-labelledby={`${id}-button`}
      hidden={!isOpen}
      className="pb-6 pr-12"
    >
      <p className="font-normal sm:text-[17px] text-[15px] sm:leading-[28px] leading-[24px] text-secondary-white">{answer}</p>
    </div>
  </div>
);

export default FaqItem;
