import { Label } from "@components/Label";
import { markets } from "@constants/constant";
import Card from "@components/Card";
import marketimg from "@assets/images/market.png";
import RevealAnimate from "@components/RevealAnimate";

function Market() {
	return (
		<div className="w-full relative z-10 p-section gap-8 flex">
			<div className="absolute -z-10 max-sm:hidden max-w-[400px] md:max-w-[700px] -left-4 bottom-[20%] md:bottom-0">
				<img src={marketimg} alt="" />
			</div>

			<div className="w-full sm:w-max md:w-[50%] sm:ml-auto sm:pr-[4%]">
				<Label text="Market" className="sm:text-left" />

				<RevealAnimate delay={0.6}>
					<h2 className="mt-3 sm:mt-1 max-sm:px-2 text-center sm:text-left text-shadow-100">
						With Bet Binary, punters <br /> Bet TWO - WAY on Anything
					</h2>
				</RevealAnimate>

				<ul className="my-14 max-sm:w-[80%] w-full mx-auto flex-column gap-4 sm:grid grid-cols-card">
					{markets.map((item, idx) => (
						<Card key={idx} item={item} idx={idx} />
					))}
				</ul>
			</div>
		</div>
	);
}
export default Market;
