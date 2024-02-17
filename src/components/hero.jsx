import React from 'react'

const Hero = () => {

    return (
        <>
               <section
      id="hero"
      class="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom"
    >
   
      <div class="container mx-auto px-6 text-center md:pt-20 pb-52">
        <img src="https://cdn.dribbble.com/users/1304577/screenshots/4227985/gym-guy-8x6.gif" alt="" class="mx-auto" />
        <h1
          class="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl"
        >
          All your gym accesory needs in one secure location,
            get discounts when you sign up for a membership with our gym.
        </h1>
        <p class="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
          Build.io comes with fitness plans, home gym equipment, and a gym membership,
          all for an exclusive price.
        </p>
        <button class="p-3 rounded-full w-52 bg-cyan-500 hover:scale-95">
          Get Started
        </button>
      </div>
    </section>



 
    <section id="productive" class="bg-white dark:bg-darkBlue">
      
      <div
        class="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16"
      >

        <div class="md:w-1/2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/283/009/original/workout-at-gym-concept-in-flat-cartoon-design-man-doing-exercises-with-dumbbells-in-sports-club-doing-weightlifting-and-strength-training-at-gym-illustration-with-people-scene-background-vector.jpg"
            alt=""
            class="mb-10"
          />
        </div>
   
        <div class="flex flex-col items-start md:w-1/2">
          <div class="flex flex-col space-y-5">
            <h4 class="max-w-md text-xl font-bold md:text-4xl">
              Stay productive, wherever you are
            </h4>
            <p class="text-md md:text-lg">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>

            <p class="text-md md:text-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>


          <div class="block mt-4">
            <a href="/" class="border-b border-accentCyan text-accentCyan">
              See how Build.io works
              <img src="images/icon-arrow.svg" alt="" class="inline pb-2" />
            </a>
          </div>
        </div>
      </div>
    </section>

        </>
    )
}

export default Hero;