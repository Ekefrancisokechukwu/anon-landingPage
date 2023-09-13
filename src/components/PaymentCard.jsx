import { motion } from "framer-motion";
import { BsCheckLg } from "react-icons/bs";

const PaymentCards = () => {
  const scaleVarient = {
    hidden: {
      scale: 0.56,
      opacity: 0,
    },

    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        // when: "beforeChildren",
        duration: 0.2,
        type: "spring",
        damping: 15,
        stiffness: 700,
        staggerChildren: 0.6,
      },
    },
  };
  return (
    <section className="py-28 px-5">
      <div className="text-center">
        <h5 className="text-blue-700 text-lg">SIMPLE PLAN</h5>
        <motion.h1
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb_l:text-5xl text-3xl mt-7 sm:w-[33rem] mx-auto font-semibold text-primaryblue"
        >
          Choose A Plan That Fits Your Requirements.
        </motion.h1>
      </div>

      <motion.div
        variants={scaleVarient}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-14 flex lg:flex-row flex-col justify-center max2:place-items-center   gap-16"
      >
        <motion.article
          variants={scaleVarient}
          className="px-9 py-12 bg-[#e5fcff] rounded-[26px] lg:w-[22rem]  md:w-[80%] w-full"
        >
          <h3 className="capitalize text-2xl inline-block text-primaryblue font-semibold">
            Personal
          </h3>

          <h1 className="text-7xl font-bold text-blue-700">$19</h1>
          <h5 className="text-slate-400 mt-3 inline-block p-1 text-sm uppercase bg-slate-200 rounded-md">
            PER MONTH
          </h5>

          <ul className="mt-8">
            <li className="text-slate-500 capitalize flex gap-2 items-center py-2 text-lg">
              <BsCheckLg className=" text-2xl text-primaryblue" />
              10GB Cloud Storage
            </li>
            <li className="text-slate-500 capitalize flex gap-2 items-center py-2 text-lg">
              <BsCheckLg className=" text-2xl text-primaryblue" />
              30-days spending
            </li>
            <li className="text-slate-500 capitalize flex gap-2 items-center py-2 text-lg">
              <BsCheckLg className=" text-2xl text-primaryblue" />1 spending
              plan/day
            </li>
            <li className="text-slate-500 capitalize flex gap-2 items-center py-2 text-lg">
              <BsCheckLg className=" text-2xl text-primaryblue" />
              support 24/7 at all time
            </li>
          </ul>

          <motion.button
            whileHover={{
              color: "#ffff",
              scale: [1, 0.8, 1],
            }}
            transition={{ type: "tween" }}
            className="uppercase mt-10  hover:bg-blue-700 text-blue-700 font-medium py-3 px-14 rounded-[29px] border-2 border-blue-700"
          >
            get started
          </motion.button>
        </motion.article>
        <motion.article
          variants={scaleVarient}
          className="px-9 py-12 bg-[#ffe5e5] rounded-[26px] lg:w-[22rem] md:w-[80%] w-full"
        >
          <h3 className="capitalize text-2xl inline-block text-primaryblue font-semibold">
            Familly
          </h3>

          <h1 className="text-7xl font-bold text-blue-700">$39</h1>
          <h5 className="text-slate-400 mt-3 inline-block p-1 text-sm uppercase bg-slate-200 rounded-md">
            PER MONTH
          </h5>

          <ul className="mt-8">
            <li className="text-slate-500 capitalize flex gap-2 items-center py-2 text-lg">
              <BsCheckLg className=" text-2xl text-primaryblue" />
              Unlimited Cloud Storage
            </li>
            <li className="text-slate-500 capitalize flex gap-2 items-center py-2 text-lg">
              <BsCheckLg className=" text-2xl text-primaryblue" />
              360-Days Spending History
            </li>
            <li className="text-slate-500 capitalize flex gap-2 items-center py-2 text-lg">
              <BsCheckLg className=" text-2xl text-primaryblue" />1 spending 3
              Spending Plan/Day
            </li>
            <li className="text-slate-500 capitalize flex gap-2 items-center py-2 text-lg">
              <BsCheckLg className=" text-2xl text-primaryblue" />
              support 24/7 at all time
            </li>
          </ul>

          <motion.button
            whileHover={{
              color: "#ffff",
              scale: [1, 0.8, 1],
            }}
            transition={{ type: "tween" }}
            className="uppercase hover:bg-blue-700  mt-10  text-blue-700 font-medium py-3 px-14 rounded-[29px] border-2 border-blue-700"
          >
            get started
          </motion.button>
        </motion.article>
        <motion.article
          variants={scaleVarient}
          className="px-9 py-12 bg-[#fff5e5] rounded-[26px] lg:w-[22rem] md:w-[80%] w-full"
        >
          <h3 className="capitalize text-2xl inline-block text-primaryblue font-semibold">
            Business
          </h3>

          <h1 className="text-7xl font-bold text-blue-700">$99</h1>
          <h5 className="text-slate-400 mt-3 inline-block p-1 text-sm uppercase bg-slate-200 rounded-md">
            PER MONTH
          </h5>

          <ul className="mt-8">
            <li className="text-slate-500 capitalize flex gap-2 items-center py-2 text-lg">
              <BsCheckLg className=" text-2xl text-primaryblue" />
              Unlimited Cloud Storage
            </li>
            <li className="text-slate-500 capitalize flex gap-2 items-center py-2 text-lg">
              <BsCheckLg className=" text-2xl text-primaryblue" />
              Unlimited Spending History
            </li>
            <li className="text-slate-500 capitalize flex gap-2 items-center py-2 text-lg">
              <BsCheckLg className=" text-2xl text-primaryblue" />1 spending 3
              Unlimited Spending Plan
            </li>
            <li className="text-slate-500 capitalize flex gap-2 items-center py-2 text-lg">
              <BsCheckLg className=" text-2xl text-primaryblue" />
              support 24/7 at all time
            </li>
          </ul>

          <motion.button
            whileHover={{
              color: "#ffff",
              scale: [1, 0.8, 1],
            }}
            transition={{ type: "tween" }}
            className="uppercase hover:bg-blue-700 mt-10  text-blue-700 font-medium py-3 px-14 rounded-[29px] border-2 border-blue-700"
          >
            get started
          </motion.button>
        </motion.article>
      </motion.div>
    </section>
  );
};
export default PaymentCards;
