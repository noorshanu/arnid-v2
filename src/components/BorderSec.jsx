import React from "react";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import Features from "./Features";

function BorderSec() {
  return (
    <section className=" mt-0 sm:-mt-[38%] relative z-30 ">
      <img
        src="images/bg-black.png"
        alt=""
        className=" w-full  hidden sm:block "
      />
      <div className=" relative sm:absolute sm:top-[45%] w-full    ">
        <div className=" flex justify-center ">
          <img
            src="images/1.png"
            alt=""
            className=" absolute left-0 h-[450px] -ml-[15%] hidden sm:block z-[2] "
          />
          <div className=" text-center max-w-xl  mx-auto relative z-50 pt-16">
            <h1 className=" font-mon text-3xl mb-6">
              EXPLORE THE WORLD IF CRYPTO & <strong>AI</strong> WITH US.
            </h1>
            <div className=" bg-[#00ffc0] h-[3px] max-w-xs  sm:max-w-lg mx-auto  mb-4"></div>
            <p>
              {" "}
              <p className="  px-5 mt-6">
                Airnd is a Token Deployer Bot for the BSC chain, integrating AI
                to simplify token deployment. It plans to expand support to ETH,
                Solana, Base, and Arbitrum, enhancing token launch efficiency
                across multiple blockchains.
              </p>
            </p>
            <div
              className=" flex flex-col sm:flex-row justify-center gap-6 items-center mt-8 mb-3"
              m
            >
              <a
                href="/"
                className=" bg-[#193200] hover:bg-[#002732] rounded-md border-2 border-[#76ee00] hover:border-[#00c5ff]  hover:text-black px-14 py-2 font-semibold font-mon text-base sm:text-2xl"
              >
                {" "}
                Buy Now{" "}
              </a>

              <a
                href="/"
                className=" bg-[#002732] hover:bg-[#193200] rounded-md hover:border-[#76ee00]  border-2 border-[#00c5ff] px-10 py-2 hover:text-black font-semibold font-mon text-base sm:text-2xl"
              >
                {" "}
                Whitepaper{" "}
              </a>
            </div>
            <div className=" flex  justify-center gap-5 mt-[4rem]">
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
          </div>
          <img
            src="images/2.png"
            alt=""
            className="  absolute right-0  h-[450px] ] hidden sm:block overflow-hidden"
          />
        </div>

        <div className=" relative z-[999]">
          <Features />
        </div>
      </div>
    </section>
  );
}

export default BorderSec;
