import Header from "@components/Headers/Header";
import Hero from "@components/Hero";
import Footer from "@components/Footer/Footer";
import About from "./About";
import Market from "./Market";
import Features from "./Features";
import Token from "./Token";

import market from "@assets/images/market-mobile.png";
import features from "@assets/images/features.png";
import embedded from "@assets/images/embedded-trade.png";

import coin5 from "@assets/images/coin5.png";
import coin6 from "@assets/images/coin6.png";

function Home() {
	return (
		<div className="w-full relative isolate">
			<div className="relative min-h-[100vh] bg-img-hero">
				<Header />
				<Hero />
				<div className="w-[70px] sm:w-[140px] absolute left-[0%] -bottom-[5%] select-none -z-10">
					<img src={coin5} alt="" />
				</div>
				<div className="w-[80px] sm:w-[120px] absolute right-0 -bottom-[10%] select-none -z-10">
					<img src={coin6} alt="" />
				</div>
				<div className="g1"></div>
				<div className="g2"></div>
			</div>
			<div className="w-full relative -z-20 bg-black">
				<div className="w-full">
					<About />
					<div className="w-[340px] relative left-2 mt-2 mb-4 sm:hidden mx-auto">
						<img src={market} alt="" />
					</div>
					<Market />
				</div>
				<Features />
				{/* <div data-aos="fade-up" data-aos-anchor-placement="top-center"></div> */}
				{/* <div data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".example-selector"></div> */}
				<div
					data-aos="fade-zoom-in"
					data-aos-offset="100"
					data-aos-easing="ease-in-sine"
					data-aos-duration="600"
					// data-aos-once="true"
					className="px-3 min-w-[320px] max-w-[400px] relative mt-4 mb-4 sm:hidden mx-auto"
				>
					<img src={features} alt="" />
				</div>
				<Token />
				<div className="min-w-[350px] max-w-[450px] px-3 relative mb-[8em] mx-auto">
					<img src={embedded} alt="" />
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default Home;
