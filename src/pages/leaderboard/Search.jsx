import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

function Search({}) {
  const [search, setSearch] = useState("");
  const handleSearch = () => {};

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="px-2 py-1.5 mx-8 w-[180px] relative rounded-full shadow-sm border border-solid border-neutral-500">
      <span className="icon absolute center right-2 align-middle top-[50%] -translate-y-[50%]">
        <BiSearchAlt size={16} fill="#ccc" />
      </span>

      <input
        type="text"
        name="search"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKey}
        className="w-full i-reset pl-2 placeholder:text-base placeholder:text-neutral-500"
      />
    </div>
  );
}
export default Search;
