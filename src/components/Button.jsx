import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const btnVariant = {
	hidden: { opacity: 0, x: 100 },
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			ease: "easeIn",
			duration: 0.8,
		},
	},
};

function Button({ className, title, animate }) {
	return (
		<motion.button
			variants={btnVariant}
			className={twMerge(
				"rounded-full py-2 px-8 bg-yellow text-white hover:drop-shadow-100 shadow-md",
				className
			)}
		>
			{title}
		</motion.button>
	);
}

export default Button;
