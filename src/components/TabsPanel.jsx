import { motion } from "framer-motion";

const containerVariant = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.8,
		},
	},
};

function TabsPanel({ activeTab, id, idx, children }) {
	return activeTab === id ? (
		<motion.div
			variants={containerVariant}
			initial="hidden"
			whileInView="animate"
			viewport={{ amount: 0.2, once: true }}
			role="tabpanel"
			tabIndex={idx}
			aria-labelledby={id}
			aria-hidden={activeTab === id ? "false" : "true"}
			className={activeTab === id ? "active" : ""}
		>
			{children}
		</motion.div>
	) : null;
}

export default TabsPanel;
