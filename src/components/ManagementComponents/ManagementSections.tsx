/** @format */

import Image from "next/image";
import {
  CalendarClock,
  ChartColumn,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const managementStats = [
  { label: "Live sessions", value: "68", tone: "from-[#fedd00] to-[#ff8a00]" },
  {
    label: "Active bookings",
    value: "254,852",
    tone: "from-[#ff3131] to-[#7a0d19]",
  },
  {
    label: "Match reports",
    value: "100%",
    tone: "from-[#66ff88] to-[#1fa64d]",
  },
];

const ManagementSections = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(28,32,66,0.4)_0%,rgba(4,5,15,0.94)_46%,#04050f_80%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,63,63,0.16)_0%,rgba(255,63,63,0.05)_35%,rgba(4,5,15,0)_70%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            title="How TACPLAY Simplifies Paintball Management"
            description="From live bookings to match tracking, the dashboard keeps field owners in control of every session, report, and score line."
            className="max-w-4xl"
            descriptionClassName="max-w-3xl"
          />
        </MotionReveal>

        <MotionStagger className="mt-12 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-12 lg:gap-5">
          <MotionStaggerItem className="lg:col-span-7 ">
            <article className="h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,18,32,0.98)_0%,rgba(8,9,18,0.98)_100%)] shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-button-bg uppercase">
                    Dashboard Overview
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                    Monitor sessions in real time
                  </h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 p-2 text-white/60">
                  <TrendingUp className="h-4 w-4" />
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/Overview.jpg"
                  alt="TACPLAY dashboard overview"
                  width={1600}
                  height={1020}
                  className="h-auto w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(8,9,18,0)_0%,rgba(8,9,18,0.82)_100%)]" />
              </div>
            </article>
          </MotionStaggerItem>

          <MotionStaggerItem className="lg:col-span-5">
            <article className="h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,18,32,0.98)_0%,rgba(8,9,18,0.98)_100%)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-button-bg uppercase">
                    Booking insights
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                    Track booking activity
                  </h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 p-2 text-white/60">
                  <ChartColumn className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#080910] p-3">
                <Image
                  src="/images/Frame 2147229240.png"
                  alt="Booking source breakdown chart"
                  width={900}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </div>
            </article>
          </MotionStaggerItem>

          <MotionStaggerItem className="lg:col-span-4">
            <article className="h-full rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,18,32,0.98)_0%,rgba(8,9,18,0.98)_100%)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-button-bg uppercase">
                    Session pulse
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                    Monitor field readiness
                  </h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 p-2 text-white/60">
                  <CalendarClock className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center">
                <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-[conic-gradient(from_160deg,#fedd00_0deg,#fedd00_95deg,#c90f18_95deg,#c90f18_320deg,#fedd00_320deg,#fedd00_360deg)] shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
                  <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-[#090a12] text-center">
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-white/45 uppercase">
                      Live sessions
                    </p>
                    <p className="mt-2 text-4xl font-semibold text-white">68</p>
                    <p className="mt-1 text-sm text-[#a7abc6]">Active fields</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                    Growth
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">+24%</p>
                </div>
                <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                    Alerts
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">12</p>
                </div>
                <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                    Safe mode
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-lg font-semibold text-white">
                    <ShieldCheck className="h-4 w-4 text-[#66ff88]" />
                    Ready
                  </p>
                </div>
              </div>
            </article>
          </MotionStaggerItem>

          <MotionStaggerItem className="lg:col-span-8">
            <article className="h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,18,32,0.98)_0%,rgba(8,9,18,0.98)_100%)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-button-bg uppercase">
                    Match control
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                    Keep the scoreboard and squads aligned
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/75">
                  <span className="h-2 w-2 rounded-full bg-[#66ff88]" />
                  Live updates
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#070812] p-3">
                <Image
                  src="/images/Frame 2147229391.png"
                  alt="Match scoreboard and player cards"
                  width={1200}
                  height={760}
                  className="h-auto w-full object-cover"
                />
              </div>
            </article>
          </MotionStaggerItem>
        </MotionStagger>
      </div>
    </section>
  );
};

export default ManagementSections;
