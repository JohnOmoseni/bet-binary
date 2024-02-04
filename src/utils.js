export const container = {
	hidden: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.6,
			when: "beforeChildren",
		},
	},
};

export const listAnimate = {
	hidden: { opacity: 0, y: 100 },
	animate: (custom) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: custom * 0.1,
			duration: 0.8,
			type: "spring",
		},
	}),
};

export const navAnimate = {
	hidden: { y: -50, opacity: 0 },
	animate: (custom) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.3,
			duration: 0.8,
			type: "spring",
		},
	}),
};
