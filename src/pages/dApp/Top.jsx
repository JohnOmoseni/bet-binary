import { FaFilter } from "react-icons/fa6";

const tabs = [
  "All",
  "Price action",
  "Market cap",
  "Sports",
  "News & Politics",
  "Events",
];

const Top = () => {
  return (
    <div>
      <h2 className="uppercase text-3xl">Top prediction Markets</h2>
      <div className="mt-3 mb-4 flex-row !justify-between text-base text-black">
        <ul className="flex-row !justify-between gap-3 py-1 px-1 bg-white rounded-full shadow-md">
          {tabs.map((tab, idx) => {
            return (
              <li
                className={` ${
                  idx === 0 && "bg-yellow"
                } py-1 px-2 rounded-full cursor-pointer`}
                key={idx}
              >
                {tab}
              </li>
            );
          })}
        </ul>
        <div className="flex-row gap-1.5 py-1.5 px-3 bg-white rounded-full shadow-md">
          <span className="icon">
            <FaFilter className="text-yellow" />
          </span>
          <span>Filter by</span>
        </div>
      </div>
    </div>
  );
};

export default Top;
