import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
const Pricing = () => {
  return (
    <>
      <Navbar></Navbar>
      <div class="flex items-center justify-center min-h-screen
           bg-gray-100 rounded-3xl my-10 mx-6">
        <div
          class="grid grid-cols-1
          md:grid-cols-3 lg:grid-cols-3 gap-x-3 gap-y-6 mx-10 my-10"
        >
          <div class="bg-slate-700 md:span-col-1 rounded-xl text-white">1
            <div class="p-8 mx-3 mb-3 rounded-t-xl bg-slate-800">
              <div class="text-center uppercase">Silver</div>
              <h2 class="mt-10 font-serif text-3xl text-center">
                {" "}
                Gym Membership
              </h2>
              <h3 class="mt-2 text-center">9.99/Month</h3>
              <div>
                <a
                  href="/"
                  class="inline-block px-10 py-3 my-6 text-center border
                            border-violet-600 rounded-lg duration-200 hover:bg-violet-800"
                >
                  Purchase
                </a>
              </div>
            </div>

            <div class="border-t border-slate-700"></div>

            <div class="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div class="flex flex-col space-y-2">
                <div class="flex justify-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="MO 0h24v24H0z" fill="none" />
                    <path d="M5 1215 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Gym Membership</span>
                </div>
                <div class="flex justify-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="MO 0h24v24H0z" fill="none" />
                    <path d="M5 1215 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Option to add Member</span>
                </div>
                <div class="flex justify-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="MO 0h24v24H0z" fill="none" />
                    <path d="M5 1215 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Extra Member Benefit</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-slate-700 rounded-xl text-white">2
            <div class="p-8 mx-3 mb-3 rounded-t-xl bg-slate-800">
              <div class="text-center uppercase">Gold</div>
              <h2 class="mt-10 font-serif text-3xl text-center">
                {" "}
                Gym Membership 
              </h2>
              <h3 class="mt-2 text-center">25.00/Month</h3>
              <div>
                <a
                  href="/"
                  class="inline-block px-10 py-3 my-6 text-center border
                 border-violet-600 rounded-lg duration-200 hover:bg-violet-800"
                >
                  Purchase
                </a>
              </div>
            </div>

            <div class="border-t border-slate-700"></div>

            <div class="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div class="flex flex-col space-y-2">
                <div class="flex justify-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="MO 0h24v24H0z" fill="none" />
                    <path d="M5 1215 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Gym Membership Gold</span>
                </div>
                <div class="flex justify-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="MO 0h24v24H0z" fill="none" />
                    <path d="M5 1215 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Option to add Member + Member Instructor</span>
                </div>
                <div class="flex justify-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="MO 0h24v24H0z" fill="none" />
                    <path d="M5 1215 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Extra Member Benefit</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-slate-700 rounded-xl text-white">3
            <div class="p-8 mx-3 mb-3 rounded-t-xl bg-slate-800">
              <div class="text-center uppercase">Platinum</div>
              <h2 class="mt-10 font-serif text-3xl text-center">
                {" "}
                Gym Membership 
              </h2>
              <h3 class="mt-2 text-center">29.99/Month</h3>
              <div>
                <a
                  href="/"
                  class="inline-block px-10 py-3 my-6 text-center border
                 border-violet-600 rounded-lg duration-200 hover:bg-violet-800"
                >
                  Purchase
                </a>
              </div>
            </div>

            <div class="border-t border-slate-700"></div>

            <div class="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div class="flex flex-col space-y-2">
                <div class="flex justify-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="MO 0h24v24H0z" fill="none" />
                    <path d="M5 1215 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Gym Membership</span>
                </div>
                <div class="flex justify-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="MO 0h24v24H0z" fill="none" />
                    <path d="M5 1215 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Option to add Member</span>
                </div>
                <div class="flex justify-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="MO 0h24v24H0z" fill="none" />
                    <path d="M5 1215 5l10 -10" />
                  </svg>
                  <span class="text-sm ml-1">Extra Member Benefit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Pricing;
