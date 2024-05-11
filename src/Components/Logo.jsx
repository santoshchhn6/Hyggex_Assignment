import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src={logo} alt="" className="" />
    </Link>
  );
};

export default Logo;
