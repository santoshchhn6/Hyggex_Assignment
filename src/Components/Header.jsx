import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { navlist } from "../utils/navlist";
import CustomButton from "./CustomButton";

const Header = () => {
  return (
    <div className="flex gap-3 py-8">
      <Menu />
      <div className=" w-full flex justify-center md:justify-between items-center">
        <Logo />

        <div className="hidden md:flex flex-row gap-5 lg:gap-10">
          <Nav />
          <CustomButton>Login</CustomButton>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [show, setShow] = useState(false);
  return (
    <div onClick={() => setShow(!show)} className="md:hidden relative">
      <CiMenuBurger
        size={40}
        className="  text-gray-600 hover:text-blue-600 ease-out duration-300 cursor-pointer"
      />
      {show ? <MenuOptions /> : null}
    </div>
  );
};

const MenuOptions = () => {
  return (
    <div className="p-5 flex flex-col  gap-3 border shadow-md border-gray-500 bg-white absolute top-16 -left-3 bg-red z-10">
      {navlist.map((nav, index) => (
        <Link
          key={index}
          to={nav.to}
          className="whitespace-nowrap hover:text-blue-700"
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex space-x-8">
      {navlist.map((nav, index) => (
        <button
          key={index}
          onClick={() => {
            navigate(nav.to);
          }}
          className={`text-gray-500 text-[1.125rem]  hover:text-blue-800 ease-out duration-300 `}
        >
          {nav.title}
        </button>
      ))}
    </div>
  );
};

export default Header;
