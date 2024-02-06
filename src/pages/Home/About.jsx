import { Label } from "@components/Label";
import RevealAnimate from "@components/RevealAnimate";

function About() {
	return (
		<div className="min-h-[40vh] p-section">
			<Label text="About" />

			<RevealAnimate delay={0.6}>
				<h2 className=" text-center text-shadow-100">Betbinary</h2>
			</RevealAnimate>
			<RevealAnimate delay={0.9}>
				<p className="my-2 px-2.5 text-center text-neutral-500">
					Bet Binary is the go-to platform for decentralized and streamlined
					predictions and gambling
				</p>
			</RevealAnimate>
		</div>
	);
}
export default About;
