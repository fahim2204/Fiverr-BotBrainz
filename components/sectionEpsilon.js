import { useTranslation } from "next-i18next";

export default () => {
  const { t: translate } = useTranslation("common");

  return (
    <>
      <div id="contact" className="bg-bot-alpha">
        <div className="relative max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 text-white gap-x-6">
            <div className="flex flex-col justify-betweenn gap-y-3 py-16">
              <h5 className="text-lg">{translate("epsilon.title")}</h5>
              <h1 className="max-w-2xl stroke-alpha text-white font-semibold text-2xl md:text-3xl lg:text-4xl mb-3">
                {translate("epsilon.cta")}
              </h1>
              <h6 className="text-sm text-[#D5C8E1] z-20">
                {translate("epsilon.description")}
              </h6>
            </div>
            <div className="relative z-20">
              <div className="bg-white text-[#514967] rounded-xl py-8 px-8 sm:px-12 md:px-8 lg:px-12 shadow-md mx-0 sm:mx-10 md:mx-6 lg:mx-10 xl:mx-16 md:-mt-16 mb-10">
                <form action="" method="post">
                  <div className="flex flex-col gap-y-3">
                    <label className="text-sm" htmlFor="name">
                      {translate("epsilon.labelOne")}
                    </label>
                    <input
                      className="bg-[#ddddf383] border border-[#DDDDF3] rounded-lg"
                      type="text"
                      name="name"
                      id="name"
                      required
                    />
                    <label className="text-sm" htmlFor="email">
                      {translate("epsilon.labelTwo")}
                    </label>
                    <input
                      className="bg-[#ddddf383] border border-[#DDDDF3] rounded-lg"
                      type="email"
                      name="email"
                      id="email"
                      required
                    />
                    <label className="text-sm" htmlFor="company">
                      {translate("epsilon.labelThree")}
                    </label>
                    <input
                      className="bg-[#ddddf383] border border-[#DDDDF3] rounded-lg"
                      type="text"
                      name="company"
                      id="company"
                      required
                    />
                    <label className="text-sm" htmlFor="message">
                      {translate("epsilon.labelFour")}
                    </label>
                    <textarea
                      className="bg-[#ddddf383] border border-[#DDDDF3] rounded-lg"
                      rows={4}
                      name="name"
                      id="name"
                      required
                    />
                    <div>
                      <button
                        type="submit"
                        className="text-white text-xs mt-3 py-3 px-5 rounded-md bg-gradient-to-bl from-[#EE00FF] from-20% to-[#7C01FF]"
                      >
                        {translate("epsilon.labelFive")}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <img
            className="absolute md:top-0 bottom-0 right-0 h-1/2 md:h-full z-10"
            src="/img/book-bg.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
