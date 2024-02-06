import { twMerge } from "tailwind-merge";
import trophy from "@assets/images/trophy.png";
import { useSelector } from "react-redux";

const LeaderCard = () => {
	const { screenSize } = useSelector((store) => store.appState);

	return (
		<div
			className={`${
				screenSize < 570 ? "min-w-[320px]" : "min-w-[250px]"
			} rounded-xl overflow-hidden bg-[#0C1C2E] py-[3%] px-4 sm:px-[3%] border border-solid border-br-light drop-shadow-sm shadow-md`}
		>
			<div className="flex-row !justify-between gap-4">
				<div className="mt-3">
					<p className="text-grey text-sm font-barlow whitespace-nowrap">
						Net Payout ($BIN)
					</p>
					<h3 className="text-2xl mt-1">2,039,304</h3>
					<span className="text-yellow text-tiny block">~$575,461.03</span>
				</div>

				<div className="relative w-[4.5rem] drop-shadow-sm">
					<img src={trophy} alt="" />
				</div>
			</div>

			<hr className="border-grey mt-10 mb-3 bg-red-300 rounded-full" />
			<ul className="pt-4 flex-column gap-2.5">
				<li className="w-full flex-row !justify-between gap-6 text-sm">
					<span className="text-grey font-barlow">Address</span>
					<span className={`text-white text-end`}>0x4c668...4270</span>
				</li>
				<li className="w-full flex-row !justify-between gap-6 text-sm">
					<span className="text-grey whitespace-nowrap">Address</span>
					<span className={`text-white text-end`}>0x4c668...4270</span>
				</li>
				<li className="w-full flex-row !justify-between gap-6 text-sm">
					<span className="text-grey">Address</span>
					<span className={`text-white text-end`}>0x4c668...4270</span>
				</li>
			</ul>
		</div>
	);
};

export default LeaderCard;
