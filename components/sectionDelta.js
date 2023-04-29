import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import {Navigation } from "swiper";

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <div className="bg-[#F5F5F5] max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 pt-16 pb-36">
        <h1 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl mb-5">
          Our Process
        </h1>
        <h1 className="mx-auto max-w-4xl text-center mb-3">
          We are committed to delivering exceptional chatbot solutions tailored
          to your unique business needs. Our transparent and efficient
          development process ensures a seamless collaboration, guiding you
          through every step from discovery to product launch. Here's an
          overview of our 7-step process
        </h1>

        {/* Slider Section */}
        <Swiper
          grabCursor={true}
          centeredSlides={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 2.1,
              spaceBetween: 30,
            },
            900: {
              slidesPerView: 2.4,
              spaceBetween: 60,
            },
          }}
          modules={[Navigation]}
          className="mySwiper mt-16"
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide>
            <div className="relative p-8 mt-16 rounded-3xl text-black flex flex-col gap-y-6 z-10">
              <h2 className="text-[#21023F] font-semibold text-2xl">
                Discovery Call
              </h2>
              <p className="text-[#514967]">
                We start with an in-depth consultation to understand your
                business objectives, target audience, and specific requirements
                for the chatbot solution.
              </p>
              <img
                className="absolute -top-[67px] right-1/2 -translate-x-1/2 h-28 z-50"
                src={`/img/icon/${
                  activeIndex == 0 ? "slider-dot-active.svg" : "slider-dot.svg"
                }`}
                alt="."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative p-8 mt-16 rounded-3xl text-black flex flex-col gap-y-6">
              <h2 className="text-[#21023F] font-semibold text-2xl">
                Requirements & Pricing
              </h2>
              <p className="text-[#514967]">
                Based on the discovery call, we prepare a detailed project scope
                outlining the chatbot's features, timelines, and pricing,
                ensuring complete alignment with your goals.
              </p>
              <img
                className="absolute -top-[67px] right-1/2 -translate-x-1/2 h-28 z-50"
                src={`/img/icon/${
                  activeIndex == 1 ? "slider-dot-active.svg" : "slider-dot.svg"
                }`}
                alt="."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative p-8 mt-16 rounded-3xl text-black flex flex-col gap-y-6">
              <h2 className="text-[#21023F] font-semibold text-2xl">
                Development
              </h2>
              <p className="text-[#514967]">
                Our expert developers craft your solution using advanced
                technology: API and ChatGPT, intograting the functionalities to
                meet your objectives.
              </p>
              <img
                className="absolute -top-[67px] right-1/2 -translate-x-1/2 h-28 z-50"
                src={`/img/icon/${
                  activeIndex == 2 ? "slider-dot-active.svg" : "slider-dot.svg"
                }`}
                alt="."
              />
            </div>
          </SwiperSlide>

          <div className="absolute w-full -top-10 border-b border-b-[#BEBEDA] mt-20 -z-10"></div>
          <div class="h-3 w-full bg-[#EEEEF8] rounded-3xl mt-6">
            <div
              style={{ width: `${((activeIndex + 1) * 100) / 3}%` }}
              class={`h-full bg-gradient-to-r from-[#EE00FF] to-[#7C01FF] rounded-3xl transition-all duration-300`}
            ></div>
          </div>
        </Swiper>
      </div>
    </>
  );
};
