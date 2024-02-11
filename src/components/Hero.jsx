import React from "react";

function Hero() {
  return (
    <section className="hero-main relative h-[50vh] sm:h-[100vh] ">
      <img src="images/glove.png" alt="" className="anime2 overflow-hidden absolute top-0 z-[-2] left-0 sm:left-[13%] right-0 h-[300px] sm:h-[136%]" />
      <img src="images/bg-main.png" alt="" className=" absolute top-[-21%] z-[-3]  right-0 " />
      <div className=" container-wrapper pt-[25%] sm:pt-[10%]">
        <div></div>
      </div>

      <img
        src="images/tex.png"
        alt=""
        className=" mx-auto absolute left-0 right-0 bottom-0 h-[130px] sm:h-[180px]  z-[90]"
      />
    </section>
  );
}

export default Hero;
