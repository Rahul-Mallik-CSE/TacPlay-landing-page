/** @format */

"use client";

import Image from "next/image";
import React from "react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";
import { MotionReveal } from "@/components/CommonComponents/MotionReveal";

const DownloadSections = () => {
  return (
    <section id="download" className="bg-background py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Download TACPLAY & Start Competing Today"
          description="Discover paintball fields, book sessions instantly, compete in ranked matches, and track your performance — all in one powerful platform."
          className="text-center"
        />

        <div className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <MotionReveal>
            <div className="flex flex-col items-center md:items-start">
              <p className="mb-4 text-center text-sm text-secondary md:text-left">
                Get the app — available on both iOS and Android.
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 rounded-full bg-[#0f1724] px-4 py-2 shadow hover:opacity-95"
                >
                  <span className="text-2xl"></span>
                  <div className="text-left text-sm">
                    <div className="text-[10px] text-secondary">
                      Download on the
                    </div>
                    <div className="font-medium">App Store</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-3 rounded-full bg-[#0f1724] px-4 py-2 shadow hover:opacity-95"
                >
                  <span className="text-2xl">▶</span>
                  <div className="text-left text-sm">
                    <div className="text-[10px] text-secondary">Get it on</div>
                    <div className="font-medium">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal>
            <div className="flex justify-center md:justify-end">
              <div className="w-[320px] sm:w-[420px] md:w-[520px] lg:w-[640px]">
                <Image
                  src="/images/Overview.jpg"
                  alt="App preview"
                  width={800}
                  height={800}
                  className="rounded-3xl object-cover shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};

export default DownloadSections;
