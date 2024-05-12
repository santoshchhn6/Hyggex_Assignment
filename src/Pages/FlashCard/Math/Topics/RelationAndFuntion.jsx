import Flashcard from "../../../../Components/Flashcard";

const RelationAndFuntion = () => {
  const data = [
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
    <Flashcard
      heading={" Relations and Functions ( Mathematics )"}
      data={data}
    />
  );
};

export default RelationAndFuntion;
