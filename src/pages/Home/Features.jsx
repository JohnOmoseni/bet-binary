import Card from "@components/Card";
import { Label } from "@components/Label";
import { features } from "@constants/constant";

const Direction = ({ icon, dir }) => (
	<div
		className={`${
			dir === "left" ? "-left-3.5" : "-right-3.5"
		} hidden absolute top-[50%] translate-y-[-50%] w-8 h-4 bg-amber-500 rounded-sm shadow-md sm:grid z-20`}
	>
		{icon}
	</div>
);

function Features() {
	return (
		<div className="relative p-section">
			<div>
				<Label text="What's different" />
				<h2 className="my-2 text-center px-2">
					An Exhaustive list of <br /> Amazing Features
				</h2>
				<p className="my-3 px-3 mx-auto text-center text-neutral-400 text-shadow-100">
					Betbinary is the most advanced sports crypto beting platform and
					highest stakes <br className="hidden sm:block" /> across multiple
					bookmakers and exchanges.
				</p>
				<div className="relative w-[90%] mx-auto">
					<Direction dir="left" />
					<ul
						className="relative scroll-snap py-12 pb-[4em] sm:py-[6em] gap-4 grid-cols-features max-sm:auto-cols-[60%] sm:max-md:auto-cols-[40%] 
        "
					>
						{features.map((item, idx) => (
							<Card key={idx} item={item} className="rounded-md py-4" />
						))}
					</ul>
					<Direction />
				</div>
			</div>
		</div>
	);
}
export default Features;
