import React from "react";
import image from "../assets/icon-cart.svg";
import image2 from "../assets/image-avatar.png";
export const Navbar = () => {
  return (
    <div className="flex justify-between mx-auto items-center border-x-0 border-t-0 border-0 border-2 border-b-gray-400 outline-none p-2 rounded-md ">
      <div className="flex gap-8 items-center bg-red-400">
        <h4 className="text-black text-2xl font-bold">Sneakers</h4>

        <div className="flex gap-6 items-center">
          <a href="" className="text-gray-400 font-medium transition duration-300 cursor-pointer hover:text-gray-500">
            Collection
          </a>
          <a href="" className="text-gray-400 font-medium transition duration-300 cursor-pointer hover:text-gray-500">
            Men
          </a>
          <a href="" className="text-gray-400 font-medium transition duration-300 cursor-pointer hover:text-gray-500">
            Women
          </a>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <img src={image} alt="Cart icon" className="w-6 h-6 rounded-full  " />border-
        <img src={image2} alt=" Avatar image " className="w-8 h-8 border-2 rounded-full border- " />
      </div>
    </div>
  );
};
