import Link from "next/link";
import { useTranslation } from "next-i18next";

export default () => {
  const { t: translate } = useTranslation("common");

  return (
    <>
      <div
        id="solution"
        className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-16"
      >
        <h1 className="max-w-xl stroke-alpha text-bot-alpha font-semibold text-3xl md:text-4xl mb-3">
          {translate("alpha.title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center my-8">
          <div className="flex flex-col order-2 md:order-1">
            <p className="text-bot-gamma">
              {translate("alpha.section1.paragraph1")}
              <br />
              <br />
              {translate("alpha.section1.paragraph2")}
            </p>
            <div className="mt-6">
              <Link
                className="bg-white hover:bg-gray-50 drop-shadow-lg inline-block px-4 py-3 rounded-md transition duration-300"
                href={"#"}
              >
                <div className="flex item-center">
                  <div className="text-bot-gamma pr-3 border-r-2">
                    {translate("alpha.getStarted")}
                  </div>
                  <img
                    className="ml-3"
                    src="/img/icon/arrow-right.svg"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="mx-auto px-6 xl:px-10 order-1 md:order-2">
            <img src="/img/alpha-1.webp" alt="" />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center my-8">
          <div className="mx-auto px-6 xl:px-10">
            <img src="/img/alpha-2.svg" alt="" />
          </div>
          <div className="flex flex-col">
            <p className="text-bot-gamma">
              {translate("alpha.section2.paragraph1")} <br />
              <br />
              {translate("alpha.section2.paragraph2")}
            </p>
            <div className="mt-6">
              <Link
                className="bg-white hover:bg-gray-50 drop-shadow-lg inline-block px-4 py-3 rounded-md transition duration-300"
                href={"#"}
              >
                <div className="flex item-center">
                  <div className="text-bot-gamma pr-3 border-r-2">
                    {translate("alpha.getStarted")}
                  </div>
                  <img
                    className="ml-3"
                    src="/img/icon/arrow-right.svg"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center my-8">
          <div className="flex flex-col order-2 md:order-1">
            <p className="text-bot-gamma">
              {translate("alpha.section3.paragraph1")}
              <br />
              <br />
              {translate("alpha.section3.paragraph2")}
            </p>
            <div className="mt-6">
              <Link
                className="bg-white hover:bg-gray-50 drop-shadow-lg inline-block px-4 py-3 rounded-md transition duration-300"
                href={"#"}
              >
                <div className="flex item-center">
                  <div className="text-bot-gamma pr-3 border-r-2">
                    {translate("alpha.getStarted")}
                  </div>
                  <img
                    className="ml-3"
                    src="/img/icon/arrow-right.svg"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="mx-auto px-6 xl:px-10 order-1 md:order-2">
            <img src="/img/alpha-3.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
