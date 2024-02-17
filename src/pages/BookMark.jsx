import React from 'react'
import { Link } from 'react-router-dom'


const Bookmark = () => {

    return (
        <>
            <nav class="container relative mx-auto p-6">
                <div class="flex items-center justify-between
                    space-x-20 my-6">
                        <div class="z-30">
                            <img src='' alt='' id='logo'>
                            </img>
                        </div>
                        <div class='hidden items-center space-x-10
                            uppercase text-grayishBlue md:flex'>
                            <Link class="tracking-widest hover:text-softRed">Product</Link>
                            <Link class="tracking-widest hover:text-softRed">Testimonials</Link>
                            <Link class="tracking-widest hover:text-softRed">Subscription</Link>
                            <Link class="tracking-widest hover:text-softRed">FAQ</Link>
                            <Link class='px-8 py-2 text-white bg-softRed border-2
                                border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white'>
                                Login
                            </Link>
                        </div>
                    </div>
            </nav>
        


        </>
    )
}

export default Bookmark