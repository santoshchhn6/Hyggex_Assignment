import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import CustomButton from "../Components/CustomButton";
import CustomInput from "../Components/CustomInput";
import CustomTextarea from "../Components/CustomTextarea";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <h1
        className={
          "text-center text-3xl my-3 md:my-10 font-montserrat font-bold bg-gradient-to-b from-blue-950 to-blue-700 text-transparent bg-clip-text"
        }
      >
        Contact Us
      </h1>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-3 ">
        <div className="w-full md:max-w-[500px] flex-1 flex gap-5 flex-col items-center border px-6 py-10 bg-white shadow-md">
          <CustomInput placeholder="Name" />
          <CustomInput placeholder="Email" />
          <CustomTextarea placeholder="Message" />
          <CustomButton>Send Message</CustomButton>
        </div>

        <div className="w-full md:max-w-[500px] flex-1 flex items-center  border px-6 py-10 bg-white shadow-md">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="flex gap-8 flex-col justify-center">
      <IconWithLabel label={"Thane, Maharashtra, India"}>
        <FaMapMarkerAlt />
      </IconWithLabel>
      <IconWithLabel label={"+91 1234567890"}>
        <FaPhoneAlt />
      </IconWithLabel>
      <IconWithLabel label={"example@gmail.com"}>
        <MdEmail />
      </IconWithLabel>
    </div>
  );
};

const IconWithLabel = ({ children, label }) => {
  return (
    <div className="flex items-center gap-3 text-xl text-gray-700 ">
      <div className="bg-gray-300 p-3 rounded-full">{children}</div>
      <span>{label}</span>
    </div>
  );
};

export default Contact;
