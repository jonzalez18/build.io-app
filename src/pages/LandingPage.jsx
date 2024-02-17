import React from 'react'


const LandingPage = () => {

    return (
        <>
            <section id="hero">
                <div class='max-w-6xl mx-auto text-center mb-40 px-10 pt-16'>
                    <img scr="" alt=""
                        class="mx-auto my-16">
                    </img>
                    <h3 class="mb-8 text-4-xl font-bond text-darkGrayishBlue">
                         A History of everything</h3>
                    <p class="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
                        Clipboard allows you to track and organize everything you copy.
                    </p>
                    <div class="flex flex-col justify-center w-full space-y-6 text-xl">
                        <a href="/" class="p-4 px-8">Download for IOS</a>
                    </div>
                </div>
            </section>
            <section id="snippets">
                <div class="max-w-6xl mx-auto text-center my-20 px-10">
                    <h3 class="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
                        Keep track of your snippets
                    </h3>
                    <p class="max-w-3xl mx-auto mb-24 text-xl leading-9">Words of snippets</p>
                </div>
            </section>
            <section id='features' >
                <div class="max-w-6xl mx-auto text-center my-20 px-10">
                    <div class="flex flex-col md:flex-row md:space-x-32">
                        <div class='md:w-1/2'>
                            <img src="" alt=''
                            class="md:absolute top-0 right-[50%]">
                            </img>
                        </div>

                        <div class='flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:w-1/2 md:text-left md:pl-16'>
                            <div>
                                <h5 class="mb-2 text-2xl font-bold text-darkGrayishBlue">
                                Quick Search
                                </h5>
                                <p class="max-w-md text-grayishBlue">
                                    Retrieve any snippet
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section id='access'>
                <div class="max-w-6xl mx-auto text-center my-20 px-10">
                    <h3>Access Clipboard Anywhere</h3>
                    <p class="max-w-3xl mx-auto mb-24 text-xl leading-9">
                        Wehter you are on the Go or at your computer
                    </p>
                </div>
            </section>
            <section id="supercharge">
            <div class="max-w-6xl mx-auto text-center my-20 px-10">
            <h3>SuperCharge</h3>
                    <p class="max-w-3xl mx-auto mb-24 text-xl leading-9">
                        SuperCharge your workflow anywhere you go
                    </p>
            </div>
            </section>
        </>
    )
}
export default LandingPage;