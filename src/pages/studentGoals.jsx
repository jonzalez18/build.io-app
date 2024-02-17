import react from "react";
import { Link } from "react-router-dom";
import logo from "./images/primary-logo.svg";
import ellipseO from './images/ellipseorange.svg';
import ellipseP from './images/ellipsepink.svg';
import './style.css'
const studentGoals = () => {
  return (
    <>
      {/* primary logo */}
      <Link
        to="/"
        className="w-[53px] h-[53px] rounded-full bg-[#483bb9] grid place-content-center relative -left-1"
      >
        <img src={logo} alt="back button logo" className="pt-1 scale-90" />
      </Link>

      {/* Avatar image and name */}
      <div className="grid w-9/12 grid-cols-6 mx-auto place-content-start h-min pb-8">
        <div className="grid w-full col-span-5 pl-4 text-4xl font-bold font-rubik">
          <div>My Goals</div>
        </div>
      </div>

      {/* earnings card */}
      <div className="w-10/12 h-30 mx-auto mt-1">
        <div className="grid grid-cols-9 gap-4">
          <div className="earnings grid col-span-5 self-center justify-center  h-20 bg-[#EC618E] rounded-2xl pink-shadow place-items-center">
            <img
              src={ellipseO}
              alt="background ellipse"
              className="flex flex-row relative pb-4 w-24 h-16"
            />
            <div className="absolute z-10 text-center text-white">
              <div className="text-[32px] font-extrabold">24,900</div>
              <div className=" mt-1 text-[12px] ">Earnings</div>
            </div>
          </div>
          <div className="losses grid col-span-4 self-center justify-center bg-[#EF8F6F] rounded-2xl relative orange-shadow h-20 place-items-center">
            <img
              src={ellipseP}
              alt="background ellipse"
              className="flex flex-row relative  pb-5 w-20 h-20"
            />
            <div className="absolute z-10 text-center text-white">
              <div className="text-[32px] font-extrabold">100</div>
              <div className="mt-1 text-[12px]">Losses</div>
            </div>
          </div>
        </div>
      </div>
      {/* missing out card */}

      {/* goals card */}
      <div className=" text-white pt-[10px] w-9/12 h-11 bg-[#6352DA] rounded-xl mx-auto mt-12 relative blue-shadow ">
        <div className="w-3/6 pl-5">My Goals</div>
        <img
          src=""
          alt="Goals"
          className="absolute z-10 -right-3 -bottom-7"
        />
      </div>

      {/* Leaderboard card */}
      <div className=" text-white pt-[10px] w-9/12 h-11 bg-[#6352DA] rounded-xl mx-auto mt-4 relative blue-shadow ">
        <div className="w-3/6 pl-5">Leader Board</div>
        <img src="" alt="Top 50" className="absolute z-10 top-2 right-2" />
      </div>
    </>
  );
};

export default studentGoals;
