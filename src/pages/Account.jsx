import React, {useState, useEffect} from "react";
import { UserAuth } from "../components/routes/Auth";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import axios from "axios";

const Account = () => {
  const { user, token } = UserAuth();

  const handlepost = async () => {
    const res = await axios.post('http://localhost:5000/user/blogs',
    {headers : {
     'Authorization': `Bearer ${token}`
   }}
    ).then(console.log(res)).catch(console.log("error"))
   }

  const handleget =  async () => {
   const res = await axios.get('http://localhost:5000/user/blogs',
   {headers : {
    'Authorization': `Bearer ${token}`
  }}
   ).then(console.log(res)).catch(console.log("error"))
  }

  return (
    <>
      <Navbar/>
      <div className="flex items-center justify-center">
        <div className="bg-white w-1/3 mt-10 rounded-lg">
          <div className="flex items-center justify-center pt-10 flex-col">
            <img
              src="https://i.pinimg.com/originals/a8/bc/90/a8bc90ea196737604770aaf9c2d56a51.jpg"
              className="rounded-full w-32"
              alt=""
            />
            <h1 className="text-gray-800 font-semibold text-xl mt-5">Bae Suzy</h1>
            <h1 className="text-gray-500 text-sm">California, United States</h1>
            <h1 className="text-gray-500 text-sm p-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h1>
            <h2 className="text-gray-500 text-sm p-4 text-center">
              User Email: {user}
            </h2>
          </div>
          <div className="flex justify-between p-4">
            <div>
              <h1 className="text-xs uppercase text-gray-500">Membership</h1>
              <h1 className="text-xs text-yellow-500">Gold Member</h1>
            </div>
            <div>
              <button onClick={handlepost} className="text-xs text-green-300 border-2 py-1 px-2 border-green-300">
                Renew
              </button>
              <button onClick={handleget} className="text-xs text-green-300 border-2 py-1 px-2 border-green-300">
                REdo
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-3 mb-6 flex-col">
            <h1 className="text-xs text-gray-500">Get Connected</h1>
            <div className="flex mt-2">
              <img
                src="https://www.iconsdb.com/icons/preview/gray/facebook-xxl.png"
                alt=""
                className="w-6 border-2 p-1 rounded-full mr-3"
              />
              <img
                src="https://www.iconsdb.com/icons/preview/gray/twitter-xxl.png"
                alt=""
                className="w-6 border-2 p-1 rounded-full mr-3"
              />
              <img
                src="https://www.iconsdb.com/icons/preview/gray/google-plus-xxl.png"
                alt=""
                className="w-6 border-2 p-1 rounded-full mr-3"
              />
              <img
                src="https://www.iconsdb.com/icons/preview/gray/instagram-6-xxl.png"
                alt=""
                className="w-6 border-2 p-1 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Account;
