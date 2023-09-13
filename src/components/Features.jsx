import vector from "../assets/image/h13-banner-1.png";
import { useRef } from "react";
import { motion } from "framer-motion";

const Features = () => {
  const scrollRef = useRef(null);

  return (
    <section
      ref={scrollRef}
      className="flex justify-center lg:flex-row flex-col  gap-20 py-11 items-center sm:px-8 px-2"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1.4 }}
        className="mb_l:w-[35rem]"
      >
        <img src={vector} alt="vector_img" />
      </motion.div>

      <div className="mb_l:w-[34rem]">
        <h5 className="text-primaryblue text-lg ">FINANCIAL SOLUTIONS</h5>
        <motion.h1
          initial={{ y: -22, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 1 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1.2 }}
          className="mb_l:text-5xl text-3xl leading-none text-primaryblue  mt-5 font-semibold"
        >
          See Your Financial All In One Place
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.5 }}
          className="mt-14 text-slate-600 text-lg "
        >
          Stay on top of your spending by tracking what’s left after the bills
          are paid. Make more informed money decisions by creating custom
          budgets you’ll stick to.
        </motion.p>

        <div className="mt-14 flex  gap-4 ">
          <motion.button
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              damping: 10,
              bounce: 0.8,
              stiffness: 700,
              delay: 0.1,
            }}
            className="bg-blue-800 sm:text-lg text-base  sm:py-4 sm:px-12  px-3  rounded-[27px] text-white transition-colors hover:bg-primaryblue"
          >
            Learn More
          </motion.button>
          <button className="text-blue-800  rounded-[27px] hover:bg-primaryblue transition-all hover:text-white duration-300 py-4 px-12">
            How it Works?
          </button>
        </div>
      </div>
    </section>
  );
};
export default Features;
