import { twMerge } from "tailwind-merge";

export const Label = ({ text, className }) => {
	return (
		<p
			className={twMerge(
				"text-center text-base uppercase !text-yellow text-shadow-100 tracking-wider",
				className
			)}
		>
			{text}
		</p>
	);
};
