import React from "react";

function Cards({title,Iconsrc,Para}) {
  return (
    <div className="f-card w-full sm:w-[300px] h-[300px] py-3 mx-4 px-4 border-2  border-[#e4ff00] rounded-md bg-[#030807] show-xl glow-anime transform 
    transition duration-1000 
    hover:scale-110 cursor-pointer z-[99999]">
      <div className="flex justify-between mb-[4rem] ">
        <h2 className=" font-mon text-xl font-medium">{title}</h2>

        <img src={Iconsrc} alt="" className="h-[35px]" />
      </div>

      <p className=" mx-auto ">
   {Para}
      </p>
    </div>
  );
}

export default Cards;
