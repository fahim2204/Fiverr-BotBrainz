import Link from "next/link";

export default () => {
  const BoxItems = [
    {
      icon: "retail.svg",
      title: "Retail",
      body: "Chatbots assist with product recommendations, inventory management, and order tracking, creating a seamless shopping experience for customers while reducing support costs.",
      url: "/",
    },
    {
      icon: "healthcare.svg",
      title: "Healthcare",
      body: "Chatbots help patients schedule appointments, provide medical information, and offer symptom-based guidance, improving patient engagement and accessibility to healthcare services.",
      url: "/",
    },
    {
      icon: "finance.svg",
      title: "Finance",
      body: "Chatbots enable secure account management, personalized financial advice, and instant support for banking and investment-related queries, enhancing customer trust and satisfaction.",
      url: "/",
    },
    {
      icon: "travel.svg",
      title: "Travel & Hospitality",
      body: "Chatbots assist with booking reservations, providing travel recommendations, and offering real-time support, creating a hassle-free travel experience for customers.",
      url: "/",
    },
    {
      icon: "it.svg",
      title: "IT Support",
      body: "Chatbots handle routine IT requests, troubleshoot common issues, and manage service tickets, freeing up IT teams to focus on more complex tasks.",
      url: "/",
    },
    {
      icon: "home.svg",
      title: "Real Estate",
      body: "Chatbots facilitate property search, schedule property viewings, and answer client queries, simplifying the home-buying process and improving the overall customer experience.",
      url: "/",
    },
    {
      icon: "human.svg",
      title: "Human Resources",
      body: "Chatbots streamline the recruitment process, manage employee requests, and handle policy-related inquiries, allowing HR teams to focus on strategic initiatives.",
      url: "/",
    },
    {
      icon: "message.svg",
      title: "Customer Service",
      body: "Chatbots provide instant support, manage inquiries, and resolve issues efficiently, improving customer satisfaction and reducing response times.",
      url: "/",
    },
    {
      icon: "marketing.svg",
      title: "Marketing & Sales",
      body: "Chatbots engage with leads, qualify prospects, and offer personalized product recommendations, driving conversions and boosting revenue.",
      url: "/",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-16">
        <h1 className="max-w-2xl stroke-alpha text-bot-alpha font-semibold text-3xl md:text-4xl mb-3">
          AI Chatbots: Driving Transformation Across Diverse Sectors
        </h1>
        <p className="text-bot-gamma max-w-3xl">
          AI chatbots have the power to revolutionize a wide range of industries
          by automating tasks, enhancing customer experiences, and streamlining
          operations. Explore 10 disciplines where chatbots have proven to be
          immensely useful and discover how they can benefit each industry
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-0 my-8">
          {BoxItems.map((item, index) => {
            return (
              <div className="flex flex-col bg-white p-10 border border-gray-50 cursor-default hover:z-20 hover:drop-shadow-lg hover:scale-105 hover:rounded-md group transition duration-500">
                <div className="h-11 w-11 flex items-center justify-center bg-[#E4E4F3] group-hover:bg-gradient-to-bl group-hover:from-[#D23FFC] group-hover:from-20% group-hover:to-[#7C01FF] rounded-xl transition duration-500">
                  <img src={`/img/icon/${item.icon}`} alt="" />
                </div>
                <h2 className="text-xl font-semibold my-2">{item.title}</h2>
                <h4 className="text-sm">{item.body}</h4>
                <div className="ms-auto mt-6 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-500"><Link href={item.url} className="text-white text-xs py-3 px-5 rounded-md bg-gradient-to-bl from-[#EE00FF] from-20% to-[#7C01FF]">Get in Touch</Link></div>
              </div>
              // linear-gradient(226.24deg, #D23FFC -28.92%, #7C01FF 129.11%)
            );
          })}
        </div>
      </div>
    </>
  );
};
