import { MdOutlineArrowRight } from "react-icons/md";
import { Spin as Hamburger } from "hamburger-react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="absolute w-full z-20 py-4 px-7 flex items-center justify-between">
      <button className="lg:hidden block">
        <Hamburger color="#fff" distance="sm" />
      </button>
      <div className="">
        <img
          src="https://anon.wp1.zootemplate.com/wp-content/uploads/2020/01/header-logo-w.png"
          alt="logo"
        />
      </div>
      <Navbar />

      <button className="group relative  text-white mb_l:w-[12rem] w-[10rem] justify-between bg-orange-600 py-4 px-4 rounded-[26px] flex items-center">
        <span
          className="after:w-7 group-hover:after:-right-1 
        after:transition-all  mb_l:after:block  after:duration-300  after:hidden after:absolute
         after:top-1/2 after:right-8
          after:bg-white after:h-[.1px] after:group-hover:opacity-0
          "
        >
          Download App
        </span>
        <MdOutlineArrowRight className="text-white text-2xl" />
      </button>
    </header>
  );
};
export default Header;
