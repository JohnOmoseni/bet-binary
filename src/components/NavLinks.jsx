import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const linksAni = {
	hidden: { opacity: 0, x: 100 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			ease: "easeIn",
			duration: 0.8,
		},
	},
};

function NavLinks({ name, href, onClick }) {
	return (
		<motion.span variants={linksAni} onClick={onClick}>
			<Link to={href} variants={linksAni} onClick={onClick}>
				<span className="!text-white uppercase text-shadow-100">{name}</span>
			</Link>
		</motion.span>
	);
}

export default NavLinks;
