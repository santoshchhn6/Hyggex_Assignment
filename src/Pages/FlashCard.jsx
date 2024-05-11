import { useState } from "react";
import { AiOutlineBulb } from "react-icons/ai";
import speaker from "../assets/Images/speaker.svg";
import { GrPowerReset } from "react-icons/gr";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaPlus,
} from "react-icons/fa";
import CustomButton from "../Components/CustomButton";
import { BiCollapse } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setExpanded } from "../redux/flashcardSlice";
import logo from "../assets/Images/logo2.png";
import Faq from "../Components/Faq";

const FlashCard = () => {
  return (
    <div className="space-y-8 md:space-y-14">
      <p className="text-[1.1rem] sm:text-[1.7rem] md:text-[2rem] font-montserrat font-bold bg-gradient-to-b from-blue-950 to-blue-700 text-transparent bg-clip-text">
        Relations and Functions ( Mathematics )
      </p>
      <CardTabs />
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <img src={logo} alt="" className="hidden md:inline" />
        <div className="flex  items-center gap-3">
          <CustomButton className="w-[40px] md:w-[50px] aspect-square flex justify-center items-center px-2 py-2 text-3xl">
            <FaPlus />
          </CustomButton>
          <span className="text-[1.2rem] md:text-[1.75rem] text-blue-950 font-semibold">
            Create Flashcard
          </span>
        </div>
      </div>
      <Faq />
    </div>
  );
};

const CardTabs = () => {
  const [active, setActive] = useState("Study");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const { expanded } = useSelector((state) => state.flashcard);
  const tabs = [
    {
      label: "Study",
      question: [
        "9 + 6 + 7x - 2x - 3",
        "study 2",
        "study 3",
        "study 4",
        "study 5",
        "study 6",
        "study 7",
        "study 8",
        "study 9",
        "study 10",
      ],
    },
    {
      label: "Quiz",
      question: [
        "Quiz 1",
        "Quiz 2",
        "Quiz 3",
        "Quiz 4",
        "Quiz 5",
        "Quiz 6",
        "Quiz 7",
        "Quiz 8",
        "Quiz 9",
        "Quiz 10",
      ],
    },
    {
      label: "Test",
      question: [
        "Test 1",
        "Test 2",
        "Test 3",
        "Test 4",
        "Test 5",
        "Test 6",
        "Test 7",
        "Test 8",
        "Test 9",
        "Test 10",
      ],
    },
    {
      label: "Game",
      question: [
        "Game 1",
        "Game 2",
        "Game 3",
        "Game 4",
        "Game 5",
        "Game 6",
        "Game 7",
        "Game 8",
        "Game 9",
        "Game 10",
      ],
    },
    {
      label: "Others",
      question: [
        "Others 1",
        "Others 2",
        "Others 3",
        "Others 4",
        "Others 5",
        "Others 6",
        "Others 7",
        "Others 8",
        "Others 9",
        "Others 10",
      ],
    },
  ];

  return (
    <div className="flex justify-center ">
      <div
        className={`w-full ${
          expanded ? "md:w-full" : "md:w-[712px]"
        }  space-y-8`}
      >
        <div className="flex justify-center gap-3 md:gap-10">
          {tabs.map((tab, i) => (
            <span
              key={i}
              onClick={() => setActive(tab.label)}
              className={` ${
                active === tab.label
                  ? "font-bold text-blue-950 border-b-4 border-blue-950"
                  : "font-medium text-gray-700"
              } font-inter text-[1rem] md:text-[1.25rem] cursor-pointer py-2 px-4 hover:text-blue-950`}
            >
              {tab.label}
            </span>
          ))}
        </div>
        <Card
          data={tabs.find((e) => e.label === active).question}
          currentQuestion={currentQuestion}
        />
        <Controls
          currentQuestion={currentQuestion}
          setCurrentQuestion={(value) => setCurrentQuestion(value)}
          data={tabs.find((e) => e.label === active).question}
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
          className="w-[60px] aspect-square flex justify-center items-center px-2 py-2 text-3xl"
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
          className="w-[60px] aspect-square flex justify-center items-center px-2 py-2 text-3xl"
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

export default FlashCard;
