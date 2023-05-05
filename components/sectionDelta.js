import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";
import { useTranslation } from "next-i18next";

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const { t: translate } = useTranslation("common");

  const slideLists = [
    {
      title: translate("delta.slides.title0"),
      body: translate("delta.slides.description0"),
    },
    {
      title: translate("delta.slides.title1"),
      body: translate("delta.slides.description1"),
    },
    {
      title: translate("delta.slides.title2"),
      body: translate("delta.slides.description2"),
    },
    {
      title: translate("delta.slides.title3"),
      body: translate("delta.slides.description3"),
    },
    {
      title: translate("delta.slides.title4"),
      body: translate("delta.slides.description4"),
    },
    {
      title: translate("delta.slides.title5"),
      body: translate("delta.slides.description5"),
    },
    {
      title: translate("delta.slides.title6"),
      body: translate("delta.slides.description6"),
    },
  ];

  return (
    <>
      <div className="bg-[#F5F5F5]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 pt-16 pb-36">
          <h1 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl mb-5">
            {translate("delta.title")}
          </h1>
          <h1 className="mx-auto max-w-4xl text-center mb-3">
            {translate("delta.description")}
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
                  <div className="relative select-none p-8 mt-16 rounded-3xl text-black flex flex-col gap-y-6 z-10">
                    <h2 className="text-[#21023F] font-semibold text-2xl">
                      {item.title}
                    </h2>
                    <p className="text-[#514967]">{item.body}</p>
                    <img
                      className="absolute -top-[67px] right-1/2 -translate-x-1/2 h-28 z-50"
                      src={`/img/icon/${
                        activeIndex + 1 == index || activeIndex == index
                          ? "slider-dot-active.svg"
                          : "slider-dot.svg"
                      }`}
                      alt="."
                    />
                  </div>
                </SwiperSlide>
              );
            })}

            <div className="absolute w-full -top-10 border-b border-b-[#BEBEDA] mt-20 -z-10"></div>
            <div className="h-3 w-full bg-[#EEEEF8] rounded-3xl mt-6 overflow-hidden">
              <div
                style={{
                  width: `${((activeIndex + 2) * 100) / slideLists.length}%`,
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
