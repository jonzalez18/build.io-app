import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import { Link } from 'react-router-dom';
import {GiWeightLiftingUp} from 'react-icons/gi'
import { authorizedUser } from '../firebase.config';
import { useUser } from '../store/store';
import { UserAuth } from './routes/Auth';

const Navbar = (props) => {
  const [nav, setNavBar] = useState(false)
  const {logout} = UserAuth()
  const navigate = useNavigate();

  const { user } = UserAuth();
  
  const handleClick = (e) =>  {
    if(!nav){
    setNavBar(true)}
    else {
      setNavBar(false)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (e) {
      console.log(e.message)
    }
  }
    return (
        <>
   <nav class="container relative mx-auto p-6">
            {!nav ?
                <div class="flex items-center justify-between
                    space-x-20 my-6">
                        <div class="z-30 hover:text-red-500">
                            <Link to='/'><GiWeightLiftingUp/>{" "}Build.io</Link>
                            
                        </div>

                        <div class='hidden items-center space-x-10
                            uppercase text-grayishBlue md:flex'>
                            <Link to='/product' class="tracking-widest hover:text-red-500">Product</Link>
                            <Link to='/testimonial' class="tracking-widest hover:text-red-500">Testimonials</Link>
                            <Link to='/pricing' class="tracking-widest hover:text-red-500">Subscription</Link>
                            <Link to='/time' class="tracking-widest hover:text-red-500">Calender</Link>
                            { !user ?
                            <Link to='/login' class='px-8 py-2 text-white bg-red-500 border-2
                                border-softRed rounded-lg shadow-md hover:text-red-500 hover:bg-white'>
                                Login
                            </Link>
                            :
                            <Link onClick={handleLogout} class='px-8 py-2 text-white bg-red-500 border-2
                            border-softRed rounded-lg shadow-md hover:text-red-500 hover:bg-white'>Logout</Link>
                            }
                        </div>
                        
                        <button id='menu-btn' class='z-30 block md:hidden
                          focus:outline-none hamburger' onClick={handleClick}>
                            <span class="hamburger-top"></span>
                            <span class="hamburger-middle"></span>
                            <span class="hamburger-bottom"></span>
                        </button>
                    </div>
                    :
                    
              
                      
                    <div id='menu' class='fixed inset-0 z-20 flex flex-col items-center
                        self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest
                        text-white uppercase divide-y divide-gray-500 opacity-90 bg-blue-900'>
                           
                          <div class="z-30 hover:text-red-500">
                            <Link to='/'><GiWeightLiftingUp/>{" "}Build.io</Link>
                          </div>

                          <div class='w-full py-3 text-center'>
                            <Link to='/product' class='block hover:text-red-500'>Product</Link>
                          </div>
                          <div class='w-full py-3 text-center'>
                          <Link to='/testimonial' class="tracking-widest hover:text-red-500">Testimonials</Link>
                          </div>
                          <div class='w-full py-3 text-center'>
                            <Link to='/pricing' class='block hover:text-red-500'>Subscription</Link>
                          </div>
                          <div class='w-full py-3 text-center'>
                            <Link to='/time' class='block hover:text-red-500'>Calender</Link>
                          </div>
                        { !user ?
                          <div class='w-full py-3 text-center'>
                            <Link to='/login' class='block hover:text-red-500'>Login</Link>
                          </div>
                          :
                          <div class='w-full py-3 text-center'>
                            <Link onClick={handleLogout} class='block hover:text-red-500'>Logout</Link>
                          </div>
                          }
                          <button id='menu-btn' class='z-30 block md:hidden
                          focus:outline-none open hamburger'>
                            <span class="open hamburger-top"  onClick={handleClick}></span>
                            <span class="open hamburger-middle"></span>
                            <span class="open hamburger-bottom"  onClick={handleClick}></span>
                        </button>
                        
                    </div>
                
                  }
            </nav>
        
        </>
    )
}

export default Navbar;