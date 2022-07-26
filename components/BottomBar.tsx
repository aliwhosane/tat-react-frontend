import React from "react";
import { HomeIcon } from "@heroicons/react/solid";
import { CollectionIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";

const BottomBar = () => {
  return (
    <div className="fixed h-20  w-full bottom-0  bg-gray-900 text-white md:hidden">
      <div className="flex justify-around h-full w-screen items-center text-center">
        <div className="text-center p-5 w-full justify-center flex flex-col">
          <div className="w-full justify-center flex pb-1">
            <HomeIcon className=" w-5  text-white" />
          </div>
          <p className="text-center items-center">HOME</p>
        </div>
        <div className="text-center p-5 h-full w-full justify-center pb-1">
          <div className="w-full justify-center flex">
            <CollectionIcon className="w-5  text-white" />
          </div>
          <p className="text-center items-center">PLAYLISTS </p>
        </div>
        <div className="flex flex-col text-center p-5 h-full w-full justify-center">
          <div className="w-full justify-center flex pb-1">
            <StarIcon className="w-5  text-white" />
          </div>
          <p className="text-center items-center">FAVOURITES</p>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
