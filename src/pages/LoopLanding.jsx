import React from "react";

const LoopLanding = () => {
     const btn = document.getElementById('menu-btn');
     const menu = document.getElementbyId('menu')
     btn.addEventListener('click', navToggle)
    
    function navToggle() {
        btn.classList.add('open')
        menu.classList.toggle('flex')
        menu.classList.toggle('hidden')
    }

  return (
    <>
      <section id="hero">
        <div class="container max-w-6xl mx-auto px-6 py-12 pt-16 md:px-0">
          <div class="flex items-center justify-between font-bold text-white">
            <img src="image/logo.svg" alt="" />
            <div class="hidden h-10 font-alata md:flex md:space-x-8">
              <div class="group">
                <a href="/">careers</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div class="group">
                <a href="/">Products</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div class="group">
                <a href="/">Support</a>
                <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
            <div id='menu' class="absolute top-0 bottom-0 left-0 flex-col
                self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg
                text-white uppercase bg-black">

                </div>
          </div>
        </div>
      </section>

      <section id="snippets">
        <div class="max-w-6xl mx-auto text-center my-20 px-10">
          <h3 class="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
            Keep track of your snippets
          </h3>
          <p class="max-w-3xl mx-auto mb-24 text-xl leading-9">
            Words of snippets
          </p>
        </div>
      </section>

      <section id="features">
        <div
          class="relativer container flex flex-col max-w-6xl mx-auto
            my-32 text-center px-6 text-gray-900 md:flex-row md:px-0"
        >
          <div class="flex flex-col md:flex-row md:space-x-32">
            <img src="images/desktop/image-interactive.jpg" alt=""></img>
            <div
              class="top-48 pr-0 bg-white md:absolute md:right-0
                md:py-20 md:pl-20"
            >
              <h2
                class="max-w-lg mt-10 mb-6 font-sans text-4xl text-center
                    text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left"
              >
                Virtual Reality
              </h2>
            </div>

            <div class="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:w-1/2 md:text-left md:pl-16">
              <div>
                <h5 class="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  Quick Search
                </h5>
                <p class="max-w-md text-grayishBlue">Retrieve any snippet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="creations">
        <div
          class="container max-w-6xl mx-auto my-32 text-center text-gray-900
         md:px-0 px-6"
        >
          <div class="flex justify-center mb-20 md:justify-between">
            <h2
              class="max-w-lg mt-10 mb-6 font-sans text-4xl text-center
                    text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left"
            >
              Virtual Reality
            </h2>
            <button
              class="button hidden px-10 py-2 my-0 font-bold
                    widest:.3m uppercase border-2 border-black font-alata
                    hover:bg-black hover:text-white md:block"
            ></button>
          </div>
          <div
            class="flex flex-col justify-between w-full space-y-6
                text-2xl text-white uppercase md:flex-row md:space-y-0
                md:space-x-8"
          >
            <div class="group relative overflow-hidden md:w-1/4">
              <img
                class="hidden w-full duration-200
                        md:block group-hover:scale-110"
                src="images/mobile/image-deep-earth.jpg"
                alt=""
              ></img>
              <div
                class="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent
                         to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"
              ></div>
              <h5
                class="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10
                         group-hover:scale-110 group-hover:text-black"
              >
                Deep Earth
              </h5>
            </div>
          </div>
          <div class="">
            <button ></button>
          </div>
        </div>
      </section>

      <section id="footer" class="bg-black">
        <div class=" container max-w-6xl mx-auto text-center py-10">
         <div class='flex flex-col items-center mb-8 space-y-6 md:flex-row
            md:space-y-0 md:justify-between md:items-start'>
                <div class="flex flex-col items-center space-y-8 md:items-start 
                md:space-y-4">
                    <div class='h-8'>
                    <img src='' alt="" class='w-44 md:ml-3'></img>
                    </div>
                    <div class="flex flex-col items-center space-y-4 font-bold
                        text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                            <div class='h-10 group'>
                                <a href="/">
                                    <img src='' alt=''></img>
                                </a>
                                <div class="mx-2 group-hover:border-b group-hover:border-blue-50">

                                </div>
                            </div>
                    </div>
                </div>
                <div class="flex flex-col items-start justify-between space-y-4
                    text-gray-500">
                        <div class='h-8 group'>
                            <a href="/">
                                <img src='' alt=''></img>
                            </a>
                        </div>
                </div>
         </div>
        </div>
      </section>
    </>
  );
};
export default LoopLanding;
