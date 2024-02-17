import React from "react";

const DiffFooter = () => {
  return (
    <>
      <footer class="bg-darkBlue2 text-white">
        <div class="container mx-auto pt-12 px-5 pb-10">
          <div class="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
            <div class="mt-10 space-y-6">
              <div class="flex items-center space-x-3 md:-mt-10">
                <div class="w-6">
                  <img src="images/icon-phone.svg" alt="" class="scale-10" />
                </div>
                <div>+1-543-123-4567</div>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6">
                  <img src="images/icon-email.svg" alt="" class="scale-10" />
                </div>
                <div>example@fylo.com</div>
              </div>
            </div>

            <div class="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
              <div class="flex flex-col space-y-3">
                <a href="/product">Product</a>
                <a href="/testimonials">Testimonials</a>
                <a href="/pricing">Subscription</a>
                <a href="/login">Login</a>
              </div>
              <div class="flex flex-col space-y-3">
                <a href="/">Contact Us</a>
                <a href="/">Terms</a>
                <a href="/">Privacy</a>
              </div>
            </div>

            <div class="flex justify-center pb-10 space-x-3">
              <div>
                <a href="#">
                  <img
                    src="https://raw.githubusercontent.com/bradtraversy/tailwind-course-projects/e19a41e12bc2e3fb5718099c6efcf5e71df31982/website-projects/fylo/images/facebook.svg"
                    alt=""
                    class="p-2 bg-darkBlue rounded-full ficon"
                  />
                </a>
              </div>
              <div>
                <a href="#">
                  <img
                    src="https://raw.githubusercontent.com/bradtraversy/tailwind-course-projects/e19a41e12bc2e3fb5718099c6efcf5e71df31982/website-projects/fylo/images/twitter.svg"
                    alt=""
                    class="p-2 bg-darkBlue rounded-full ficon"
                  />
                </a>
              </div>
              <div>
                <a href="#">
                  <img
                    src="https://raw.githubusercontent.com/bradtraversy/tailwind-course-projects/e19a41e12bc2e3fb5718099c6efcf5e71df31982/website-projects/fylo/images/instagram.svg"
                    alt=""
                    class="p-2 bg-darkBlue rounded-full ficon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default DiffFooter;
