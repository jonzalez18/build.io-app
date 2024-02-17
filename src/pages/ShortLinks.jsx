import React from "react";

const ShortLinks = () => {

     const input = document.getElementById('link-input')
     const linkForm = document.getElementById('link-form')
     const errMsg = document.getElementById('err-msg')

     linkForm.addEventListener('submit', formSubmit)

        function validUrl(string) {
            let url;
            try {
              url = new URL(string);
            } catch (_) {
              return false;
            }
            return url.protocol === "http:" || url.protocol === "https:";
          }
     
     function formSubmit(e) {
        e.preventDefault()

        if(input.value === '') {
            errMsg.innerHTML = 'Please enter Something'
            input.classList.add('border-red')
        } else if(!validUrl(input)) {

        }
     }

    return (
        <>
        <nav class="relative container mx-auto p-6">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-20">
                    <img src='images/logo.svg' alt=''></img>
                    <div class="hidden space-x-8 font-bold lg:flex">
                        <a href='/' class='text-grayishViolet hover:text-veryDarkViolet'>
                        </a>
                    </div>
                </div>
                <div class='hidden items-center space-x-6 font-bold text-grayishViolet lg:flex'
                >
                    <div class='hover:text-veryDarkViolet'>Login</div>
                    <a href='/' class='text-grayishViolet hover:text-veryDarkViolet'>
                        Sign Up</a>
                </div>
            </div>
        </nav>

        <section id='hero'>
            <div class='container flex flex-col-reverse mx-auto p-6 lg:flex-row'>
                <div class='flex flex-col space-y-10 mb-44 lg:mt-16 xl:mb-52 lg:w-1/2'>
                    <h1 class='text-5xl font-bold text-center lg:text-6xl lg:max-w-md
                    lg:text-left'> More Than just shorter links</h1>
                    <p> Build your brands</p>
                    <div>
                        <a href="/" class="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full">

                        </a>
                    </div>
                    <div class="mb-24 mx-auto">
                        <img src='' alt=''></img>
                    </div>
                </div>
            </div>
        </section>

        <section id='shorten' class='relative bg-gray-100'>
            <div max-w-4xl mx-auto p-6 space-y-6>
                <form id="link-from" class="relative flex flex-col w-full p-10
                    mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row
                     md:space-y-0 md:space-x-3">
                    <input
                    type='text'
                    class=''
                    placeholder='shorten a link here'
                    id='link-input'>

                    </input>
                    <button class='p-2 px-8 text-white bg-cyan rounded-lg 
                    hover:opacity-70 focus:outline-none'>
                    </button>
                </form>
                <div class='flex flex-col items-center justify-between w-full p-6 
                bg-white rounded-lg md:flex-row'>
                    <p>
                        https://frontendmentor.io
                    </p>
                    <div class='flex flex-col items-center justify-end flex-1
                        space-x-4 space-y-2 md:flex-row md:space-y-0'>
                            https://rel.ink/h33fje
                    </div>
                    <button class='p-2 px-8 text-white bg-cyan rounded-lg 
                    hover:opacity-70 focus:outline-none'>
                    </button>
                </div>
            </div>
        </section>
        <section id='stats' class="py-24 bg-gray-100">
            <div>
                <h2>
                    Advanced Statistics
                </h2>
                <p>
                    Track how your links are performing
                </p>
            </div>
        </section>

        <section id='features' class='pb-32 bg-gray-100'>
            <div class='relative container flex flex-col items-start px-6
                mx-auto md:flex-row md:space-x-7'>
                    <div class='hidden absolute top-24 left-16 w-1/2 h-3 bg-cyan
                        md:block'>

                    </div>
                    <div class='absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden'>

                    </div>
                    <div class='relative flex flex-col p-6 space-y-6 bg-white rounded-lg
                    md:w-1/3'>
                        <div class='absolute -ml-10 left-1/2 -top-10 md:left-16'>
                            <div class='flex items-center justify-center w-20 h-20 p-4
                            rounded-full bg-veryDarkViolet'>
                                <img src='images/icon-brand-recognition.svg' alt=''></img>
                            </div>
                        </div>
                        <h5 class=''>

                        </h5>
                        <p>

                        </p>
                    </div>

            </div>
        </section>
        <section id='cta' class='py-24 bg-darkViolet'>
            <div class="flex flex-col p-2 space-y-6">
                <h5>
                    Boost your links today
                </h5>
                <button class='px-10 py-5 mx-auto text-2xl'>

                </button>
            </div>
        </section>

        <footer class='py-16 bg-veryDarkViolet'>
            <div class='container flex flex-col items-center justify-between mx-auto
            space-y-16 md:flex-row md:space-y-0 md:items-start'>
                <img src="images/logo.svg" alt=''></img>

                <div>
                    <div class='flex flex-col items-center'>
                    </div>
                    <div>
                        <div>

                        </div>
                    </div>
        
                </div>
            </div>
        </footer>
        </>
    )
}
export default ShortLinks;