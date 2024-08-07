import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Search = ({ onSearchSubmit, initialSearchValue, Clear }) => {
  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const handleClearSearch = async () => {
    setSearchValue("");
    Clear();
  };
  const handleSearch = () => {
    if (onSearchSubmit) {
      onSearchSubmit(searchValue);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleKeyUp = (event) => {
    if (event.key === "Backspace") {
      handleClearSearch();
    }
  };
  return (
    <div className="relative bg-white rounded-2xl drop-shadow-xl w-[400px] pb-2 md:w-1/2 pt-2 md:px-8 ">
      <div className="flex gap-8 mx-4 mb-2">
        <h2 className="md:text-xl text-blue-900">ค้นหารถที่ต้องการ</h2>
        <h2 className="md:text-xl">ฟิลเตอร์</h2>
      </div>
      <div className="flex gap-4 justify-center">
        <input
          className="w-full pl-4 mx-4 rounded-xl bg-gray-200 duration-300 focus:outline-none focus:border-sky-700 focus:ring-sky-700 focus:ring-1 border-gray-300 md:text-[16px] text-xs"
          type="text"
          placeholder="ค้นหารถรุ่นที่ต้องการ ยี่ห้อ รุ่น หรือ คีย์เวิร์ด "
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
        />
        {searchValue && (
          <span
            className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
            onClick={handleClearSearch}
          >
            clear
          </span>
        )}
        <button
          className="bg-blue-900 text-white hover:bg-blue-950 p-2 rounded-xl px-4 mx-2"
          onClick={handleSearch}
        >
          ค้นหา
        </button>
      </div>
    </div>
  );
};
export default Search;
