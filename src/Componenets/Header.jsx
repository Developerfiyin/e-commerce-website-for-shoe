import React from "react";
import { Navbar } from "./Navbar";
import product1 from "../assets/image-product-1.jpg";
import image from "../assets/icon-cart.svg";

const Header = () => {
  return (
    <div className=" ">
      <Navbar />
      <div className="  min-h-screen bg-white flex items-center justify-center">
        <div className=" flex items-center justify-center gap-20 py-20 mx-20">
          <div className=" w-1/2 ">
            <img src={product1} alt="" className="rounded-lg " />
          </div>
          {/*the other mail container */}

          <div className="w-1/2 flex flex-col gap-6">
            <p className="text-gray font-bold "> SNEAKER COMPANY</p>
            <h3 className="text-3xl text-secondary font-bold  ">
              Fall Limited Edition Sneakers{"  "}
            </h3>
            <p className=" text-grayishblue font-medium ">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>

            <div className=" flex gap-6 items-center">
              <h3 className="font-bold text-2xl "> $125.00</h3>
              <h4 className=" font-semibold text-light-gray bg-secondary text-center py-0 px-2 rounded-md">
                {" "}
                50%
              </h4>
            </div>
            <p className="text-gray font-bold "> $250.00</p>
            <div className="flex gap-4 items-center text-center  ">
              <div className="flex gap-4 bg-light-gray rounded-lg w-40 items-center justify-evenly py-2 px-3  ">
                <button className="text-primary font-bold text-xl text-center  ">
                  -
                </button>
                <p className="text-center font-bold ">0 </p>
                <button className="text-primary font-bold text-xl text-center ">
                  +
                </button>
              </div>
              <div className=" items-center w-60 gap-4 flex justify-center bg-primary py-3 px-3 rounded-lg ">
                <img src={image} alt="" className=" w-4 h-4 blue-400" />

                <button
                  type="submit"
                  className="text-secondary text-center text-sm font-bold"
                >
                  {" "}
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
