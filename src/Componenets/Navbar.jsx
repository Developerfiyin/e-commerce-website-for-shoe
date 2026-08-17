import React from "react";
import image from "../assets/icon-cart.svg";
import image2 from "../assets/image-avatar.png";
export const Navbar = () => {
  return (
    <div className="flex justify-between mx-auto items-center pt-2 p-blue-300 border-x-0 border-t-0 border-0 border-2 border-b-gray-400 outline-none p-2 rounded-md ">
      <div className="flex gap-8 items-center justify-center w-150">
        <h4 className="text-black text-2xl font-bold text-hsl(220, 13%, 13%)">
          Sneakers
        </h4>

        <div className="flex gap-6 items-center ">
          <a
            href=""
            className="text-gray-400 font-medium transition duration-300 cursor-pointer hover:text-gray-500"
          >
            Collection
          </a>
          <a
            href=""
            className="text-gray-400 font-medium transition duration-300 cursor-pointer hover:text-gray-500"
          >
            Men
          </a>
          <a
            href=""
            className="text-gray-400 font-medium transition duration-300 cursor-pointer hover:text-gray-500"
          >
            Women
          </a>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <img src={image} alt="Cart icon" className="w-6 h-6 rounded-full" />
        <img
          src={image2}
          alt=" Avatar image "
          className="w-10 h-10 hover:border-2 rounded-full hover:border-Orange:hsl(26, 100%, 55%)
 "
        />
      </div>
    </div>
  );
};
