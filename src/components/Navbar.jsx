// import { a } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { links } from "../utils/links";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className="lg:block hidden">
      <ul className="flex gap-12 text-lg capitalize">
        {links.map((link, i) => {
          return (
            <li key={i} className="group relative">
              <a
                className=" hover:text-gray-400 transition-colors items-center flex gap-2 text-white"
                href=""
              >
                {link.text}
                <BiChevronDown className="" />
              </a>
              <Dropdown menu={link.menu} />
            </li>
          );
        })}
        <li>
          <a
            className="hover:text-gray-400 transition-colors items-center flex gap-2 text-white"
            to={""}
          >
            contact
          </a>
        </li>

        <li>
          <a
            className="hover:text-gray-400  transition-colors items-center flex gap-2 text-white"
            href=""
          >
            about
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
