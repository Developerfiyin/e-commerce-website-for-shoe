import { useState } from "react";
import Home from "./Componenets/Home";
import product1 from "../src/assets/image-product-1.jpg";
//import product12 from "./assets/image-product-1.png"
import image2 from "../src/assets/icon-plus.svg";

function App() {
  return (
    <>
      <section id="center">
        <Home />

        <div className=" bg-blue-500 p-2 h-screen ">
          <div className=" flex justify-evenly gap-4 items-center w-1/2 mx-auto bg-red-500 ">
            <div className=" ">
              <img src={product1} alt="" className=" rounded-lg " />
            </div>

            <div>
              <p className="text-gray-400 font-bold"> SNEAKER COMPANY</p>
              <h3 className="text-2xl font-semibold  ">
                {" "}
                Fall Limited Edition Sneakers{" "}
              </h3>
              <p className=" text-gray-300 font-light ">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
              </p>
              {/* */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
