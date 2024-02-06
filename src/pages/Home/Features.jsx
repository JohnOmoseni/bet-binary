import { Label } from "@components/Label";
import SwiperDiv from "./SwiperDiv";
import RevealAnimate from "@components/RevealAnimate";

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
			<div className="">
				<Label text="What's different" />
				<RevealAnimate delay={0.6}>
					<h2 className="my-2 text-center px-2">
						An Exhaustive list of <br /> Amazing Features
					</h2>
				</RevealAnimate>

				<RevealAnimate delay={0.9}>
					<p className="my-3 px-3 mx-auto text-center text-neutral-400 text-shadow-100">
						Betbinary is the most advanced sports crypto beting platform and
						highest stakes <br className="hidden sm:block" /> across multiple
						bookmakers and exchanges.
					</p>
				</RevealAnimate>
				<div className="relative">
					{/* <Direction dir="left" /> */}

					<SwiperDiv />
					{/* <Direction /> */}
				</div>
			</div>
		</div>
	);
}
export default Features;
