import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-200 border-none border-2 border-b-gray-400 outline-none  bg-green-400 w-50 h-10 justify-between items-center flex p-2 rounded-md ">
      <div className="flex gap-4 items-center">
        <h4 className="text-black text-lg font-bold">Sneakers</h4>

        <div className="flex gap-4 ">
          <a href="" className="text-white hover:text-gray-300">
            Collection
          </a>
          <a href="" className="text-white hover:text-gray-300">
            Men
          </a>
          <a href="" className="text-white hover:text-gray-300">
            Women
          </a>
        </div>
      </div>

      <div></div>
    </div>
  );
};
