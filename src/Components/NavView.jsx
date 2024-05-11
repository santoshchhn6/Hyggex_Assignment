import { GrHomeRounded } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";

const NavView = () => {
  return (
    <div className="hidden md:flex items-center gap-3 py-9">
      <GrHomeRounded size={32} />
      <div className="flex items-center gap-2 text-2xl">
        <MdKeyboardArrowRight size={32} className="text-blue-900" />
        <span>Flashcard</span>
        <MdKeyboardArrowRight size={32} className="text-blue-900" />
        <span>Mathematics</span>
        <MdKeyboardArrowRight size={32} className="text-blue-900" />
        <span className="text-blue-950 font-semibold">
          Relation and Function
        </span>
      </div>
    </div>
  );
};

export default NavView;
