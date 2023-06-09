import i18next from "i18next";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";

export default () => {
  const { t: translate } = useTranslation("common");
  useEffect(() => {
    // Load translation data asynchronously
    i18next.loadNamespaces("common");
  }, []);

  return (
    <>
      <div id="home" className="bg-bot-alpha">
        <div className="relative max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 lg:gap-20">
            <div className="flex flex-col justify-center mb-16 md:mb-0">
              <h1 className="text-3xl md:text-4xl xl:text-6xl text-white font-semibold my-5 leading-normal lg:leading-normal xl:leading-normal">
                {translate("hero.title")}
              </h1>
              <div className="my-6">
                <Link
                  className="btn-bg-alpha rounded-lg text-white px-5 py-4"
                  href="/"
                >
                  {translate("hero.solutions")}
                </Link>
              </div>
            </div>
            <div className="relative px-2 md:px-5 lg:px-10 flex items-center justify-center">
              <img className="z-10" src="/img/hero-chat-ui.svg" alt="" />
            </div>
          </div>
          <img
            className="absolute bottom-0 md:top-0 right-0 w-2/3 md:w-1/2 h-[54%] md:h-[108%]"
            src="/img/hero-right-bg.webp"
            alt="BG"
          />
        </div>
      </div>
    </>
  );
};
