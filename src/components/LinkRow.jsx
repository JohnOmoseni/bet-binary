import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navAnimate } from "@utils";

const LinkRow = ({ href, name, onClick, idx }) => {
	const link = `relative w-max flex-row py-1.5 px-2 uppercase !text-[0.76rem] whitespace-nowrap rounded-full transition-sm hover:scale-105 hover:text-shadow-100`;
	const activeLink = `${link} bg-[#D9FFE8] rounded-md shadow-md`;

	const location = useLocation();
	const { pathname } = location;

	return (
		<motion.div
			variants={navAnimate}
			initial="hidden"
			whileInView="animate"
			viewport={{ once: true, amount: 0.2 }}
			custom={idx}
		>
			<Link
				to={href}
				// className={({ isActive }) => (isActive ? activeLink : link)}
				className={`${link}`}
				onClick={onClick}
				activeClass="active"
				spy={true}
				smooth={true}
				offset={href.includes("roadmap") ? 200 : -2}
				duration={400}
			>
				{name}
			</Link>
		</motion.div>
	);
};

export default LinkRow;
