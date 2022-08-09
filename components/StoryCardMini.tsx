import React from "react";
import { PlayIcon } from "@heroicons/react/solid";

const bgImage = {
  backgroundImage: `url("/images/story.png")`,
};

const StoryCardMini = () => {
  return (
    <div className="flex items-center justify-around m-3">
      <div className="max-w-md md:max-w-2xl px-2">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
          <div
            className="bg-cover bg-bottom h-32 md:h-auto md:w-96"
            style={bgImage}
          ></div>
          <div>
            <div className="p-4 md:p-5">
              <p className="font-bold text-xl md:text-2xl">
                Amsterdam Walking Tour
              </p>
            </div>
            <div className="p-4 md:p-5 bg-gray-100">
              <div className="sm:flex sm:justify-between sm:items-center">
                <div>
                  <div className="flex items-center">
                    <div className="flex -mx-px"></div>
                    <p className="text-gray-700 md:text-lg">
                      Explore popular tourist destinations as well as hidden
                      local favourites.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center md:block">
                  <PlayIcon className="w-20 text-blue-300 hover:text-green-300 transition-colors duration-150" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCardMini;
