import { GrHomeRounded } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation } from "react-router-dom";

const NavView = () => {
  const location = useLocation();

  const paths = location.pathname.split("/");
  paths.shift();

  const getFullName = (path) => {
    switch (path) {
      case "relation_and_function":
        return "Relation and Function";

      case "faq":
        return "FAQ";

      default:
        return path[0]?.toUpperCase() + path.slice(1);
    }
  };

//   console.log(location);
  return (
    <>
      {location.pathname === "/" ? null : (
        <div className="hidden md:flex items-center gap-3 py-9">
          <GrHomeRounded size={25} className="text-gray-600" />
          <div className="flex items-center gap-2 text-[1.125rem] font-medium">
            {paths?.map((e, i) => (
              <div key={i} className="flex items-center gap-2">
                <MdKeyboardArrowRight size={25} className="text-blue-900" />
                <span>{getFullName(e)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavView;
