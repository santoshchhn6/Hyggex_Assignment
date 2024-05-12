import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
const Logo = () => {
  return (
    <Link to="/" className="-ml-10 md:ml-0">
      <img src={logo} alt="" className="" />
    </Link>
  );
};

export default Logo;
