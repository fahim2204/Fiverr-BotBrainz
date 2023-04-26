import Link from "next/link";

export default () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 lg:gap-20">
      <div className="flex flex-col justify-center mb-16 md:mb-0">
        <h1 className="text-4xl text-white font-semibold my-5 leading-normal">
          Empower Your Organization with Smart Chatbots
        </h1>
        <div className="my-6">
          <Link className="btn-bg-alpha rounded-lg text-white px-5 py-4" href="/">Discover Our Solutions</Link>
        </div>
      </div>
      <div className="px-2 md:px-5 lg:px-10 mb-8 flex items-center">
     hello
     </div>
      </div>
    </>
  );
};
