import { SocialLinks } from "./Footer";
import { socialLinks } from "@constants/navLinks";
import { footerLinksAlt } from "@constants/constant";
import betbinary from "@assets/images/betbinarylogo.png";

function FooterVariant() {
  return (
    <div
      className=" min-h-[40vh] grid place-items=center py-3"
      style={{ backgroundImage: "url()" }}
    >
      <div className="flex-column gap-6 !items-center">
        <div className="w-[160px] relative mx-auto">
          <img src={betbinary} alt="" />
        </div>

        <ul className="flex-row gap-5 sm:gap-10 text-sm mx-3">
          {footerLinksAlt.map((item, idx) => (
            <a
              href={item.link}
              aria-label={item.id}
              title={item.id}
              target="_blank"
              rel="noreferrer"
              key={idx}
              className="text-shadow-100 leading-4 block transition-sm whitespace-nowrap hover:text-yellow hover:scale-95"
            >
              {item?.id}
            </a>
          ))}
        </ul>
        <ul className="flex-row gap-6">
          {socialLinks.map((link, idx) => (
            <SocialLinks key={idx} {...link} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterVariant;
