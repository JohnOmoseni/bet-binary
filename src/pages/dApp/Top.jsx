import { FaFilter } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

const tabs = [
	"All",
	"Price action",
	"Market cap",
	"Sports",
	"News & Politics",
	"Events",
];

export const Tab = ({ id, activeTab, tab, changeTab, className }) => {
	return (
		<li
			id={id}
			role="tab"
			aria-selected={activeTab === id ? "true" : "false"}
			className={twMerge(
				`${
					activeTab === id ? "bg-yellow text-white" : ""
				} capitalize py-1.5 sm:py-1 px-6 sm:px-3.5 rounded-full cursor-pointer leading-[1] md:leading-[2] text-center`,
				className
			)}
			onClick={() => changeTab(id)}
		>
			{tab}
		</li>
	);
};

const Top = ({ activeTab, changeTab, tabIDs }) => {
	return (
		<div>
			<h2 className="uppercase text-2xl sm:text-3xl text-shadow-100 max-sm:text-center">
				Top prediction market
			</h2>
			<div className="my-3 max-sm:mx-2 flex-column sm:flex-row !justify-between gap-4 text-base text-black">
				<ul
					role="tablist"
					aria-label="Tabs"
					className="max-sm:w-full grid grid-cols-2 max-sm:gap-1.5 place-items-center sm:flex-row sm:justify-between p-2 sm:p-1.5 md:p-1 bg-white rounded-md sm:rounded-full shadow-md"
				>
					{tabs.map((tab, idx) => {
						return (
							<Tab
								id={tabIDs[idx]}
								activeTab={activeTab}
								changeTab={changeTab}
								key={idx}
								tab={tab}
							>
								{tab}
							</Tab>
						);
					})}
				</ul>
				<div className="max-sm:self-end flex-row gap-1.5 py-1.5 px-3 bg-white rounded-full shadow-md whitespace-nowrap">
					<span className="icon">
						<FaFilter className="text-yellow" />
					</span>
					<span className="max-sm:text-[0.75rem]">Filter by</span>
				</div>
			</div>
		</div>
	);
};

export default Top;
