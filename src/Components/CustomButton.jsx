const CustomButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-b from-blue-950 to-blue-700 hover:from-blue-900 hover:to-blue-600 text-[1.125rem] text-white font-medium py-2 px-6 ease-out duration-300 rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
