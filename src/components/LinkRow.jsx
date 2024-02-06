import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { navAnimate } from "@utils";
import { useSelector } from "react-redux";

const LinkRow = ({ href, name, onClick, idx }) => {
	const { hasAnimated } = useSelector((store) => store.appState);

	const link = `relative w-max flex-row py-1.5 px-2 uppercase !text-[0.76rem] whitespace-nowrap rounded-full transition-sm transition-colors hover:text-yellow hover:scale-105 hover:text-shadow-100`;
	const activeLink = `${link} text-yellow tracking-wide`;

	const location = useLocation();
	const { pathname } = location;

	return (
		<motion.div
			variants={hasAnimated ? null : navAnimate}
			initial="hidden"
			whileInView="animate"
			viewport={{ once: true, amount: 0.2 }}
			custom={idx}
		>
			<NavLink
				to={href}
				className={({ isActive }) => (isActive ? activeLink : link)}
				onClick={onClick}
			>
				{name}
			</NavLink>
		</motion.div>
	);
};

export default LinkRow;
