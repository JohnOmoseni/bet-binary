import { twMerge } from "tailwind-merge";

function Button({ className, title }) {
  return (
    <button
      className={twMerge(
        "rounded-full py-2 px-8 bg-yellow text-white drop-shadow-md shadow-md",
        className
      )}
    >
      {title}
    </button>
  );
}

export default Button;
