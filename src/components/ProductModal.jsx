import React from "react";
import Footer from "./footer";
import Navbar from "./Navbar";
import Testimonial from "./testimonialProduct";

const ProductModal = () => {
  return (
    <>
    <Navbar></Navbar>
      <div class="flex items-center justify-center min-h-screen bg-slate-100">
        <div
          class="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl 
            shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-10 md:p-16"
        >
          <div>
            <img
              src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650901783-run-home-gym-equipment-slide-17-1650901776.png"
              alt=""
              class="mx-auto duration-200 w-60 hover:scale-105"
            ></img>
          </div>
          <div class="flex flex-col space-y-6">
            <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <div class="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                Free Shipping
              </div>
            </div>
            <div class="max-w-sm text-2xl font-mediuk">Razer Kraken Kitty</div>
            <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p class="line-through">444</p>
              <p class="text-5xl font-bold">3234</p>
              <p class="text-sm font-light text-gray-400">
                {" "}
                The offer is valid till whenever
              </p>
            </div>
            <div class="group">
              <button
                class="w-full bg-blue-600 text-white border-b-8
                         border-b-blue-800 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-800
                          group-hover:border-t-blue-600 group-hover:shadow-lg"
              >
                Add to Cart
              </button>
            </div>
            <div class="flex items-center space-x-3 group">
              <div
                class="w-3 h-3 bg-green-400 rounded-full
                        group-hover:animate-ping"
              ></div>
              <div class="text-sm">50 pcs</div>
            </div>
            <div
              class="flex flex-col space-y-4 md:space-y-0 md:space-x-4
                    md:flex-row"
            >
              <button
                class="flex items-center justify-content py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg
                         hover:-translate-y-0.5 transition-all duration-150"
              >
                Add to Wishlist
              </button>
              <img src="" alt=""></img>
              <span>Add to Wishlist</span>
            </div>
          </div>
        </div>
      </div>
      <div class='row-1'>
        <Testimonial/>
      </div>
      <Footer></Footer>
    </>
  );
};
export default ProductModal;
