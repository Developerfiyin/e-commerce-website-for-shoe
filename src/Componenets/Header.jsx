import React from "react";
import { Navbar } from "./Navbar";
import product1 from "../assets/image-product-1.jpg";

const Header = () => {
  return (
    <div className=" ">
      <Navbar />
      <div className="  min-h-screen bg-gray-100 flex items-center justify-center">
        <div className=" flex items-center justify-center gap-20 py-20">
          <div className=" w-1/2 ">
            <img src={product1} alt="" className="rounded-lg" />
          </div>
          {/*the other mail container */}

          <div>
            <p className="text-grayishblue font-medium"> SNEAKER COMPANY</p>
            <h3 className="text-3xl text-secondary font-bold  ">
              Fall Limited Edition Sneakers{"  "}
            </h3>
            <p className=" text-gray-300 font-light ">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
