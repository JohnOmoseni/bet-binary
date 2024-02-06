import { twMerge } from "tailwind-merge";
import RevealAnimate from "./RevealAnimate";

export const Label = ({ text, className }) => {
	return (
		<RevealAnimate>
			<p
				className={twMerge(
					"text-center text-base uppercase !text-yellow text-shadow-100 tracking-wider",
					className
				)}
			>
				{text}
			</p>
		</RevealAnimate>
	);
};
