import betbinary from "@assets/images/betbinarylogo.png";

function Header() {
	return (
		<div className="w-full absolute py-4 px-3 sm:py-6 bg-inherit grid place-items-center">
			<div className="min-w-[200px] max-w-[250px]">
				<img src={betbinary} alt="" />
			</div>
		</div>
	);
}
export default Header;
