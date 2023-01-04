import React, { useState } from "react";
import icon from "../images/M.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  let Links = [
    { name: "SKINCARE", link: "/" },
    { name: "MAKEUP", link: "/" },
    { name: "SUN-CARE", link: "/" },
    { name: "HAIRCARE", link: "/" },
    { name: "BEARDGROOMING", link: "/" },
    { name: "FRAGRANCES", link: "/" },
    { name: "BATH", link: "/" },
    { name: "HOME", link: "/" },
    { name: "ACCESSORIES", link: "/" },
    { name: "SALE", link: "/" },
    { name: "BRANDS", link: "/" },
  ];
  let gender = [
    { name: "MAN", link: "/" },
    { name: "WOMAN", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full top-0 left-0 bg-[#F6F6F6]">
      <div className="flex md:flex items-center justify-between">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span className="h-12 text-indigo-600 mr-1">
            <img
              className="border border-gray-100 shadow-sm h-full"
              src={icon}
              alt="Icon"
            />
          </span>
        </div>
        <ul className="flex md:hidden mr-16 font-semibold">
          {gender.map((gen) => (
            <li key={gen.name} className="md:ml-4 md:my-0 my-7 px-2">
              <a href={gen.link}>{gen.name}</a>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-8 cursor-pointer md:hidden"
        >
          {open ? (
            <XMarkIcon width={20} height={20} />
          ) : (
            <Bars3Icon width={20} height={20} />
          )}
        </div>
        <ul
          className={`md:flex md:items-center absolute md:static bg-[#F6F6F6] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12 " : "top-[-590px]"
          }`}
        >
          {Links.map((Link) => (
            <li key={Link.name} className="md:ml-4 md:my-0 my-7">
              <a href={Link.link}>{Link.name}</a>
            </li>
          ))}
        </ul>
        <ul className="flex hidden md:block md:flex md:items-center font-semibold">
          {gender.map((gen) => (
            <li key={gen.name} className="md:ml-4 md:my-0 my-7">
              <a href={gen.link}>{gen.name}</a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block md:items-center md:py-2">
          <button>
            <MagnifyingGlassIcon width={20} height={20} />
          </button>
          <button>
            <UserIcon width={35} height={20} />
          </button>
          <button>
            <HeartIcon width={35} height={20} />
          </button>
          <button>
            <ShoppingCartIcon width={35} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
