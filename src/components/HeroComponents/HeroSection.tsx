/** @format */

import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden w-full py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(17,22,48,0.36)_0%,rgba(4,5,15,0.95)_45%,#04050f_70%)]" />
          <div className="absolute -bottom-24 left-1/2 h-90 w-300 -translate-x-1/2 rounded-[100%] bg-[radial-gradient(circle,rgba(238,82,82,0.58)_0%,rgba(170,42,42,0.42)_42%,rgba(4,5,15,0)_76%)] sm:h-107.5" />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center text-center">
          <h1 className="max-w-full text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Where{" "}
            <span className="inline-block bg-[linear-gradient(90deg,#f63c3c_0%,#f5d01a_25%,#3de65e_55%,#3eb7ff_80%,#ca69ff_100%)] bg-clip-text font-black italic text-transparent [text-shadow:0_0_18px_rgba(255,255,255,0.12)]">
              Paintball
            </span>{" "}
            Players Find Fields and Fields Find Players
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#a7abc6] sm:text-base">
            Discover arenas, host sessions, book matches, and compete in ranked
            play all in one global platform.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="#"
              className="flex h-14 w-36 items-center justify-center gap-3 rounded-2xl border border-white/15 bg-[#0f1222] px-5 text-left text-white shadow-[0_10px_24px_rgba(0,0,0,0.32)] transition-colors hover:bg-[#171b31]"
              aria-label="Download on the App Store"
            >
              <FaApple className="h-5 w-5" />
              <span className="flex flex-col leading-none">
                <span className="text-[10px] text-white/70">Download on</span>
                <span className="text-xs text-shadow-mauve-950 font-semibold">
                  App Store
                </span>
              </span>
            </a>

            <a
              href="#"
              className="flex h-14  w-36 items-center justify-center gap-3 rounded-2xl border border-white/15 bg-[#0f1222] px-5 text-left text-white shadow-[0_10px_24px_rgba(0,0,0,0.32)] transition-colors hover:bg-[#171b31]"
              aria-label="Get it on Google Play"
            >
              <FaGooglePlay className="h-5 w-5" />
              <span className="flex flex-col leading-none">
                <span className="text-[10px] text-white/70">Get it on</span>
                <span className="text-xs text-shadow-mauve-950 font-semibold">
                  Google Play
                </span>
              </span>
            </a>
          </div>

          <div className="relative mt-12 w-full max-w-295 rounded-[22px] border border-[#ff6e6e]/45 bg-[#0c1020] p-2 shadow-[0_0_0_1px_rgba(255,80,80,0.25),0_0_38px_rgba(236,87,87,0.34)] sm:mt-14 sm:p-3 lg:mt-16">
            <div className="overflow-hidden rounded-[18px] border border-white/10">
              <Image
                src="/images/Frame 2147229389.png"
                alt="TacPlay dashboard preview"
                width={1200}
                height={760}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
