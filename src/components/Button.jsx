import { twMerge } from "tailwind-merge";

function Button({ className, title }) {
	return (
		<button
			className={twMerge(
				"rounded-full py-1.5 px-8 shadow-md bg-yellow text-white drop-shadow-md",
				className
			)}
		>
			{title}
		</button>
	);
}

export default Button;
