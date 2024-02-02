import { faqLinks, footerLinks } from "@constants/constant";
import { socialLinks } from "../../../constants/constant";
import betbinary from "@assets/images/betbinarylogo.png";

function Footer() {
  return (
    <div className="w-full py-[1em] px-[1em] flex-column md:grid grid-cols-2 gap-6 text-neutral-400">
      <div className="w-full flex-row gap-6 !items-start !justify-between">
        <ul>
          <p className="mb-1 text-white">Links</p>
          {footerLinks.map((item, idx) => (
            <p key={idx} className="text-shadow-100  mb-1">
              {item?.id}
            </p>
          ))}
        </ul>
        <ul>
          <p className="mb-1 text-white">FAQ</p>
          {faqLinks.map((item, idx) => (
            <p key={idx} className="text-shadow-100 mb-1 ">
              {item?.id}
            </p>
          ))}
        </ul>
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
          <p className="my-1 max-w-[50ch]">
            Make sure to copy the attached CA of $BIN and paste it into UniSwap.
            Avoid copying the CA from other resources. Don't enter
          </p>
          <a href="" className="!underline">
            Tokenomics
          </a>
        </div>
        <div className="w-full flex-row gap-4 !justify-between">
          <span className="text-sm w-full ">© 2023 by Betbinary</span>
          <ul>
            {socialLinks.map((item, idx) => (
              <a key={idx}>{item?.id}</a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
