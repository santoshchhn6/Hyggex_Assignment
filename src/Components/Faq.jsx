import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Faq = () => {
  const faqs = [
    {
      question: "Can education flashcards be used for all age groups?",
      answer:
        "Absolutely! Flashcards can be a powerful learning tool for people of all ages",
    },
    {
      question: "How do education flashcards work?",
      answer:
        "Education flashcards work by leveraging a few key cognitive processes to boost memory and learning",
    },
    {
      question: "Can education flashcards be used for test preparation?",
      answer:
        "Absolutely! Education flashcards are a fantastic tool for test preparation. They target several aspects that are crucial for exam success",
    },
  ];
  return (
    <div className="pt-24 pb-72 space-y-12 ">
      <h1 className="font-bold text-[3rem] bg-gradient-to-b from-blue-950 to-blue-700 text-transparent bg-clip-text">
        FAQ
      </h1>
      {faqs.map((e, i) => (
        <QuestionAnswer key={i} question={e.question} answer={e.answer} />
      ))}
    </div>
  );
};

const QuestionAnswer = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="w-full md:w-[848px]">
      <Question
        question={question}
        showAnswer={showAnswer}
        setShowAnswer={(value) => setShowAnswer(value)}
      />
      {showAnswer ? <Answer answer={answer} /> : null}
    </div>
  );
};

const Question = ({ question, showAnswer, setShowAnswer }) => {
  return (
    <div
      onClick={() => setShowAnswer(!showAnswer)}
      className=" flex justify-between p-6 rounded-xl cursor-pointer border border-blue-800 text-neutral-800"
    >
      <span className="text-[1rem] font-semibold ">{question}</span>
      {showAnswer ? (
        <SlArrowUp className="text-xl" />
      ) : (
        <SlArrowDown className="text-xl" />
      )}
    </div>
  );
};

const Answer = ({ answer }) => {
  return (
    <p className="font-inter p-6 rounded-b-xl border border-t-0 border-gray-500 text-neutral-700 shadow-md mx-4 z-10 ">
      {answer}
    </p>
  );
};

export default Faq;
