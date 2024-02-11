import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,  Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";

function RoadMob() {
  return (
    <>
      <Swiper className="mySwiper relative z-50"
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
          
              navigation={true}
              modules={[Autoplay,  Navigation]}
      >
        <SwiperSlide>
          <div className=" ">
            <div className="  px-[2.2rem] py-4 road-card border-2  border-[#00ffc9] rounded-lg show-xl glow-anime w-full relative z-50 h-full">
              <h1 className="  text-base font-mon font-medium">
                Phase 1: Foundation and Conceptualization
              </h1>

              <p>
                • Development of the Idea: Begin with formulating the concept
                and strategic plan for Airnd.
              </p>
              <p>
                • Framework and Team Building: Establish the core framework for
                Airnd and assemble a dedicated team of experts.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" ">
            <div className="  px-[2.2rem] py-4 road-card border-2  border-[#00ffc9] rounded-lg show-xl glow-anime w-full relative z-50 h-full">
              <h1 className="  text-lg font-mon font-medium">
                Phase 2 : Platform Development and Community Building
              </h1>

              <p>
                • Creation of Website and Social Media Channels: Develop the
                official website and create profiles on key social media
                platforms to engage with the community.
              </p>
              <p>
                • Start Building Community: Initiate community-building efforts
                to gather support and feedback from potential users.
              </p>
              <p>
                • Creation of Token by Safu Developer: Develop the Airnd token
                with a focus on security and reliability.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  px-[2.2rem] py-4 road-card border-2   border-[#00ffc9] rounded-lg show-xl glow-anime w-full relative z-50 h-full">
            <h1 className="  text-lg font-mon font-medium">
              Phase 3: Launch and Expansion
            </h1>

            <p>
              • First Audit: Conduct the first audit to ensure security and
              trustworthiness of the token.
            </p>
            <p>
              • Launch of Bot Deployer: Officially release the Airnd bot
              deployer for public use.
            </p>
            <p>
              • Creation of Pinksale Fairlaunch: Organize a fair launch event on
              Pinksale to kickstart the token distribution.
            </p>

            <p>
              • Marketing Push: Implement a comprehensive marketing strategy to
              enhance visibility and attract users.
            </p>
            <p>
              • Launch on PancakeSwap: Make the Airnd token available for
              trading on PancakeSwap.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  px-[2.2rem] py-4 road-card border-2  border-[#00ffc9] rounded-lg show-xl glow-anime w-full relative z-50 h-full">
            <h1 className=" text-lg font-mon font-medium">
              Phase 4: Growth and Celebration
            </h1>

            <p>
              • Listing on CoinGecko (CG) and CoinMarketCap (CMC): Achieve
              listing on leading cryptocurrency data platforms to increase
              exposure.
            </p>
            <p>
              • Listing on Tier 2 (T2) Exchange: Expand the token’s availability
              by listing on a T2 exchange.
            </p>
            <p>
              • Revenue Distribution Start: Begin the distribution of generated
              revenue to stakeholders.
            </p>
            <p>
              • Marketing Push for V2: Launch a marketing campaign for the
              second version of the Airnd platform to attract more users.
            </p>
            <p>
              • Yacht Party in Dubai: Celebrate the success and milestones of
              Airnd with a yacht party in Dubai.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default RoadMob;
