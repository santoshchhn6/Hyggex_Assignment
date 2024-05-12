const CustomTextarea = ({ onChange, placeholder = "", className = "" }) => {
  return (
    <textarea
      placeholder={placeholder}
      onChange={onChange}
      //   cols="30"
      //   rows="10"
      className={`w-full outline-none bg-white text-[1.125rem] p-3 rounded-lg border border-blue-800 text-neutral-700 resize-none ${className}`}
    />
  );
};

export default CustomTextarea;
