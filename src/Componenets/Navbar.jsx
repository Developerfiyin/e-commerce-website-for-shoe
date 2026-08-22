import React from "react";
import image from "../assets/icon-cart.svg";
import image2 from "../assets/image-avatar.png";
import logo from "../assets/logo.svg"
export const Navbar = () => {
  return (
    <div className="flex justify-between mx-auto items-center w-[90%] max-w-[1300px] rounded-md border-x-0 border-t-0 border-0 border-2 border-b-gray-400">
      <div className="flex gap-8 items-center justify-center h-[100px] ">
        <h4 className="text-dark-blue text-2xl font-bold ">
          <img src={logo} alt="" />
        </h4>
        <div className="flex gap-6 items-center ">
          <a
            href=""
            className="text-gray font-medium transition duration-300 cursor-pointer hover:text-gray-500"
          >
            Collection
          </a>
          <a
            href=""
            className="text-gray font-medium transition duration-300 cursor-pointer hover:text-gray-500"
          >
            Men
          </a>
          <a
            href=""
            className="text-gray font-medium transition duration-300 cursor-pointer hover:text-gray-500"
          >
            Women
          </a>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <img src={image} alt="Cart icon" className="w-6 h-6 rounded-full text-gray " />
        <img
          src={image2}
          alt="user avatar image"
          className="w-10 h-10 hover:border-2 cursor-pointer hover:outline-0 border-0 rounded-full hover:border-primary transition duration-300 "
        />
      </div>
    </div>
  );
};
