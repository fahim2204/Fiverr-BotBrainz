import Head from "next/head";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SectionAlpha from "../components/sectionAlpha";
import SectionHero from "../components/sectionHero";
import SectionBeta from "../components/sectionBeta";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BotBrainz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-bot-alpha rounded-b-[42px]">
          <Navbar />
          <SectionHero />
        </div>
        <SectionAlpha />
        <SectionBeta />
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
