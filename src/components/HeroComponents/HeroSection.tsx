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
      className="relative overflow-hidden w-full pb-0 pt-8 sm:pt-12 lg:pt-16"
    >
      {/* Background gradients */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-[#04050f]" />

        {/* Top subtle dark overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(10,12,30,0.6)_0%,transparent_60%)]" />

        {/* MAIN RED GLOW — large ellipse at bottom center, full width */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[55%] w-full bg-[radial-gradient(ellipse_80%_100%_at_50%_100%,rgba(200,30,30,0.72)_0%,rgba(160,20,20,0.45)_30%,rgba(80,10,10,0.18)_60%,transparent_80%)]" />

        {/* Corner darkening to keep edges black */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(4,5,15,0.5)_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">

          <MotionReveal delay={0.04} className="mt-6">
            <div className="max-w-6xl gap-2 md:gap-4 text-balance text-lg sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-semibold leading-[1.05] tracking-tight text-white">
              <div className="flex items-center gap-3">
                Where{" "}
                <Image
                  src="/images/hero-name.png"
                  alt="Paintball"
                  width={320}
                  height={320}
                  priority
                  className="h-10 w-22 md:h-18 md:w-44 lg:h-30 lg:w-52"
                />{" "}
                Players Find Fields
              </div>
              and Fields Find Players
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1} className="mt-5 max-w-2xl">
            <p className="text-sm leading-relaxed text-[#a7abc6] sm:text-base lg:text-lg">
              Discover arenas, host sessions, book matches, and compete in
              ranked play all in one global platform.
            </p>
          </MotionReveal>

          <MotionReveal
            delay={0.14}
            className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <Image
              src="/images/heading-up.png"
              alt="Players icon"
              width={500}
              height={500}
              className="h-6 w-90 md:h-8 md:w-80 lg:h-10 lg:w-150"
            />
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

          {/* Phone mockups — wide to match 3-phone spread */}
          <MotionReveal
            delay={0.18}
            className="relative mt-12 w-full max-w-4xl lg:mt-16"
          >
            <div className="overflow-hidden w-full">
              <Image
                src="/images/hero-banner.png"
                alt="TacPlay dashboard preview"
                width={1800}
                height={1860}
                priority
                className="h-full w-full object-contain"
              />
            </div>
          </MotionReveal>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;