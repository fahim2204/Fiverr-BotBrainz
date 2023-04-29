import Link from "next/link";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";

export default () => {
  return (
    <>
      <div className="bg-[#F5F5F5] max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 pt-16 pb-36">
        <h1 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl mb-5">
          Our Process
        </h1>
        <h1 className="mx-auto max-w-4xl text-center mb-3">
          We are committed to delivering exceptional chatbot solutions tailored to your unique
          business needs. Our transparent and efficient development process ensures a seamless
          collaboration, guiding you through every step from discovery to product launch. Here's an
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
        >
          <SwiperSlide>
            <div className="bg-[#290B45] border-[#3A1B57] p-8 rounded-3xl text-white flex flex-col gap-y-6">
              <div>
                <img src="/img/icon/heart.svg" alt="heart" />
              </div>
              <h2 className="font-semibold text-2xl">Customer Satisfaction</h2>
              <p className="text-[#D5C8E1]">
                Companies using AI chatbots have seen a{" "}
                <span className="text-[#31CBC2]">35% increase</span> in customer satisfaction rates,
                thanks to instant, personalized support and reduced wait times
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#290B45] border-[#3A1B57] p-8 rounded-3xl text-white flex flex-col gap-y-6">
              <div>
                <img src="/img/icon/strike.svg" alt="heart" />
              </div>
              <h2 className="font-semibold text-2xl">Operational Efficiency</h2>
              <p className="text-[#D5C8E1]">
                Businesses that implement chatbots can experience up to a 60% improvement in
                operational efficiency by streamlining internal processes and automating repetitive
                tasks
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#290B45] border-[#3A1B57] p-8 rounded-3xl text-white flex flex-col gap-y-6">
              <div>
                <img src="/img/icon/money.svg" alt="heart" />
              </div>
              <h2 className="font-semibold text-2xl">
                Response Times and Cost Savings Customer <br /> Satisfaction
              </h2>
              <p className="text-[#D5C8E1]">
                AI chatbots can help reduce response times by 80% and cut operational costs by 30%,
                as they can handle multiple customer queries simultaneously, 24/7
              </p>
            </div>
          </SwiperSlide>
          <div className="flex justify-center gap-x-16 mt-16 mb-8">
            <div className="swiper-button-prev bg-[#290B45] hover:drop-shadow-xl hover:scale-110 cursor-pointer p-5 rounded-full h-16 w-16 flex items-center justify-center transition-all duration-300">
              <img src="/img/icon/angle.svg" alt="<" />
            </div>
            <div className="swiper-button-next bg-[#290B45] hover:drop-shadow-xl hover:scale-110 cursor-pointer p-5 rounded-full h-16 w-16 flex items-center justify-center transition-all duration-300">
              <img className="rotate-180" src="/img/icon/angle.svg" alt=">" />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};
