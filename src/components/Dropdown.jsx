/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

const Dropdown = ({ menu }) => {
  return (
    <div
      className="bg-white rounded-md p-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] group-hover:opacity-100
     invisible group-hover:visible group-hover:top-[3rem] duration-500 absolute w-[max-content]
      top-[10rem] opacity-0 gap-16 transition-all flex  dropdown  z-50 "
    >
      <motion.span
        initial={{ y: 5 }}
        animate={{ y: 0 }}
        transition={{ delay: 3 }}
        className="arrow  shadow-2xl"
      ></motion.span>
      {menu.map((items, i) => {
        return (
          <div key={i}>
            <h1 className="font-[500] text-[1.1rem]">{items?.headText}</h1>
            <ul>
              {items.submenu?.map((link, i) => {
                return (
                  <li key={i} className="py-2 text-[1rem]">
                    <a
                      // href={link.url}
                      className="hover:text-gray-400 px-2 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default Dropdown;
