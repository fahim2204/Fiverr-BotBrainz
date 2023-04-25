import Head from "next/head";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Footer from "../components/footer";
import HeroDesc from "../components/heroDesc";
import HeroSlider from "../components/heroSlider";
import Navbar from "../components/navbar";
import SectionAlpha from "../components/sectionAlpha";


export default function Home() {
  return (
    <div>
      <Head>
        <title>BotBrainz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-bot-alpha">
          <Navbar />
          <div className="max-w-screen-xl mx-auto px-6 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 lg:gap-20">
            <HeroDesc />
            <HeroSlider />
          </div>
        </div>
        <div className="bg-alpha relative">
          <div className="sec-divider h-20 w-full absolute top-0 -translate-y-1/2 z-20"></div>
          <SectionAlpha />
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
