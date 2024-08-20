import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-600 flex flex-col md:flex-row py-4">
      <div className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <h1 className="text-xl font-bold text-white">TAILWIND-CSS</h1>
        </div>
        <div className="flex flex-row md:flex-row sm:flex-row gap-5 mt-3 md:mt-0 items-center">
          <input
            type="text"
            placeholder="Search"
            className="md:py-1 sm:py-1  rounded-xl px-2 border-none outline-none"
          />
          <span className="text-white">Login</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
