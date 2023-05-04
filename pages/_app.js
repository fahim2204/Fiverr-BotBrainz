// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../styles/globals.css";
import { useEffect } from "react";
// For Translation
import { appWithTranslation } from 'next-i18next'


function MyApp({ Component, pageProps}) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
