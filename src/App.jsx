import { useState } from "react";
import Home from "./Componenets/Home";
import product1 from "../src/assets/image-product-1.jpg";
import image2 from "../src/assets/icon-plus.svg";

function App() {
  return (
    <>
      <section id="center">
        <Home />

        {/* <div className=" bg-blue-500 h-screen ">
          <div  className=" flex justify-center gap-4 mx-auto items-center w-2/4 bg-primary
            <div className=" flex items-center">
              <img src={product1} alt="" className=" rounded-lg " />
            </div>

            <div className="" >
              <p className="text-grayishblue font-medium"> SNEAKER COMPANY</p>
              <h3 className="text-3xl text-secondary font-bold  ">
                
                Fall Limited Edition Sneakers{"  "}
              </h3>
              <p className=" text-gray-300 font-light ">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
              </p>
      
            </div>
          </div> 
        </div> */}
      </section>
    </>
  );
}

export default App;
