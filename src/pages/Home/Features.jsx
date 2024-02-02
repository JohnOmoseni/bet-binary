import Card from "@components/Card";
import { Label } from "@components/Label";
import { markets } from "@constants/constant";

const Direction = ({ icon, dir }) => (
  <div
    className={`${
      dir === "left" ? "left-3.5" : "right-3.5"
    }absolute top-[50%] trnalate-y-[-50%] w-7 rounded-md p-4 shadow-md icon z-20`}
  >
    {icon}
  </div>
);

function Features() {
  return (
    <div className="relative">
      <div>
        <Label text="What's different" />
        <h2 className="my-2 text-center">
          An Exhaustive list of <br /> Amazing Features
        </h2>
        <p className="my-6 px-3 text-center text-neutral-500 text-shadow-100">
          Betbinary is the most advanced sports crypto beting platform and
          highest stakes <br /> across multiple bookmakers and exchanges.
        </p>
        <ul className="my-14 w-[94%] mx-auto sm:px-6 flex-row gap-4 relative overflow-x-scroll overflow-y-hidden">
          {markets.map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Features;
