import img from "../assets/image/h13-banner-2.png";
import { motion } from "framer-motion";

const AccountInfo = () => {
  return (
    <section className="py-28 px-6 bg-[#f0f0fa] grid items-center grid-cols-1 gap-9 overflow-hidden lg:grid-cols-2">
      <div className="lg:w-[30rem]">
        <motion.h1
          initial={{ translateX: 200 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="text-primaryblue mb_l:text-5xl text-3xl font-semibold"
        >
          Creat your accounts and ejoy our app
        </motion.h1>
        <p className="text-slate-400 text-lg mt-12">
          Get your complete financial picture at a glance. With Quicken, you can
          view your banking, investment, retirement, and credit card accounts –
          all in one place.
        </p>
        <p className="text-slate-400 text-lg mt-8">
          Over 17 million members have trusted Anon to plan and grow their
          ﬁnances for over three decades.
        </p>

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
          className="mt-9 text-white  bg-blue-700 py-5 px-12 hover:bg-primaryblue transition-colors rounded-[30px]"
        >
          LEARN MORE
        </motion.button>
      </div>

      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ damping: 10, type: "spring" }}
        className=""
      >
        <img src={img} alt="vector_img" />
      </motion.div>
    </section>
  );
};
export default AccountInfo;
