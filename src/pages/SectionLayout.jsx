import Menu from "@components/Menu";
import FooterVariant from "@components/Footer/FooterVariant";
import BinaryHeader from "@components/Headers/BinaryHeader";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const SectionLayout = ({ children }) => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<>
			<AnimatePresence>
				{openMenu && <Menu setOpenMenu={setOpenMenu} />}
			</AnimatePresence>

			<div className="dapp">
				<BinaryHeader setOpenMenu={setOpenMenu} />
				<div className="max-w-6xl w-[90%] mx-auto py-8 sm:p-section">
					{children}
				</div>
				<FooterVariant />
			</div>
		</>
	);
};

export default SectionLayout;
