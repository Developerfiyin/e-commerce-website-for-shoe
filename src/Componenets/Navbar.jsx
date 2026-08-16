import React from "react"
import image from "../assets/icon-cart.svg";
import image2 from '../assets/image-avatar.png';
export const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-300 border-none border-2 border-b-gray-400 outline-none  bg-green-400 p-2 rounded-md ">
  
                        
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

      <div className="flex gap-4 items-center">
   <img src={image} alt="Cart icon" className="w-6 h-6 rounded-full  " />
    <img src={image2} alt="Cart"  className="w-8 h-8 rounded-full" />

      </div>
    </div>
  );
};
