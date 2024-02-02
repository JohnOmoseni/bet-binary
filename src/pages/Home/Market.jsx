import { Label } from "@components/Label";
import { markets } from "@constants/constant";
import Card from "@components/Card";
import marketimg from "@assets/images/market.png";

function Market() {
  return (
    <div className="flex-row !flex-wrap gap-4 sm:grid grid-cols-2 sm:justify-between">
      <div className="max-sm:hidden w-[600px]">
        <img src={marketimg} alt="" />
      </div>
      <div className="my-3">
        <Label text="Market" />
        <h2 className="mt-3 sm:mt-1 text-center text-shadow-100">
          With Bet Binary, punters <br /> Bet TWO - WAY on Anything
        </h2>

        <ul className="mt-14 mb-10 w-[96%] sm:w-full mx-auto flex-column gap-4 sm:flex-row">
          {markets.map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Market;
