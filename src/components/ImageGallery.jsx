import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';


const Gallery = () => {
    const navigate = useNavigate()

    const productClick = () => {
        navigate('/productModal')
    }
    return (
        <> 
        <Navbar/>
        <div class="flex items-center justify-center min-h-screen bg-darkViolet">

            <div class="grid grid-row-1  bg-white p-3 m-3 space-y-1 shadow-2xl rounded-3xl md:p-20">
                <div class='text-black-800 font-bold sans-serif text-3xl'>
                    Purchase Home Gym Equipment
                </div>
                <div class="flex items-center justify-center space-y-3
                        md:flex-row md:space-y-0 md:space-x-6 md:mb-24 md:justify-end">
                    <div class='grid gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 '>
                        <div class='relative group'>
                            <img onClick={productClick} src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650901783-run-home-gym-equipment-slide-17-1650901776.png' alt='' class='w-72'></img>
                                <div class='absolute bottom-0 left-0 right-0 p-2 px-4 
                                     text-white duration-500 bg-black opacity-0 group-hover:opacity-100
                                     bg-opacity-40'>
                                    <div class='flex justify-between w-full'>
                                        <div class='font-normal'>
                                            <p class='text-sm'>Dumbells</p>
                                            <p class="text-xs">59.99</p>
                                        </div>
                                        <div class='flex items-center text-sm'>
                                          add to cart <Link to="/productModal"><MdOutlineShoppingCart></MdOutlineShoppingCart></Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class='relative group'>
                            <img onClick={productClick} src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650901783-run-home-gym-equipment-slide-17-1650901776.png' alt='' class='w-72'></img>
                                <div class='absolute bottom-0 left-0 right-0 p-2 px-4 
                                     text-white duration-500 bg-black opacity-0 group-hover:opacity-100
                                     bg-opacity-40'>
                                    <div class='flex justify-between w-full'>
                                        <div class='font-normal'>
                                            <p class='text-sm'>Dumbells</p>
                                            <p class="text-xs">59.99</p>
                                        </div>
                                        <div class='flex items-center text-sm'>
                                          add to cart <Link to="/productModal"><MdOutlineShoppingCart></MdOutlineShoppingCart></Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class='relative group'>
                            <img onClick={productClick} src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650901783-run-home-gym-equipment-slide-17-1650901776.png' alt='' class='w-72'></img>
                                <div class='absolute bottom-0 left-0 right-0 p-2 px-4 
                                     text-white duration-500 bg-black opacity-0 group-hover:opacity-100
                                     bg-opacity-40'>
                                    <div class='flex justify-between w-full'>
                                        <div class='font-normal'>
                                            <p class='text-sm'>Dumbells</p>
                                            <p class="text-xs">59.99</p>
                                        </div>
                                        <div class='flex items-center text-sm'>
                                          add to cart <Link to="/productModal"><MdOutlineShoppingCart></MdOutlineShoppingCart></Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class='relative group'>
                            <img onClick={productClick} src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650901783-run-home-gym-equipment-slide-17-1650901776.png' alt='' class='w-72'></img>
                                <div class='absolute bottom-0 left-0 right-0 p-2 px-4 
                                     text-white duration-500 bg-black opacity-0 group-hover:opacity-100
                                     bg-opacity-40'>
                                    <div class='flex justify-between w-full'>
                                        <div class='font-normal'>
                                            <p class='text-sm'>Dumbells</p>
                                            <p class="text-xs">59.99</p>
                                        </div>
                                        <div class='flex items-center text-sm'>
                                          add to cart <Link to="/productModal"><MdOutlineShoppingCart></MdOutlineShoppingCart></Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class='relative group'>
                            <img onClick={productClick} src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650901783-run-home-gym-equipment-slide-17-1650901776.png' alt='' class='w-72'></img>
                                <div class='absolute bottom-0 left-0 right-0 p-2 px-4 
                                     text-white duration-500 bg-black opacity-0 group-hover:opacity-100
                                     bg-opacity-40'>
                                    <div class='flex justify-between w-full'>
                                        <div class='font-normal'>
                                            <p class='text-sm'>Dumbells</p>
                                            <p class="text-xs">59.99</p>
                                        </div>
                                        <div class='flex items-center text-sm'>
                                          add to cart <Link to="/productModal"><MdOutlineShoppingCart></MdOutlineShoppingCart></Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class='relative group'>
                            <img onClick={productClick} src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650901783-run-home-gym-equipment-slide-17-1650901776.png' alt='' class='w-72'></img>
                                <div class='absolute bottom-0 left-0 right-0 p-2 px-4 
                                     text-white duration-500 bg-black opacity-0 group-hover:opacity-100
                                     bg-opacity-40'>
                                    <div class='flex justify-between w-full'>
                                        <div class='font-normal'>
                                            <p class='text-sm'>Dumbells</p>
                                            <p class="text-xs">59.99</p>
                                        </div>
                                        <div class='flex items-center text-sm'>
                                          add to cart <Link to="/productModal"><MdOutlineShoppingCart></MdOutlineShoppingCart></Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class='relative group'>
                            <img onClick={productClick} src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650901783-run-home-gym-equipment-slide-17-1650901776.png' alt='' class='w-72'></img>
                                <div class='absolute bottom-0 left-0 right-0 p-2 px-4 
                                     text-white duration-500 bg-black opacity-0 group-hover:opacity-100
                                     bg-opacity-40'>
                                    <div class='flex justify-between w-full'>
                                        <div class='font-normal'>
                                            <p class='text-sm'>Dumbells</p>
                                            <p class="text-xs">59.99</p>
                                        </div>
                                        <div class='flex items-center text-sm'>
                                          add to cart <Link to="/productModal"><MdOutlineShoppingCart></MdOutlineShoppingCart></Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class='relative group'>
                            <img onClick={productClick} src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650901783-run-home-gym-equipment-slide-17-1650901776.png' alt='' class='w-72'></img>
                                <div class='absolute bottom-0 left-0 right-0 p-2 px-4 
                                     text-white duration-500 bg-black opacity-0 group-hover:opacity-100
                                     bg-opacity-40'>
                                    <div class='flex justify-between w-full'>
                                        <div class='font-normal'>
                                            <p class='text-sm'>Dumbells</p>
                                            <p class="text-xs">59.99</p>
                                        </div>
                                        <div class='flex items-center text-sm'>
                                          add to cart <Link to="/productModal"><MdOutlineShoppingCart></MdOutlineShoppingCart></Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
          
            <Footer/>
        </>
    )
}
export default Gallery;

