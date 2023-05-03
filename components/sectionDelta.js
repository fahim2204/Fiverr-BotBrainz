import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const slideLists = [
    {
      title: "Discovery Call",
      body: "We start with an in-depth consultation to understand your business objectives, target audience, and specific requirements for the chatbot solution.",
    },
    {
      title: "Requirements & Pricing",
      body: "Based on the discovery call, we prepare a detailed project scope outlining the chatbot's features, timelines, and pricing, ensuring complete alignment with your goals.",
    },
    {
      title: "Development",
      body: "Our expert developers craft your custom chatbot solution using advanced technologies like OpenAI API and ChatGPT, integrating the required functionalities to meet your objectives.",
    },
    {
      title: "Product Tests",
      body: "We rigorously test the chatbot for functionality, user experience, and performance, refining the solution to ensure it meets the highest quality standards.",
    },
    {
      title: "Technical Implementation",
      body: "Our team collaborates with you to seamlessly integrate the chatbot into your website, software, or platform, providing any necessary support and guidance.",
    },
    {
      title: "Marketing Release",
      body: "We assist you in crafting a strategic marketing plan to promote your chatbot solution, ensuring its successful adoption and maximizing its impact.",
    },
    {
      title: "Product Launch",
      body: "With everything in place, we launch your chatbot solution, enabling you to start reaping the benefits of a powerful AI-driven conversational experience.",
    },
  ];

  return (
    <>
      <div className="bg-[#F5F5F5]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 pt-16 pb-36">
          <h1 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl mb-5">
            Our Process
          </h1>
          <h1 className="mx-auto max-w-4xl text-center mb-3">
            We are committed to delivering exceptional chatbot solutions
            tailored to your unique business needs. Our transparent and
            efficient development process ensures a seamless collaboration,
            guiding you through every step from discovery to product launch.
            Here's an overview of our 7-step process
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
            {slideLists.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="relative p-8 mt-16 rounded-3xl text-black flex flex-col gap-y-6 z-10">
                    <h2 className="text-[#21023F] font-semibold text-2xl">
                      {item.title}
                    </h2>
                    <p className="text-[#514967]">{item.body}</p>
                    <img
                      className="absolute -top-[67px] right-1/2 -translate-x-1/2 h-28 z-50"
                      src={`/img/icon/${
                        activeIndex == index
                          ? "slider-dot-active.svg"
                          : "slider-dot.svg"
                      }`}
                      alt="."
                    />
                  </div>
                </SwiperSlide>
              );
            })}

            <div className="absolute w-full top-3 border-b border-b-[#BEBEDA] mt-20 -z-10"></div>
            <div className="h-3 w-full bg-[#EEEEF8] rounded-3xl mt-6">
              <div
                style={{
                  width: `${((activeIndex + 1) * 100) / slideLists.length}%`,
                }}
                className={`h-full bg-gradient-to-r from-[#EE00FF] to-[#7C01FF] rounded-3xl transition-all duration-300`}
              ></div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};
