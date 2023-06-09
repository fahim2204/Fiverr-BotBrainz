import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";
import { useTranslation } from "next-i18next";

export default () => {
  const { t: translate } = useTranslation("common");
  return (
    <>
      <div id="benefits" className="bg-bot-alpha">
        <div className="bg-bot-alpha max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-16">
          <div className="flex flex-col md:flex-row items-center justify-betweenn gap-3">
            <h1 className="max-w-2xl stroke-alpha text-white font-semibold text-2xl md:text-3xl lg:text-4xl mb-3">
              {translate("beta.title")}
            </h1>
            <div className="flex-shrink-0">
              <Link
                className="btn-bg-alpha rounded-lg text-white px-6 md:px-10 py-3"
                href="/"
              >
                {translate("beta.cta")}
              </Link>
            </div>
          </div>

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
            className="mySwiper mt-16 h-full"
          >
            <SwiperSlide>
              <div className="bg-[#290B45] border-[#3A1B57] p-8 rounded-3xl text-white flex flex-col gap-y-6 h-full self-stretch">
                <div>
                  <img src="/img/icon/heart.svg" alt="heart" />
                </div>
                <h2 className="font-semibold text-2xl">
                  {translate("beta.slides.title1")}
                </h2>
                <p className="text-[#D5C8E1]">
                  {translate("beta.slides.desc1")}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#290B45] border-[#3A1B57] p-8 rounded-3xl text-white flex flex-col gap-y-6 h-full self-stretch">
                <div>
                  <img src="/img/icon/strike.svg" alt="heart" />
                </div>
                <h2 className="font-semibold text-2xl">
                  {translate("beta.slides.title2")}
                </h2>
                <p className="text-[#D5C8E1]">
                  {translate("beta.slides.desc2")}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#290B45] border-[#3A1B57] p-8 rounded-3xl text-white flex flex-col gap-y-6 h-full self-stretch">
                <div>
                  <img src="/img/icon/money.svg" alt="heart" />
                </div>
                <h2 className="font-semibold text-2xl">
                  {translate("beta.slides.title3")}
                </h2>
                <p className="text-[#D5C8E1]">
                  {translate("beta.slides.desc3")}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#290B45] border-[#3A1B57] p-8 rounded-3xl text-white flex flex-col gap-y-6 h-full self-stretch">
                <div>
                  <img className="h-11" src="/img/icon/sales.svg" alt="heart" />
                </div>
                <h2 className="font-semibold text-2xl">
                  {translate("beta.slides.title4")}
                </h2>
                <p className="text-[#D5C8E1]">
                  {translate("beta.slides.desc4")}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#290B45] border-[#3A1B57] p-8 rounded-3xl text-white flex flex-col gap-y-6 h-full self-stretch">
                <div>
                  <img
                    className="h-11"
                    src="/img/icon/employee.svg"
                    alt="heart"
                  />
                </div>
                <h2 className="font-semibold text-2xl">
                  {translate("beta.slides.title4")}
                </h2>
                <p className="text-[#D5C8E1]">
                  {translate("beta.slides.desc4")}
                </p>
              </div>
            </SwiperSlide>
            <div className="flex justify-center gap-x-16 mt-16">
              <div className="swiper-button-prev bg-[#290B45] hover:drop-shadow-xl hover:scale-110 cursor-pointer p-5 rounded-full h-16 w-16 flex items-center justify-center transition-all duration-300">
                <img src="/img/icon/angle.svg" alt="<" />
              </div>
              <div className="swiper-button-next bg-[#290B45] hover:drop-shadow-xl hover:scale-110 cursor-pointer p-5 rounded-full h-16 w-16 flex items-center justify-center transition-all duration-300">
                <img className="rotate-180" src="/img/icon/angle.svg" alt=">" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};
