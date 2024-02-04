import { faqLinks, footerLinks } from "@constants/constant";
import { socialLinks } from "@constants/navLinks";
import betbinary from "@assets/images/betbinarylogo.png";

export const SocialLinks = ({ icon, href, title }) => (
	<a
		href={href}
		aria-label={title}
		target="_blank"
		rel="noreferrer"
		title={title}
		className="w-8 h-8 rounded-full icon border border-solid border-[#8790AE] bg-black"
	>
		{icon}
	</a>
);
function Footer() {
	return (
		<div className="w-full py-[1em] px-[1em] flex-column sm:grid grid-cols-2 gap-6 text-neutral-400">
			<div className="w-full sm:w-[90%] flex-row gap-6 !justify-between max-sm:pr-6 sm:pl-6 mt-5">
				<div>
					<p className="mb-1 text-white">Links</p>
					<ul className="flex-column mt-3">
						{footerLinks.map((item, idx) => (
							<a
								href=""
								aria-label=""
								target="_blank"
								rel="noreferrer"
								key={idx}
								className="text-shadow-100 block mb-1.5 transition-colors hover:text-amber-600"
							>
								{item?.id}
							</a>
						))}
					</ul>
				</div>
				<div>
					<p className="mb-1 text-white">FAQ</p>
					<ul className="flex-column mt-3">
						{faqLinks.map((item, idx) => (
							<a
								href=""
								aria-label=""
								target="_blank"
								rel="noreferrer"
								key={idx}
								className="text-shadow-100 block mb-1.5 transition-colors hover:text-amber-600"
							>
								{item?.id}
							</a>
						))}
					</ul>
				</div>
			</div>
			<div className="flex-column !items-start gap-4 text-sm">
				<div className="w-[140px] relative left-[-1em]">
					<img src={betbinary} alt="" />
				</div>
				<div>
					<div className="flex-row !flex-wrap !justify-start gap-1">
						<span>Contract Address:</span>
						<span>000000000000000000</span>
					</div>
					<p className="my-1 max-sm:pr-2 sm:max-w-[50ch]">
						Make sure to copy the attached CA of $BIN and paste it into UniSwap.
						Avoid copying the CA from other resources. Don't enter
					</p>
					<a
						href=""
						aria-label=""
						target="_blank"
						rel="noreferrer"
						className="!underline transition-colors hover:text-amber-600"
					>
						Tokenomics
					</a>
				</div>
				<div className="w-full flex-row gap-4 !justify-between mt-5">
					<span className="text-sm w-full ">© 2023 by Betbinary</span>
					<ul className="flex-row gap-3">
						{socialLinks.map((link, idx) => (
							<SocialLinks key={idx} {...link} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
export default Footer;
