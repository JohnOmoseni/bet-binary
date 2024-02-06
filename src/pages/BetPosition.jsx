import { useState } from "react";
import SectionLayout from "./SectionLayout";
import { Tab } from "./dApp/Top";
import TabsPanel from "../components/TabsPanel";
import BasicTable from "../components/BasicTable";

const tabs = ["open", "lock", "win", "losses"];

function BetPosition() {
	const [activeTab, setActiveTab] = useState(tabs[0]);

	const changeTab = (id) => {
		id && setActiveTab(id);
	};

	return (
		<SectionLayout>
			<h2 className="uppercase text-2xl sm:text-3xl text-shadow-100 max-sm:text-center">
				Bet position
			</h2>
			<div className="mt-4 sm:mt-6 mb-4 flex-row mx-auto">
				<ul
					role="tablist"
					aria-label="Tabs"
					className="flex-row !justify-between sm:gap-3 py-1 px-1 text-tiny sm:text-base text-black bg-white rounded-full shadow-md"
				>
					{tabs.map((tab, idx) => {
						return (
							<Tab
								id={tab}
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
			</div>

			{/* <div className="my-[5em]">
				<TabsPanel activeTab={activeTab} id={tabIDs[1]} idx="1">
					Test
				</TabsPanel>
			</div> */}

			<BasicTable />
		</SectionLayout>
	);
}

export default BetPosition;
