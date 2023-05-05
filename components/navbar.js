import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { FlagIcon } from "react-flag-kit";
import { useRouter } from "next/router";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t: translate } = useTranslation("common");

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const router = useRouter();

  const localeList = [
    {
      lang: "en",
      icon: "us",
    },
    {
      lang: "pl",
      icon: "pl",
    },
  ];

  function handleLanguageChange(lang) {
    router.push(router.pathname, router.asPath, { locale: lang });
  }

  return (
    <div className="bg-bot-alpha">
      <nav className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-4 border-b border-b-[#503569]">
        <Link href="/" className="flex items-center">
          <img src="/img/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-auto text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isNavbarOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-2 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-6 lg:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#home"
                className="block py-2 pl-3 pr-4 capitalize text-white hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-bot-beta md:p-0 transition-all duration-300"
                onClick={() => setIsNavbarOpen(false)}
              >
                {translate("nav.home")}
              </a>
            </li>
            <li>
              <a
                href="#solution"
                className="block py-2 pl-3 pr-4 capitalize text-white hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-bot-beta md:p-0 transition-all duration-300"
                onClick={() => setIsNavbarOpen(false)}
              >
                {translate("nav.solution")}
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                className="block py-2 pl-3 pr-4 capitalize text-white hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-bot-beta md:p-0 transition-all duration-300"
                onClick={() => setIsNavbarOpen(false)}
              >
                {translate("nav.benefits")}
              </a>
            </li>
            <li>
              <a
                href="#industries"
                className="block py-2 pl-3 pr-4 capitalize text-white hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-bot-beta md:p-0 transition-all duration-300"
                onClick={() => setIsNavbarOpen(false)}
              >
                {translate("nav.industries")}
              </a>
            </li>
            <li>
              <a
                href="#process"
                className="block py-2 pl-3 pr-4 capitalize text-white hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-bot-beta md:p-0 transition-all duration-300"
                onClick={() => setIsNavbarOpen(false)}
              >
                {translate("nav.process")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pl-3 pr-4 capitalize text-white hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-bot-beta md:p-0 transition-all duration-300"
                onClick={() => setIsNavbarOpen(false)}
              >
                {translate("nav.contact")}
              </a>
            </li>
          </ul>
        </div>
        <div className="relative">
          <button
            className="flex items-center gap-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-white">{router.locale.toUpperCase()}</span>
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current text-gray-500"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute top-12 right-0 z-10 bg-white shadow-md rounded">
              {localeList.map((item, index) => (
                <button
                  key={index}
                  className={`flex items-center w-full px-4 py-2 hover:bg-gray-100 ${
                    router.locale === item.lang ? "font-bold" : ""
                  }`}
                  onClick={() => handleLanguageChange(item.lang)}
                >
                  <FlagIcon code={item.icon.toUpperCase()} size={24} />
                  <span className="ml-2 mr-4">{item.lang.toUpperCase()}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
