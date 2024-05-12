import { useNavigate } from "react-router-dom";
import CustomButton from "../../../Components/CustomButton";

const Mathematics = () => {
  const navigate = useNavigate();
  const cards = [
    {
      label: "Relation and Function",
      to: "/flashcard/mathematics/relation_and_function",
    },
    { label: "Algebra", to: "" },
    { label: "Calculus", to: "" },
    { label: "Linear Programming", to: "" },
  ];
  return (
    <div className="space-y-8">
      <h1 className="text-center text-3xl md:text-5xl p-3 font-montserrat font-semibold bg-gradient-to-b from-blue-950 to-blue-700 text-transparent bg-clip-text">
        Mathematics
      </h1>
      <div className="flex justify-center ">
        <div className="w-64 flex flex-col gap-8">
          {cards.map((e, i) => (
            <CustomButton key={i} onClick={() => navigate(e.to)}>
              {e.label}
            </CustomButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mathematics;
