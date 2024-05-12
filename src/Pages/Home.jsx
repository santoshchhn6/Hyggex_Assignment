import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShouldRedirect } from "../redux/appSlice";

const Home = () => {
  const navigate = useNavigate();
  const { shouldRedirect } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  // const [shouldRedirect, setShouldRedirect] = useState(true);

  useEffect(() => {
    if (shouldRedirect) {
      setTimeout(
        () => navigate("/flashcard/mathematics/relation_and_function"),
        0
      );
    }
    dispatch(setShouldRedirect(false));
  }, []);

  return (
    <div className=" ">
      <Hero />
    </div>
  );
};

const Hero = () => {
  return (
    <div className=" h-[70vh] flex flex-col justify-center items-center gap-8 text-center">
      <h1 className=" text-3xl md:text-5xl p-3 font-montserrat font-semibold bg-gradient-to-b from-blue-950 to-blue-700 text-transparent bg-clip-text">
        The Future of Learning!
      </h1>
      <p className="text-xl font-bold">
        We blend adaptive learning with your well-being, creating a unique
        academic journey just for you!
      </p>
      <CustomButton>Get Started</CustomButton>
    </div>
  );
};

export default Home;
