import { useState } from "react";
import { AiOutlineBulb } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import speaker from "../assets/Images/speaker.svg";
import { GrPowerReset } from "react-icons/gr";
import CustomButton from "./CustomButton";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";
import { BiCollapse } from "react-icons/bi";
import { setExpanded } from "../redux/flashcardSlice";
import CreateFlashcard from "./CreateFlashcard";
import Faq from "./Faq";

const Flashcard = ({ heading, data }) => {
  return (
    <div className="space-y-8 md:space-y-14">
      <p className="text-center md:text-left text-[1.1rem] sm:text-[1.7rem] md:text-[2rem] font-montserrat font-bold bg-gradient-to-b from-blue-950 to-blue-700 text-transparent bg-clip-text">
        {heading}
      </p>
      <CardTabs data={data} />
      <CreateFlashcard />
      <Faq />
    </div>
  );
};

const CardTabs = ({ data }) => {
  const [active, setActive] = useState("Study");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const { expanded } = useSelector((state) => state.flashcard);

  return (
    <div className="flex justify-center ">
      <div
        className={`w-full ${
          expanded ? "md:w-full" : "md:w-[712px]"
        }  space-y-8`}
      >
        <div className="flex justify-center gap-2 md:gap-10">
          {data.map((tab, i) => (
            <span
              key={i}
              onClick={() => setActive(tab.label)}
              className={` ${
                active === tab.label
                  ? "font-bold text-blue-950 border-b-4 border-blue-950"
                  : "font-medium text-gray-700"
              } font-inter text-[0.8rem] md:text-[1.25rem] cursor-pointer py-2 px-4 hover:text-blue-950`}
            >
              {tab.label}
            </span>
          ))}
        </div>
        <Card
          data={data?.find((e) => e.label === active).question}
          currentQuestion={currentQuestion}
        />
        <Controls
          currentQuestion={currentQuestion}
          setCurrentQuestion={(value) => setCurrentQuestion(value)}
          data={data?.find((e) => e.label === active).question}
        />
      </div>
    </div>
  );
};

const Card = ({ data, currentQuestion }) => {
  const { expanded } = useSelector((state) => state.flashcard);
  return (
    <div className="relative  w-[inherit] aspect-video">
      <div className="absolute  rounded-[2.5rem]  w-[inherit] aspect-video flex justify-center items-center bg-gradient-to-bl from-[#061C93]  to-[#2284F1] ">
        <span
          className={`${
            expanded ? "text-[5rem]" : "text-[2.3rem]"
          } text-white  font-lato_bl`}
        >
          {data[currentQuestion - 1]}
        </span>
      </div>
      <div className="absolute rounded-[2.5rem]  w-[inherit] aspect-video p-8">
        <div className="flex justify-between text-white text-4xl">
          <AiOutlineBulb className="cursor-pointer hover:text-blue-200" />
          <img
            src={speaker}
            alt=""
            className="cursor-pointer hover:text-blue-200"
          />
        </div>
      </div>
    </div>
  );
};

const Controls = ({ currentQuestion, data, setCurrentQuestion }) => {
  const { expanded } = useSelector((state) => state.flashcard);
  const dispatch = useDispatch();
  return (
    <div className=" flex gap-5 md:gap-36 justify-center items-center">
      <GrPowerReset
        onClick={() => setCurrentQuestion(1)}
        className="text-4xl text-blue-950 hover:text-blue-800 cursor-pointer"
      />
      <div className="flex gap-5 md:gap-11 items-center">
        <CustomButton
          onClick={() => {
            if (currentQuestion > 1) {
              setCurrentQuestion(currentQuestion - 1);
            }
          }}
          className="w-[60px] aspect-square flex justify-center items-center px-0 py-0  text-[2rem]"
        >
          <FaChevronLeft />
        </CustomButton>
        <span className="text-[1.5rem] font-bold text-blue-950">
          {currentQuestion < 10 ? 0 : null}
          {currentQuestion}/{data?.length}
        </span>
        <CustomButton
          onClick={() => {
            if (currentQuestion < data?.length) {
              setCurrentQuestion(currentQuestion + 1);
            }
          }}
          className="w-[60px] aspect-square flex justify-center items-center px-0 py-0  text-[2rem]"
        >
          <FaChevronRight />
        </CustomButton>
      </div>

      {expanded ? (
        <BiCollapse
          onClick={() => dispatch(setExpanded(false))}
          className="text-4xl text-blue-950 hover:text-blue-800 cursor-pointer"
        />
      ) : (
        <FaExpand
          onClick={() => dispatch(setExpanded(true))}
          className="text-4xl text-blue-950 hover:text-blue-800 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Flashcard;
