import { useState } from "react";
import { Tab } from "../dApp/Top";
import Transactions from "@components/Transactions";
import TabsPanel from "@components/TabsPanel";
import SectionLayout from "../SectionLayout";
import Withdraw from "./Withdraw";
import Funding from "./Funding";

const tabs = ["Account funding", "Withdrawal"];
const tabIDs = ["fund", "withdraw"];

function Payment() {
	const [activeTab, setActiveTab] = useState(tabIDs[0]);

	const changeTab = (id) => {
		id && setActiveTab(id);
	};

	return (
		<SectionLayout>
			<h2 className="uppercase text-2xl sm:text-3xl text-shadow-100 max-sm:text-center">
				{activeTab === tabIDs[0] ? "Funding" : "Withdrawal"}
			</h2>

			<div className="mt-4 mb-4">
				<span className="text-sm text-neutral-200 tracking-wide text-center block">
					Balance: 0.0$
				</span>

				<ul className="my-3 mx-auto w-max flex-row !justify-between gap-3 py-1 px-1 text-base text-black bg-white rounded-full shadow-md">
					{tabs.map((tab, idx) => {
						return (
							<Tab
								id={tabIDs[idx]}
								activeTab={activeTab}
								changeTab={changeTab}
								key={idx}
								tab={tab}
								className="max-sm:px-4"
							>
								{tab}
							</Tab>
						);
					})}
				</ul>
			</div>

			<div className="mt-10 sm:mt-14 mb-4">
				<TabsPanel activeTab={activeTab} id={tabIDs[0]} idx="0">
					<Funding />
				</TabsPanel>
				<TabsPanel activeTab={activeTab} id={tabIDs[1]} idx="1">
					<Withdraw />
				</TabsPanel>

				<Transactions />
			</div>
		</SectionLayout>
	);
}

export default Payment;
