import React from "react";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaMedium, FaTelegram } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
function Footer() {
  return (
    <section className=" mt-0   pb-10 relative z-10  ">
      <div className=" container-wrapper relative z-30">
        <div>
          <img
            src="images/foot.png"
            alt=""
            className=" mx-auto h-[175px] mb-[3rem] mt-[5rem]  rounded-full border-transparent"
          />
        </div>

        <h1 className="text-center font-mon text-lg sm:text-4xl  mb-4 relative z-[999]">
          YOU ARE WELCOME TO BE PART OF OUR COMMUNITY
        </h1>
        <div className=" bg-[#00ffc0] h-[4px] w-full max-w-2xl mx-auto"></div>

        <div className=" flex justify-center items-center mt-[3rem]">
          <a
            href="/"
            className=" bg-[#00ffc0] hover:bg-[#002732] border-2 border-[#00a57c] hover:border-[#00c5ff] rounded-md  hover:text-white text-black px-14 py-2 font-semibold font-mon text-lg sm:text-4xl"
          >
            {" "}
            Join Us Now !{" "}
          </a>
        </div>

        <div className=" flex justify-center gap-5 mt-[4rem]">
          <a href="/" className="t">
            {" "}
            <BsTwitterX className=" text-3xl sm:text-4xl  show-xxl hover:rounded-full hover:p-1   " />
          </a>
          <a href="/">
            {" "}
            <FaTelegram className=" text-3xl sm:text-4xl show-xxl hover:rounded-full hover:p-1"  />
          </a>

          <a href="/">
            <BsInstagram className=" text-3xl sm:text-4xl show-xxl hover:rounded-full hover:p-1" />
          </a>
          <a href="/">
            <FaMedium className=" text-3xl sm:text-4xl show-xxl hover:rounded-full hover:p-1" />
          </a>
          <a
            href="https://bscscan.com/token/0xcD2a2fA3dEAE0e83D629012d1e3456C82B7ea80e"
            target="_blank"
          >
            <img src="images/bsc.svg" alt="" className="h-[30px] sm:h-[39px] show-xxl hover:rounded-full hover:p-1" />
          </a>
        </div>

        <div className="flex justify-center gap-4 items-center mt-[2.5rem]">
          <img src="images/logo.png" alt="" className="h-[25px]" /> |
          <p className=" font-mon text-sm sm:text-base">All Rights Reserved </p>{" "}
          |<p className="font-mon text-sm sm:text-base">2024©</p>
        </div>
      </div>
      <img src="images/ddd.png" alt="" className=" absolute left-0 bottom-0 h-[100%] sm:h-[205%]" />
      <img src="images/droid.png" alt="" className=" absolute right-0 bottom-0 h-auto sm:h-[1200px] hidden sm:block" />
    </section>
  );
}

export default Footer;
