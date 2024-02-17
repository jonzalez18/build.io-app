import React from 'react'


const Fylo = () => {

    return (
        <>
            <header class="container mx-auto mt-10 px-6 text-center h-40">
                <div class="bg-logo-light dark:logo-dark-mode bg-no-repeat h-20 w-48 mx-auto">

                </div>
                <div class='flex items-center justify-center space-x-4 md:space-x-10 md:absolute
                    top-12 right-10'>
                        <a href="#features" class="hover:text-accentCyan">Features</a>
                        <a href="#testimonials" class='hover:text-accentCyan'>Testimonials</a>
                        
                        <button class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 ">

                        </button>
                </div>
            </header>

            <section id="hero" class="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat
                    bg-contain bg-bottom">
                <div class="container mx-auto px-6 text-center md:pt-20 pb-52">
                    <img src=''  class="mx-auto" alt=''></img>
                    <h1 class='max-w-2xl mx-auto mb-10'>
                        All your files in one secure location, assessible anywhere.
                    </h1>
                    <p></p>
                    <button class='p-3 rounded-full w-52 bg-accentCyan'></button>
                </div>
            </section>
            <section id="features" class='pt-12 bg-gray-50 dark:bg-darkBlue'>
                <div class="container mx-auto px-6 pb-32">
                    <div class="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
                        <div class="flex flex-col items-center space-y-2 md:w-1/2">
                            <div class='flex= items-center justify-center h-24 mb-6'>
                                <img></img>
                            </div>
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Fylo;