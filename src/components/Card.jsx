function Card({ item, className }) {
  return (
    <li
      className={`${className} w-full bg-[#080808] bg-opacity-80 min-h-64 py-6 px-4 border border-solid border-variant-100 rounded-xl shadow-inner grid place-items-center`}
    >
      <div>
        <div className="w-[120px] sm:w-[150px]">
          <img src={item?.icon} alt="" />
        </div>
        <p className="text-center px-2 text-neutral-300 text-shadow-100 mt-4 font-semibold">
          {item.description}
        </p>
      </div>
    </li>
  );
}
export default Card;
