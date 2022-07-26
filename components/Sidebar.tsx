import React from "react";
import { HomeIcon } from "@heroicons/react/solid";
import { CollectionIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div className="hidden border-r  h-screen w-52 md:inline-block sticky left-0 z-50 bg-gray-800">
      <div className="flex space-x-2 py-3 pl-3 text-xl align-middle text-white hover:bg-gray-900 transition-all duration-150 ease-in-out">
        <HomeIcon className="w-6" />
        <h3>Home</h3>
      </div>
      <div className="flex space-x-2 py-3 pl-3 text-xl align-middle text-white hover:bg-gray-900 transition-all duration-150 ease-in-out">
        <CollectionIcon className="w-6" />
        <h3>Playlists</h3>
      </div>
      <div className="flex space-x-2  py-3 pl-3 text-xl align-middle text-white  hover:bg-gray-900 transition-all duration-150 ease-in-out">
        <StarIcon className="w-6" />
        <h3>Favourites</h3>
      </div>
      <div className="p-2 align-middle text-white text-center">
        <hr className="w-28 my-5 mx-auto border border-blue-300" />
        <h3>Currently Playing</h3>
      </div>
    </div>
  );
};

export default Sidebar;
