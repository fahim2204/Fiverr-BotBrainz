import Head from "next/head";
import Link from "next/link";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SectionAlpha from "../components/sectionAlpha";
import SectionHero from "../components/sectionHero";
import SectionBeta from "../components/sectionBeta";
import SectionGamma from "../components/sectionGamma";
import SectionDelta from "../components/sectionDelta";
import SectionEpsilon from "../components/sectionEpsilon";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BotBrainz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <SectionHero />
        <SectionAlpha />
        <SectionBeta />
        <SectionGamma />
        <SectionDelta />
        <SectionEpsilon />
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
