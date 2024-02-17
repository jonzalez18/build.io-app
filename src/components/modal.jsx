import React from "react";

const ModalWindow = () => {
  return (
    <>
      <div class="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div class="flex flex-col md:flex-row rounded-l-xl">
       
          <div class="p-6 md:p-12">
            <h2 class="font-serif text-xl font-medium text-center text-white md:text-left">
              Get Diet and fitness tips in you inbox
            </h2>
            <p
              class="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white
                md:text-left "
            >
              {" "}
              Eat better and exercise
            </p>
            <div class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <input
                type="text"
                placeholder="enter email"
                class="p-2 px-4 text-center text-white bg-zinc-700 border border-zinc-500 placeholder:text-xs
                        placehoder:text-center md:text-left placeholder:md-text-left focus:outline-none"
              />
              <button class="px-5 py-3 duration-500"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalWindow;
