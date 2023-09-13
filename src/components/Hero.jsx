import vector from "../assets/image/h13-sl-img-1.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" hero p-2  w-full bg-cover relative">
      <div className="custom-shape-divider-bottom-1692084398">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="z-10">
          <motion.h1
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.3,
              damping: 13,
              type: "spring",
            }}
            className="mb_l:text-6xl text-4xl  text-white"
          >
            Mobile Apps <br /> for finance startup
          </motion.h1>

          <motion.p
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-white mt-14 text-xl sm:w-[34rem]  "
          >
            Enjoy group chats with your contacts so you can easily stay in touch
            with your friends or family.
          </motion.p>

          <motion.button
            whileHover={{ y: -8, boxShadow: "0 5px 10px #ffffff46" }}
            className="text-base mt-14 text-blue-600 shadow-2xl z-20 capitalize py-4 px-12  bg-white rounded-[30px]"
          >
            try a live demo
          </motion.button>
        </div>

        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            damping: 17,
            bounce: 0.6,
            stiffness: 700,
            duration: 0.3,
          }}
          className="z-10 md:w-[42rem] w-auto"
        >
          <img src={vector} alt="vector" />
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
