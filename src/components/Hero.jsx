import heroimg from "@assets/heroimg.png";
import Button from "./Button";
import { motion } from "framer-motion";
import { containerVariant } from "@utils";

function Hero() {
  return (
    <motion.div
      id="home"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="pt-[40%] pb-10 px-[8%] p-hero-sm lg:p-hero-lg relative w-full flex-column gap-10 lg:grid grid-cols-hero md:items-center md:min-h-[60vh]"
    >
      <div className="w-full flex-column !items-center lg:!items-start py-3">
        <span>Bet and win today</span>
        <h1 className="capitalize text-4xl md:text-5xl text-center">
          Bet On Binary
        </h1>
        <p className="my-2 mx-auto px-2 max-w-[50ch] text-center">
          Where Projections Collide with Rewards
        </p>
        <div className="flex-row gap-4 mt-4 mb-10 mx-auto max-sm:!flex-wrap">
          <a href="" aria-label="Discord" target="_blank" rel="noreferrer">
            <Button title="Join Discord" className="" />
          </a>
          <a href="" aria-label="Twitter" target="_blank" rel="noreferrer">
            <Button title="Follow twitter" className="" type="variant" />
          </a>
        </div>
        <span className="capitalize text-sm">BiBot COming soon</span>
      </div>

      <div className="grid place-items-center overflow-hidden my-8 sm:my-10">
        <div className="min-w-[300px] max-w-[400px] h-[420px]">
          <img src={heroimg} alt="" />
        </div>
      </div>
    </motion.div>
  );
}
export default Hero;
