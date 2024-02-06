import Predict from "./Predict";
import Top from "./Top";
import SectionLayout from "../SectionLayout";
import TabsPanel from "@components/TabsPanel";
import { useState } from "react";

const tabIDs = ["all", "price", "market", "sports", "news", "events"];

function DApp() {
	const [activeTab, setActiveTab] = useState(tabIDs[0]);

	const changeTab = (id) => {
		id && setActiveTab(id);
	};

	return (
		<SectionLayout>
			<Top activeTab={activeTab} changeTab={changeTab} tabIDs={tabIDs} />
			<div className="my-[5em] ">
				<TabsPanel activeTab={activeTab} id={tabIDs[0]} idx="0">
					<ul className="flex-column sm:grid grid-cols-predict gap-4">
						<Predict />
						<Predict />
						<Predict />
					</ul>
				</TabsPanel>
				<TabsPanel activeTab={activeTab} id={tabIDs[1]} idx="1">
					Test
				</TabsPanel>
			</div>
		</SectionLayout>
	);
}

export default DApp;
