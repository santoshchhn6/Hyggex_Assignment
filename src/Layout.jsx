import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import NavView from "./Components/NavView";

const Layout = () => {
  return (
    <div className="bg-gray-200  text-gray-600 font-inter">
      <div className="bg-gray-50 max-w-[1440px] mx-auto px-3 md:px-10 lg:px-24">
        <Header />
        <NavView />
        <div className=" min-h-screen  py-8">
          <Outlet />
        </div>
        
      </div>
    </div>
  );
};

export default Layout;
