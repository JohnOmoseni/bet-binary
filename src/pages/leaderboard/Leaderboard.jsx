import Search from "./Search";
import LeaderCard from "./LeaderCard";
import SectionLayout from "../SectionLayout";
import BasicTable from "@components/BasicTable";

function Leaderboard() {
	return (
		<SectionLayout>
			<div className="flex-column !items-center sm:flex-row gap-3 sm:!justify-between">
				<h2 className="uppercase text-2xl sm:text-3xl text-shadow-100 max-sm:text-center">
					LeaderBoard
				</h2>
				<Search />
			</div>
			<div className="my-[3.5em] sm:my-[5em] !flex-wrap gap-4 flex-row">
				<LeaderCard />
				<LeaderCard />
				<LeaderCard />
			</div>

			<BasicTable />
		</SectionLayout>
	);
}

export default Leaderboard;
