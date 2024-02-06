import Button from "./Button";
import { motion } from "framer-motion";
import heroLogo from "@assets/images/herologo.png";
import heromobile from "@assets/images/heromobile.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import RevealAnimate from "./RevealAnimate";
import { container } from "@utils";

function Hero() {
	const { screenSize } = useSelector((store) => store.appState);

	return (
		<motion.div
			id="home"
			className="pt-[25%] sm:pt-[16%] md:pt-[14%] relative w-full flex-column !items-center gap-4 min-h-[100vh]"
		>
			<div className="w-full py-3">
				<RevealAnimate>
					<span className="block capitalize text-lg text-center text-yellow">
						Bet & win today!
					</span>
				</RevealAnimate>
				<RevealAnimate delay={0.3}>
					<h1 className="capitalize sm:text-6xl md:text-7xl text-center mt-1 leading-8">
						Bet On Binary
					</h1>
				</RevealAnimate>
				<RevealAnimate delay={0.6}>
					<p className="my-2 px-2 text-2xl sm:text-4xl mx-auto text-center ">
						Where Projections Collide with Rewards
					</p>
				</RevealAnimate>

				<motion.div
					variants={container}
					initial="hidden"
					animate="animate"
					className="flex-row gap-4 mt-12 px-3 mx-auto max-sm:!flex-wrap"
				>
					<Link to="/dApp" aria-label="dApp">
						<Button title="Launch dApp" className="" />
					</Link>
					<a href="" aria-label="Whitepaper" target="_blank" rel="noreferrer">
						<Button title="Whitepaper" className="bg-white text-neutral-800" />
					</a>
				</motion.div>

				<RevealAnimate delay={2.4}>
					<span className="capitalize my-4 text-sm block text-center tracking-wide">
						BinBot Coming soon
					</span>
				</RevealAnimate>
			</div>

			<div
				className={`grid place-items-center overflow-hidden ${
					screenSize > 640 && "-mt-8 sm:-mt-10"
				}`}
			>
				<div
					className={`min-w-[300px] max-w-[400px] ${
						screenSize > 640 ? "h-[420px]" : "mt-4"
					}`}
				>
					<img src={screenSize < 640 ? heromobile : heroLogo} alt="" />
				</div>
			</div>
		</motion.div>
	);
}
export default Hero;
