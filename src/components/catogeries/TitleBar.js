import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

function TitleBar() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="font-[Cormorant] tracking-wide">Explore Categories</div>
        <div className="flex">
          <button className="rounded-full flex items-center justify-center border border-black p-1">
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button className="rounded-full flex items-center justify-center ml-2 border border-black p-1">
            <ChevronRightIcon className=" h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
