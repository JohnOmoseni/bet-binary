import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreenSize, setHasAnimated } from "@redux/features/appSlice";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import DApp from "./pages/dApp/DApp";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import Analytics from "./pages/analytics/Analytics";
import BetPosition from "./pages/BetPosition";
import Payment from "./pages/payment/Payment";
import ScrollToTop from "@components/ScrollToTop";

function App() {
	const dispatch = useDispatch();
	const { hasAnimated } = useSelector((store) => store.appState);

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(setHasAnimated(true));
		}, 3000);

		// console.log(hasAnimated);

		const getScreenSize = () => {
			dispatch(setScreenSize(window?.innerWidth));
		};

		window.addEventListener("resize", getScreenSize);
		getScreenSize();

		return () => {
			window.removeEventListener("resize", getScreenSize);
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className="wrapper ">
			<ScrollToTop />

			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<Home />} />

				<Route path="/dapp" element={<DApp />} />
				<Route path="/standings" element={<Leaderboard />} />
				<Route path="/analytics" element={<Analytics />} />
				<Route path="/position" element={<BetPosition />} />
				<Route path="/funding" element={<Payment />} />

				<Route path="*" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
