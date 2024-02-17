import React, {useState} from "react";
import Footer from "./footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { authorizedUser } from "../firebase.config";
import { Link } from "react-router-dom";
import { UserAuth } from "./routes/Auth";

const SignUp = () => {
    const {createUser} = UserAuth()
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      
      await createUser(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(e.message)
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
  return (
    <>
    <Navbar/>
      <div class="flex items-center justify-center min-h-screen bg-blue-50">
        <div class="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-10">
          <div class="p-6 md:p-20">
            <h2 class="font-mono mb-5 text-4xl font-bold">Sign Up</h2>
            <p class="max-w-sm mb-12 font-sans font-light text-gray-600">
              Sign up with Build.io today!
            </p>
            <div>
            <input
              id='email-address'
              name='email'
              type="email"
              required
              class="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Email address"
              onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
            <div>
             <input
              id='password'
              name='password'
              type="password"
              required
              class="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div class="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
              <div class="font-thin text-cyan-700">Forgot password</div>

              <button onClick={onSubmit} class="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                <span>Sign up</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-7"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="13" y1="18" x2="19" y2="12" />
                  <line x1="13" y1="6" x2="19" y2="12" />
                </svg>
              </button>
            </div>

            <p>
                        Already have an account?{' '}
                        <Link to="/login" >
                            Sign in
                        </Link>
            </p>  

            <div class="mt-12 border-b border-b-gray-300"></div>

            <p class="py-6 text-sm font-thin text-center text-gray-400">
              or log in with
            </p>

            <div class="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              <button class="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                <img src="https://github.com/bradtraversy/tailwind-course-projects/blob/main/mini-projects/login-modal/images/facebook.png?raw=true" alt="" class="w-9" />
                <span class="font-thin">Facebook</span>
              </button>
              <button class="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                <img src="https://github.com/bradtraversy/tailwind-course-projects/blob/main/mini-projects/login-modal/images/google.png?raw=true" alt="" class="w-9" />
                <span class="font-thin">Google</span>
              </button>
            </div>
          </div>

          <img
            src="https://github.com/bradtraversy/tailwind-course-projects/blob/main/mini-projects/login-modal/images/image.jpg?raw=true"
            alt=""
            class="w-[430px] hidden md:block"
          />

          <div class="group absolute -top-5 right-4 flex items-center
           justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white
            md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition
             duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-black group-hover:text-gray-600"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default SignUp;;
