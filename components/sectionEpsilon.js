import Link from "next/link";

export default () => {
  return (
    <>
      <div className="relative bg-bot-alpha max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 text-white gap-x-6">
          <div className="flex flex-col justify-betweenn gap-y-3 py-16">
            <h5 className="text-lg">Experience the Power of AI Chatbots:</h5>
            <h1 className="max-w-2xl stroke-alpha text-white font-semibold text-2xl md:text-3xl lg:text-4xl mb-3">
              Book a Discovery Call Today
            </h1>
            <h6 className="text-sm text-[#D5C8E1]">
              Eager to revolutionize your business with a bespoke chatbot solution? Register for a
              tailored discovery call to uncover the possibilities of our AI-powered chatbots
              designed to meet your specific requirements. During the call, our specialists will
              guide you through the features of our chatbot solutions and showcase how they can
              tackle your distinct business obstacles, optimize processes, and enhance customer
              interactions. To schedule a discovery call, simply complete the form below by
              providing your contact details, company name, and a concise summary of your business
              or the challenge you're aiming to overcome. Upon receiving your submission, a member
              of our team will get in touch to arrange a suitable time for your personalized
              exploration session.
            </h6>
          </div>
          <div className="relative z-20">
            <div className="bg-white text-[#514967] rounded-xl py-8 px-12 md:px-8 lg:px-12 shadow-md mx-10 md:mx-6 lg:mx-10 xl:mx-16 md:-mt-16 mb-10">
              <form action="" method="post">
                <div className="flex flex-col gap-y-3">
                  <label className="text-sm" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className="bg-[#ddddf383] border border-[#DDDDF3] rounded-lg"
                    type="text"
                    name="name"
                    id="name"
                    required
                  />
                  <label className="text-sm" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="bg-[#ddddf383] border border-[#DDDDF3] rounded-lg"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                  <label className="text-sm" htmlFor="company">
                    Company Name
                  </label>
                  <input
                    className="bg-[#ddddf383] border border-[#DDDDF3] rounded-lg"
                    type="text"
                    name="company"
                    id="company"
                    required
                  />
                  <label className="text-sm" htmlFor="message">
                    Message
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
                      Book a Demo
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img className="absolute top-0 right-0 h-full z-10" src="/img/book-bg.webp" alt="" />
      </div>
    </>
  );
};
