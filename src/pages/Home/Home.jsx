import About from "./About";
import Market from "./Market";
import Header from "@components/Headers/Header";
import Features from "./Features";
import market from "@assets/images/market-mobile.png";
import features from "@assets/images/features.png";
import embedded from "@assets/images/embedded-trade.png";
import Token from "./Token";
import Footer from "@components/Footer/Footer";

function Home() {
  return (
    <div className="w-full pb-6 relative">
      <div className="">
        <Header />
        {/* <Hero /> */}
      </div>
      <div className="w-full sm:mx-[4%]">
        <div className="w-full">
          <About />
          <div className="w-[340px] relative left-2 mt-14 mb-10 sm:hidden mx-auto">
            <img src={market} alt="" />
          </div>
          <Market />
        </div>
        <Features />
        <div className="w-[350px] relative mt-[6em] mb-[4em] sm:hidden mx-auto">
          <img src={features} alt="" />
        </div>
        <Token />
        <div className="w-[350px] px-2 relative mt-10 mb-[4em] sm:hidden mx-auto">
          <img src={embedded} alt="" />
        </div>
      </div>
      <Footer />
      <div className="gi"></div>
    </div>
  );
}
export default Home;
