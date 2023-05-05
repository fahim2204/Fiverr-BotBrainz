import { useTranslation } from "next-i18next";
import Link from "next/link";

export default () => {
  const { t: translate } = useTranslation("common");

  const BoxItems = [
    {
      icon: "retail.svg",
      title: translate("gamma.1.title"),
      body: translate("gamma.1.description"),
      url: "/",
    },
    {
      icon: "healthcare.svg",
      title: translate("gamma.2.title"),
      body: translate("gamma.2.description"),
      url: "/",
    },
    {
      icon: "finance.svg",
      title: translate("gamma.3.title"),
      body: translate("gamma.3.description"),
      url: "/",
    },
    {
      icon: "travel.svg",
      title: translate("gamma.4.title"),
      body: translate("gamma.4.description"),
      url: "/",
    },
    {
      icon: "it.svg",
      title: translate("gamma.5.title"),
      body: translate("gamma.5.description"),
      url: "/",
    },
    {
      icon: "home.svg",
      title: translate("gamma.6.title"),
      body: translate("gamma.6.description"),
      url: "/",
    },
    {
      icon: "human.svg",
      title: translate("gamma.7.title"),
      body: translate("gamma.7.description"),
      url: "/",
    },
    {
      icon: "message.svg",
      title: translate("gamma.8.title"),
      body: translate("gamma.8.description"),
      url: "/",
    },
    {
      icon: "marketing.svg",
      title: translate("gamma.9.title"),
      body: translate("gamma.9.description"),
      url: "/",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-16">
        <h1 className="max-w-2xl stroke-alpha text-bot-alpha font-semibold text-3xl md:text-4xl mb-3">
          {translate("gamma.title")}
        </h1>
        <p className="text-bot-gamma max-w-3xl">
          {translate("gamma.description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-0 my-8">
          {BoxItems.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col bg-white p-10 border border-gray-50 cursor-default hover:z-20 hover:drop-shadow-lg hover:scale-105 hover:rounded-md group transition duration-500"
              >
                <div className="h-11 w-11 flex items-center justify-center bg-[#E4E4F3] group-hover:bg-gradient-to-bl group-hover:from-[#D23FFC] group-hover:from-20% group-hover:to-[#7C01FF] rounded-xl transition duration-500">
                  <img src={`/img/icon/${item.icon}`} alt="" />
                </div>
                <h2 className="text-xl font-semibold my-2">{item.title}</h2>
                <h4 className="text-sm">{item.body}</h4>
                <div className="ms-auto mt-6 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-500">
                  <Link
                    href={item.url}
                    className="text-white text-xs py-3 px-5 rounded-md bg-gradient-to-bl from-[#EE00FF] from-20% to-[#7C01FF]"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
              // linear-gradient(226.24deg, #D23FFC -28.92%, #7C01FF 129.11%)
            );
          })}
        </div>
      </div>
    </>
  );
};
