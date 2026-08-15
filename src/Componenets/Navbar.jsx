import React from "react";

export const Navbar = () => {
  return (
    <div className="p-2 h-20 w-full bg-red-400 flex items-center justify-center ">
      <div className=" flexss item-center justify-center w-100 border-none border-2 border-b-gray-400 outline-none  bg-green-400 w-50 h-10 justify-between items-center flex p-2 rounded-md ">
        <div>
          <h4> Sneakers</h4>

          <div className="flex gap-4 ">
            {" "}
            <a href=""> Collection</a>
            <a href="">Men</a>
            <a href="">Women</a>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};
