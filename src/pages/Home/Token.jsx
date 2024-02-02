import { tokenDetails } from "@constants/constant";
import { Label } from "@components/Label";
import features from "@assets/images/features.png";
import Flooz from "@icons/flooz.svg";
import Google from "@icons/google.svg";
import Apple from "@icons/apple.svg";

const buyLinks = [
  {
    href: "",
    link: Flooz,
  },
  {
    href: "",
    link: Google,
  },
  {
    href: "",
    link: Apple,
  },
];

function Token() {
  return (
    <div className="sm:grid grid-cols-2 gap-4 justify-between">
      <div className="text-neutral-400 px-5">
        <Label text="Token allocation" />
        <h2 className="mt-3 text-white sm:mt-1 text-shadow-100 text-center shadow-200">
          $BIN Tokenomics
        </h2>
        <p className="mt-6 mb-4">*$BIN Token has not been launched</p>
        <div className="w-full my-3 flex-row !justify-between pr-3">
          <p>Ticker: $BIN</p>
          <p>Blockchain : Ethereum</p>
        </div>
        <ul className="my-6 flex-column gap-3 relative text-neutral-400 pr-2">
          {tokenDetails.map((item, idx) => (
            <li key={idx} className="">
              {item}
            </li>
          ))}
        </ul>
        <div className="w-full mt-10">
          <p className="text-center">Buy $BIN Now via:</p>
          <ul className="flex-row gap-3 my-2">
            {buyLinks.map((item, idx) => (
              <li
                key={idx}
                className="py-1 px-3 bg-white rounded-md shadow-md cursor-pointer"
              >
                <img src={item?.link} alt="" className="w-16" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-sm:hidden w-[400px] relative left-[10%]">
        <img src={features} alt="" />
      </div>
    </div>
  );
}
export default Token;