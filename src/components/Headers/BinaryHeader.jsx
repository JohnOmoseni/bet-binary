import { navLinks } from "@constants/navLinks";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-scroll";
import Button from "../Button";
import LinkRow from "../LinkRow";
import betbinary from "@assets/images/betbinarylogo.png";

const BinaryHeader = ({ setOpenMenu }) => {
  return (
    <header className="flex-row gap-6 !justify-between px-[3%] py-[4%]">
      <div className="flex-row gap-3">
        <div className="block md:hidden" onClick={() => setOpenMenu(true)}>
          <HiOutlineMenuAlt4 size={20} color="#DAFFDC" />
        </div>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={400}
          className="group !flex w-[140px] transition-sm hover:scale-[0.9]"
        >
          <img
            src={betbinary}
            alt="bet-binary"
            className="group-hover:drop-shadow-md"
          />
        </Link>
      </div>

      <div className="hidden md:flex-row gap-4 py-2 px-6 bg-slate-800 rounded-full shadow-md text-white">
        {navLinks?.map((link, idx) => (
          <LinkRow key={idx} {...link} idx={idx} />
        ))}
      </div>

      <div className="relative z-10">
        <span className="inline-block py-2 pl-4 pr-10 rounded-full bg-[#222] relative -z-10 left-5 text-sm">
          0.0$
        </span>
        <Button
          title="Connect"
          className="uppercase py-2 px-5 text-[0.85rem] relative z-10"
        />
      </div>
    </header>
  );
};

export default BinaryHeader;
