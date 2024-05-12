import { FaPlus } from "react-icons/fa";
import CustomButton from "./CustomButton";
import logo from "../assets/Images/logo2.png";

const CreateFlashcard = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center">
      <img src={logo} alt="" className="hidden md:inline" />
      <div className="flex  items-center gap-3">
        <div className=" bg-gradient-to-b from-blue-950 to-blue-700 hover:from-blue-900 hover:to-blue-600 text-white  rounded-full w-[40px] md:w-[50px] aspect-square flex justify-center items-center cursor-pointer">
          <FaPlus className="text-[2rem]" />
        </div>
        <span className="text-[1.2rem] md:text-[1.75rem] text-blue-950 font-semibold">
          Create Flashcard
        </span>
      </div>
    </div>
  );
};

export default CreateFlashcard;
