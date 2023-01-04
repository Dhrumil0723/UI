import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export const Searchbar = () => {
  return (
    <div className="md:flex xs:flex-col justify-between my-24 md:items-center">
      <div className="">
        <span className="font-[Cormorant] text-4xl font-normal">
          Mazzolari,{" "}
          <span className="font-[Brandon Grotesque] text-2xl font-normal">
            the definition
          </span>
        </span>
        <p className="font-[Brandon Grotesque] italic text-2xl font-normal">
          of luxury since 1881.
        </p>
      </div>
      <div className="md:mr-12 xs:mr-0 md:mt-0 mt-5">
        <label className="font-[Brandon Grotesque] tracking-widest hidden md:block">
          SEARCH
        </label>
        <div className="flex items-center outline-none border-none focus:border-none focus:outline-none focus:shadow-transparent h-[72px] md:w-[400px] xs:w-[250px]">
          <input
            className="bg-[#F6F6F6] outline-none border-none focus:border-none focus:outline-none focus:shadow-transparent h-full w-full"
            type="text"
          />
          <button className="bg-black text-white h-full px-6">
            <MagnifyingGlassIcon width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
