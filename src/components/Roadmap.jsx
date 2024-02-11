import React from "react";
import RoadMob from "./RoadMob";

function Roadmap() {
  return (
    <section className=" relative  z-50 " id="road">
      <div className="container-wrapper py-16  ">
        <img
          src="images/tar.png"
          alt=""
          className=" mx-auto h-[130px]  rounded-full border-transparent"
        />

        <div className=" pb-8">
          <h1 className="text-center text-2xl font-mon mb-2"> OUR ROADMAP</h1>
          <div className=" bg-[#00ffc0] h-[4px] w-full max-w-[210px] mx-auto "></div>
        </div>

        <div className=" relative mt-[8%] z-[999]  ">
          <div className=" block sm:hidden mx-4">
            <div className=" mx-auto -mb-[16%]">
              <RoadMob />
            </div>
          </div>
          <div className=" sm:flex items-start  gap-[20rem] relative  mt-[40%]  hidden ">
            <div className="  z-[99]  absolute -top-[17rem] ">
              <div className="  px-[2.2rem] py-4 road-card border-2  border-[#00ffc9] rounded-lg show-xl glow-anime w-[450px] relative z-50 h-full">
                <h1 className=" text-center text-lg font-mon font-medium">
                  Phase 1: Foundation and Conceptualization
                </h1>

                <p>
                  • Development of the Idea: Begin with formulating the concept
                  and strategic plan for Airnd.
                </p>
                <p>
                  • Framework and Team Building: Establish the core framework
                  for Airnd and assemble a dedicated team of experts.
                </p>
              </div>
              <img src="images/line.png" alt="" className=" mx-auto" />
            </div>
            <div className=" absolute right-[5rem] -top-[23rem] z-10">
              <div className="  px-[2.2rem] py-4 road-card border-2  border-[#00ffc9] rounded-lg show-xl glow-anime w-[450px] relative z-50 h-full">
                <h1 className=" text-center text-lg font-mon font-medium">
                  Phase 2 : Platform Development and Community Building
                </h1>

                <p>
                  • Creation of Website and Social Media Channels: Develop the
                  official website and create profiles on key social media
                  platforms to engage with the community.
                </p>
                <p>
                  • Start Building Community: Initiate community-building
                  efforts to gather support and feedback from potential users.
                </p>
                <p>
                  • Creation of Token by Safu Developer: Develop the Airnd token
                  with a focus on security and reliability.
                </p>
              </div>

              <img src="images/line.png" alt="" className=" mx-auto" />
            </div>
          </div>

          <img
            src="images/roadLine.png"
            alt=""
            className=" relative hidden sm:block sm:absolute left-0 right-0 -mt-4"
          />
          <div className=" sm:flex hidden justify-end items-center  gap-[18rem] -mt-[.5%] -mr-[4%]">
            {/* <img src="images/box-2.png" alt="" className=" h-[350px]" />
            <img src="images/box-2.png" alt="" className=" h-[350px]" /> */}

            <div className=" sm:flex items-center  gap-[20rem]  relative z-40   hidden ">
              <div className=" relative z-[99999] ">
                <img
                  src="images/line.png"
                  alt=""
                  className=" mx-auto rotate-180"
                />
                <div className="  px-[2.2rem] py-4 road-card border-2   border-[#00ffc9] rounded-lg show-xl glow-anime w-[450px] relative z-50 h-full">
                  <h1 className=" text-center text-lg font-mon font-medium">
                    Phase 3: Launch and Expansion
                  </h1>

                  <p>
                    • First Audit: Conduct the first audit to ensure security
                    and trustworthiness of the token.
                  </p>
                  <p>
                    • Launch of Bot Deployer: Officially release the Airnd bot
                    deployer for public use.
                  </p>
                  <p>
                    • Creation of Pinksale Fairlaunch: Organize a fair launch
                    event on Pinksale to kickstart the token distribution.
                  </p>

                  <p>
                    • Marketing Push: Implement a comprehensive marketing
                    strategy to enhance visibility and attract users.
                  </p>
                  <p>
                    • Launch on PancakeSwap: Make the Airnd token available for
                    trading on PancakeSwap.
                  </p>
                </div>
              </div>
              <div className=" relative">
                <img
                  src="images/line.png"
                  alt=""
                  className=" mx-auto rotate-180"
                />
                <div className="  px-[2.2rem] py-4 road-card border-2  border-[#00ffc9] rounded-lg show-xl glow-anime w-[450px] relative z-50 h-full">
                  <h1 className=" text-center text-lg font-mon font-medium">
                    Phase 4: Growth and Celebration
                  </h1>

                  <p>
                    • Listing on CoinGecko (CG) and CoinMarketCap (CMC): Achieve
                    listing on leading cryptocurrency data platforms to increase
                    exposure.
                  </p>
                  <p>
                    • Listing on Tier 2 (T2) Exchange: Expand the token’s
                    availability by listing on a T2 exchange.
                  </p>
                  <p>
                    • Revenue Distribution Start: Begin the distribution of
                    generated revenue to stakeholders.
                  </p>
                  <p>
                    • Marketing Push for V2: Launch a marketing campaign for the
                    second version of the Airnd platform to attract more users.
                  </p>
                  <p>
                    • Yacht Party in Dubai: Celebrate the success and milestones
                    of Airnd with a yacht party in Dubai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
