import img1 from "../assets/image/h13-app-1.png";
import img2 from "../assets/image/h13-app-2.png";
import img3 from "../assets/image/h13-app-3.png";
import { motion } from "framer-motion";

const AppFeatures = () => {
  const cardvariant = {
    hidden: {
      y: 40,
      opacity: 0,
    },

    visible: {
      y: 0,
      opacity: 1,

      transition: {
        // when: "beforeChildren",
        duration: 0.2,
        type: "spring",
        damping: 13,
        stiffness: 700,
        staggerChildren: 0.6,
      },
    },
  };

  return (
    <section className="px-3 py-16">
      <div className="text-center">
        <h5 className="text-lg text-blue-700">APP FEATURES</h5>
        <motion.h1
          initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-primaryblue mb_l:text-5xl text-3xl mt-4 font-semibold"
        >
          Best App For Your Startup
        </motion.h1>
      </div>

      <motion.div
        variants={cardvariant}
        initial="hidden"
        whileInView="visible"
        className="mt-16 flex justify-center flex-col md:flex-row gap-14 flex-wrap"
      >
        <motion.article
          variants={cardvariant}
          className="md:w-[20rem] bg-[#e5fcff] px-12 py-12 rounded-3xl"
        >
          <img src={img1} alt="vector_img" />
          <h3 className="text-primaryblue text-2xl mt-10">User Experience</h3>

          <p className="text-slate-500 text-lg mt-8">
            Review your portfolio, performance monitor , and see market
            comparisons to have more confidence in your buy.
          </p>
        </motion.article>
        <motion.article
          variants={cardvariant}
          className="md:w-[20rem] bg-[#fff5e5] px-12 py-12 rounded-3xl"
        >
          <img src={img2} alt="vector_img" />
          <h3 className="text-primaryblue text-2xl mt-10">Smart Statistics</h3>

          <p className="text-slate-500 text-lg mt-8">
            Review your portfolio, performance monitor , and see market
            comparisons to have more confidence in your buy.
          </p>
        </motion.article>
        <motion.article
          variants={cardvariant}
          className="md:w-[20rem] bg-[#ffe5e5] px-12 py-12 rounded-3xl"
        >
          <img src={img3} alt="vector_img" />
          <h3 className="text-primaryblue text-2xl mt-10">Best Secured</h3>

          <p className="text-slate-500 text-lg mt-8">
            Review your portfolio, performance monitor , and see market
            comparisons to have more confidence in your buy.
          </p>
        </motion.article>
      </motion.div>
    </section>
  );
};
export default AppFeatures;
