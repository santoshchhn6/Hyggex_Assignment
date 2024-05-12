const CustomInput = ({ onChange, placeholder = "", className = "" }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full outline-none bg-white text-[1.125rem] p-3 rounded-lg border border-blue-800 text-neutral-700  ${className}`}
    />
  );
};

export default CustomInput;
