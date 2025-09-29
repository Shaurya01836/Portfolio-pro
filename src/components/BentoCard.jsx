

const BentoCard = ({ children, className }) => {
  return (
    <div
      className={`rounded-3xl border border-gray-200 flex flex-col items-center justify-center text-center ${className}`}
    >
      {children}
    </div>
  );
};

export default BentoCard;
