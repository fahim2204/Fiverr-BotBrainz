import Link from "next/link";

export default () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16">
        <h1 className="max-w-xl stroke-alpha text-bot-alpha font-semibold text-4xl mb-3">
          Unleashing the Power of Chatbots with OpenAI API and ChatGPT
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center my-8">
          <div className="flex flex-col order-2 md:order-1">
            <p className="text-bot-gamma">
              A chatbot is an AI-powered software program designed to engage in
              human-like conversations with users through messaging platforms,
              websites, or mobile applications.
              <br />
              <br />
              Chatbots are revolutionizing the way businesses communicate with
              their customers and employees, providing real-time assistance,
              automating repetitive tasks, and streamlining various processes.
            </p>
            <div className="mt-6">
              <Link
                className="bg-white hover:bg-gray-50 drop-shadow-lg inline-block px-4 py-3 rounded-md transition duration-300"
                href={"#"}
              >
                <div className="flex item-center">
                  <div className="text-bot-gamma pr-3 border-r-2">
                    Get Started
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
            <img src="/img/alpha-1.svg" alt="" />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center my-8">
          <div className="mx-auto px-6 xl:px-10">
            <img src="/img/alpha-2.svg" alt="" />
          </div>
          <div className="flex flex-col">
            <p className="text-bot-gamma">
              Our chatbot solutions harness the power of OpenAI API and ChatGPT
              to deliver seamless conversational experiences tailored to your
              business needs. <br />
              <br />
              OpenAI API enables us to tap into the latest advancements in
              natural language understanding, offering human-like interactions
              that truly understand user intent. ChatGPT, a cutting-edge
              language model by OpenAI, allows our chatbots to generate
              contextual and coherent responses, making conversations feel
              natural and engaging.
            </p>
            <div className="mt-6">
              <Link
                className="bg-white hover:bg-gray-50 drop-shadow-lg inline-block px-4 py-3 rounded-md transition duration-300"
                href={"#"}
              >
                <div className="flex item-center">
                  <div className="text-bot-gamma pr-3 border-r-2">
                    Get Started
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

        {/* Third Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center my-8">
          <div className="flex flex-col order-2 md:order-1">
            <p className="text-bot-gamma">
              Our chatbot solutions harness the power of OpenAI API and ChatGPT
              to deliver seamless conversational experiences tailored to your
              business needs. <br />
              <br />
              OpenAI API enables us to tap into the latest advancements in
              natural language understanding, offering human-like interactions
              that truly understand user intent. ChatGPT, a cutting-edge
              language model by OpenAI, allows our chatbots to generate
              contextual and coherent responses, making conversations feel
              natural and engaging.
            </p>
            <div className="mt-6">
              <Link
                className="bg-white hover:bg-gray-50 drop-shadow-lg inline-block px-4 py-3 rounded-md transition duration-300"
                href={"#"}
              >
                <div className="flex item-center">
                  <div className="text-bot-gamma pr-3 border-r-2">
                    Get Started
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
