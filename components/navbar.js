import Link from "next/link";
import { useState } from "react";

export default () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <nav className="bg-transparent border-gray-200 font-ubuntu">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 md:px-10 py-4">
        <Link href="/" className="flex items-center">
          <img src="/img/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isNavbarOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-2 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-bot-beta md:p-0 transition-all duration-300"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-bot-beta md:p-0 transition-all duration-300"
              >
                Solution
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-bot-beta md:p-0 transition-all duration-300"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-bot-beta md:p-0 transition-all duration-300"
              >
                Industries
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-bot-beta md:p-0 transition-all duration-300"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-bot-beta md:p-0 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
