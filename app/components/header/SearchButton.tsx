"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

export const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className={`h-full px-3 xl:px-4 hover:bg-[#191e25] relative ${
          isOpen && "bg-[#191e25]"
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <AiOutlineClose className="w-7 h-7 2xl:w-8 2xl:h-8 text-muted" />
        ) : (
          <IoSearch className="w-7 h-7 2xl:w-8 2xl:h-8 text-muted" />
        )}
      </button>
      {isOpen && (
        <div className="absolute bg-[#191e25] h-screen w-screen lg:w-full lg:h-20 xl:h-28 top-1/2 lg:top-full left-1/2 -translate-x-1/2 rounded-b-lg">
          <div className="w-full h-[72px] lg:h-full p-3 lg:p-4 xl:p-6">
            <form
              action=""
              className="flex items-center h-full bg-[#33373d] rounded-lg focus-within:outline focus-within:outline-white"
            >
              <IoSearch className="w-7 h-7 2xl:w-8 2xl:h-8 text-muted ml-3 lg:ml-6" />
              <input
                type="search"
                placeholder="Search"
                className="h-full w-full bg-inherit pl-2 lg:pl-4 lg:placeholder:text-xl pr-0.5 py-[1px] placeholder:text-muted placeholder:text-lg outline-none rounded-lg"
                required
                autoFocus
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};
