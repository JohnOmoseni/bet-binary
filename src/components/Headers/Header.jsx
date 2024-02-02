import betbinary from "@assets/images/betbinarylogo.png";

function Header() {
  return (
    <div className="w-full py-6 px-3 sm:py-8 sm:px-4 bg-inherit grid place-items-center">
      <div className="min-w-[200px] max-w-[250px]">
        <img src={betbinary} alt="" />
      </div>
    </div>
  );
}
export default Header;
