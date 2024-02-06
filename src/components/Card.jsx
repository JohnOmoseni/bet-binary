import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { listAnimate } from "../utils";

function Card({ item, className, idx, amount }) {
	return (
		<motion.li
			variants={listAnimate}
			initial="hidden"
			whileInView="animate"
			viewport={{ amount: 0.3, once: true }}
			custom={idx}
			className={twMerge(
				`w-full bg-[#080808] bg-opacity-80 backdrop-blur-sm min-h-56 py-6 px-4 border border-solid border-variant-100 rounded-lg shadow-inner grid place-items-center`,
				className
			)}
		>
			<div>
				<div className="w-[120px] sm:w-[130px]">
					<img src={item?.icon} alt="" />
				</div>
				<p className="text-center px-1 text-neutral-300 text-shadow-100 mt-4 font-semibold tracking-wide">
					{item.description}
				</p>
			</div>
		</motion.li>
	);
}
export default Card;
