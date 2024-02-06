import { twMerge } from "tailwind-merge";
import teamLogo from "@assets/images/teamlogo.png";
import { useSelector } from "react-redux";

const className =
	"rounded-full py-2 px-4 sm:px-8 shadow-md bg-yellow text-white drop-shadow-md";

const Predict = () => {
	const { screenSize } = useSelector((store) => store.appState);

	return (
		<div className="min-w-min rounded-md overflow-hidden">
			<div className="flex-row max-sm:justify-between gap-4 bg-white py-2 px-4 rounded-t-md shadow-sm">
				<div
					className={twMerge(
						className,
						"bg-amber-500 shadow-none text-sm max-sm:py-1 px-3"
					)}
				>
					Ongoing
				</div>
				<p className="w-full flex-1 text-black leading-5 max-sm:text-base">
					Mar 23, 2022, 3:45PM EDT
				</p>
			</div>

			<div className="bg-[#0C1C2E] py-3">
				<h3 className="leading-6 text-2xl pl-4 pr-2">
					Will India win the 1st Semi-Final Cricket World Cup match against New
					Zealand on November 15?
				</h3>
				<div className="flex-row gap-4 mt-8 mb-4 mx-2">
					<div className="relative w-[4rem] sm:w-[4.5rem] drop-shadow-sm">
						<img src={teamLogo} alt="" />
					</div>

					<div className="mt-5">
						<span className="block bg-[#343252] py-3 px-4 rounded-md shadow-md">
							00h:00m:00s
						</span>
						<span className="text-sm block my-2 text-center">
							Division (Cyprus)
						</span>
					</div>

					<div className="relative w-[4rem] sm:w-[4.5rem] drop-shadow-sm">
						<img src={teamLogo} alt="" />
					</div>
				</div>
			</div>

			<div className="grid place-items-center py-5 px-4 bg-[#0C1C2E] border-t border-solid border-[#8E78C0]">
				<div className="flex-row !flex-wrap gap-y-3 gap-8">
					<span
						className={twMerge(className, "whitespace-nowrap text-sm px-4")}
					>
						{screenSize < 640 ? "Yes" : "	Eagle will win"}
					</span>
					<span
						className={twMerge(className, "whitespace-nowrap text-sm px-6")}
					>
						Bet
					</span>
					<span
						className={twMerge(className, "whitespace-nowrap text-sm px-4")}
					>
						{screenSize < 640 ? "No" : "Peak will win"}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Predict;
