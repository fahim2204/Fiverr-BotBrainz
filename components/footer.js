import Link from "next/link";

export default () => {
  return (
    <>
      <div className="bg-bot-alpha">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-4 text-[#D5C8E1] border-t border-t-[#503569]">
          <div className="flex justify-between items-center py-2">
            <Link href={"/"}><img src="/img/footer-logo.svg" alt="" /></Link>
            <div>© 2023 BotBrainz. All rights reserved</div>
            <div className="flex items-center gap-x-5">
              <Link href={"/"}><img src="/img/icon/facebook.svg" alt="fb" /></Link>
              <img src="/img/icon/v-line.svg" alt="|" />
              <Link href={"/"}><img src="/img/icon/instagram.svg" alt="insta" /></Link>
              <img src="/img/icon/v-line.svg" alt="|" />
              <Link href={"/"}><img src="/img/icon/linkedin.svg" alt="linkedin" /></Link>
              <img src="/img/icon/v-line.svg" alt="|" />
              <Link href={"/"}><img src="/img/icon/youtube.svg" alt="youtube" /></Link>
              <img src="/img/icon/v-line.svg" alt="|" />
              <Link href={"/"}><img src="/img/icon/twitter.svg" alt="twitter" /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
