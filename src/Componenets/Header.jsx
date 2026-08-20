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
            <div className="flex gap-4 items-center bg-primary justify-evenly text-center  ">
              <div className="flex gap-4 bg-pale rounded-lg w-40 items-center justify-center py-2 px-3  ">
                <button className="text-primary font-semibold text-xl text-center  ">
                  -
                </button>
                <p className="text-center">0 </p>
                <button className="text-primary font-semibold text-xl text-center ">
                  +
                </button>
              </div>
              <div className=" items-center w-60 gap-4 flex justify-center bg-pale py-2 px-3 rounded-lg ">
                <img src={image} alt="" />

                <button
                  type="submit"
                  className="bg-secondary text-center text-white"
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
