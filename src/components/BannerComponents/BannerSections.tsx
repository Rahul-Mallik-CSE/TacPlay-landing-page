/** @format */

"use client";

import Image from "next/image";
import React from "react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import { MotionReveal } from "@/components/CommonComponents/MotionReveal";

const BannerSections = () => {
  return (
    <section id="banner" className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <MotionReveal>
            <div className="order-2 mt-4 md:order-1 md:mt-0">
              <SectionHeading
                semiTitle={"TACPLAY"}
                title={"Bring competitive paintball to life"}
                description={
                  "Powerful tools for players and field owners — session management, rankings, bookings, and more."
                }
              />

              <p className="mt-6 text-base text-secondary">
                Manage arenas, create sessions, and let players discover ranked
                matches in seconds.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal>
            <div className="order-1 flex justify-center md:order-2">
              <div className="w-[320px] sm:w-[420px] md:w-[560px] lg:w-[720px]">
                <Image
                  src="/images/Frame 2147229597.png"
                  alt="Dashboard preview"
                  width={1200}
                  height={800}
                  className="rounded-2xl object-cover shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default BannerSections;
