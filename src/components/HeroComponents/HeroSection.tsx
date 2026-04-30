/** @format */

import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden w-full pb-10 pt-8 sm:pb-16 sm:pt-12 lg:pb-24 lg:pt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(17,22,48,0.38)_0%,rgba(4,5,15,0.95)_42%,#04050f_72%)]" />
          <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,56,56,0.22)_0%,rgba(255,56,56,0.08)_35%,rgba(4,5,15,0)_72%)] blur-3xl sm:h-96 sm:w-[52rem]" />
          <div className="absolute -bottom-24 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(circle,rgba(238,82,82,0.52)_0%,rgba(170,42,42,0.34)_42%,rgba(4,5,15,0)_76%)] sm:h-[30rem] sm:w-[70rem]" />
        </div>

        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <MotionReveal className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-button-bg uppercase backdrop-blur-sm">
            Built for modern paintball communities
          </MotionReveal>

          <MotionReveal delay={0.04} className="mt-6">
            <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              Where{" "}
              <span className="inline-block bg-[linear-gradient(90deg,#f63c3c_0%,#f5d01a_25%,#3de65e_55%,#3eb7ff_80%,#ca69ff_100%)] bg-clip-text font-black italic text-transparent [text-shadow:0_0_18px_rgba(255,255,255,0.12)]">
                Paintball
              </span>{" "}
              Players Find Fields and Fields Find Players
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.1} className="mt-5 max-w-2xl">
            <p className="text-sm leading-relaxed text-[#a7abc6] sm:text-base lg:text-lg">
              Discover arenas, host sessions, book matches, and compete in
              ranked play all in one global platform.
            </p>
          </MotionReveal>

          <MotionStagger
            className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
            stagger={0.08}
            delayChildren={0.08}
          >
            <MotionStaggerItem>
              <a
                href="#"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/15 bg-[#0f1222] px-5 text-left text-white shadow-[0_10px_24px_rgba(0,0,0,0.32)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#171b31] sm:w-40"
                aria-label="Download on the App Store"
              >
                <FaApple className="h-5 w-5" />
                <span className="flex flex-col leading-none">
                  <span className="text-[10px] text-white/70">Download on</span>
                  <span className="text-xs font-semibold">App Store</span>
                </span>
              </a>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <a
                href="#"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/15 bg-[#0f1222] px-5 text-left text-white shadow-[0_10px_24px_rgba(0,0,0,0.32)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#171b31] sm:w-40"
                aria-label="Get it on Google Play"
              >
                <FaGooglePlay className="h-5 w-5" />
                <span className="flex flex-col leading-none">
                  <span className="text-[10px] text-white/70">Get it on</span>
                  <span className="text-xs font-semibold">Google Play</span>
                </span>
              </a>
            </MotionStaggerItem>
          </MotionStagger>

          <MotionReveal
            delay={0.18}
            className="relative mt-12 w-full max-w-[19rem] sm:max-w-[24rem] lg:mt-16 lg:max-w-[28rem] xl:max-w-[30rem]"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_20%,rgba(255,59,59,0.4)_0%,rgba(255,59,59,0.12)_36%,rgba(4,5,15,0)_72%)] blur-2xl" />
            <div className="rounded-[2rem] border border-[#ff6e6e]/40 bg-[#0b0f1c] p-2 shadow-[0_0_0_1px_rgba(255,80,80,0.22),0_24px_64px_rgba(0,0,0,0.45)] sm:p-3">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
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
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
