import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full lg:px-6 bg-slate-900 z-50 px-2">
      <div className="flex justify-between">
        {/* left */}
        <div className="relative w-20 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="/images/tat-logo-white.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle */}
        <div className="max-w-[180px] md:max-w-sm  md:w-[400px]">
          <div className="mt-1 relative p-3 rounder-md w-full">
            <div className="absolute inset-y-0  pl-3 flex  items-center w-full pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-100 block h-8 w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          {false ? (
            <img
              src="/images/profile-demo.png"
              alt=""
              className="h-10 w-10 rounded-full cursor-pointer"
            />
          ) : (
            <button className="text-sm text-blue-300">Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
