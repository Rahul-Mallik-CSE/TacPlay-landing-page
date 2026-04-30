/** @format */

import Image from "next/image";

import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const leftSteps = [
  {
    number: "1",
    title: "Explore Fields",
    description:
      "Browse paintball arenas near you, view available sessions, and find the perfect match based on location and time.",
  },
  {
    number: "2",
    title: "Choose a Session",
    description:
      "Check session details including match type, available slots, and team requirements before joining the game.",
  },
];

const rightSteps = [
  {
    number: "3",
    title: "Book Your Spot",
    description:
      "Secure your place in seconds with quick booking and instant confirmation for your selected session.",
  },
  {
    number: "4",
    title: "Play & Climb the Rankings",
    description:
      "Compete in matches, track your performance, and move up the leaderboard as you win ranked games.",
  },
];

const FormFindingSections = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(18,21,42,0.38)_0%,rgba(4,5,15,0.94)_48%,#04050f_80%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,63,63,0.18)_0%,rgba(255,63,63,0.05)_35%,rgba(4,5,15,0)_70%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            title="From Finding a Field to Winning the Match - Here’s How"
            description="Discover paintball arenas, book sessions instantly, join matches with other players, and climb the global rankings all in one seamless experience."
            className="max-w-4xl"
            descriptionClassName="max-w-4xl"
          />
        </MotionReveal>

        <div className="relative mt-12 sm:mt-14 lg:mt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[calc(100%-18rem)] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(255,52,52,0.95)_20%,rgba(255,52,52,0.95)_80%,transparent_100%)] md:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[calc(100%-8rem)] w-px -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(180deg,transparent_0%,rgba(255,52,52,0.95)_18%,rgba(255,52,52,0.95)_82%,transparent_100%)] md:block"
          />

          <MotionStagger className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,21rem)_minmax(0,1fr)] md:gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,24rem)_minmax(0,1fr)]">
            <div className="grid gap-6">
              {leftSteps.map((step, index) => (
                <MotionStaggerItem key={step.number}>
                  <article
                    className={`relative rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,30,0.98)_0%,rgba(10,11,18,0.98)_100%)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.26)] sm:p-6 ${index === 0 ? "md:mt-10" : "md:mt-2"}`}
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c90f18] text-base font-semibold text-white shadow-[0_0_0_8px_rgba(201,15,24,0.16)]">
                      {step.number}
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-[1.5rem]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-[#a7abc6] sm:text-[15px]">
                      {step.description}
                    </p>

                    <div
                      aria-hidden="true"
                      className="absolute right-0 top-1/2 hidden h-px w-12 -translate-y-1/2 translate-x-full bg-[#ff3434] md:block"
                    />
                  </article>
                </MotionStaggerItem>
              ))}
            </div>

            <MotionStaggerItem className="order-first md:order-none">
              <div className="relative mx-auto flex min-h-[34rem] max-w-[22rem] items-center justify-center rounded-[2.6rem] border border-white/12 bg-[linear-gradient(180deg,rgba(17,19,33,0.98)_0%,rgba(6,7,12,0.98)_100%)] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.42)] sm:max-w-[24rem] lg:min-h-[40rem] lg:max-w-[24rem]">
                <div className="absolute inset-x-6 top-6 h-24 rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,rgba(255,70,70,0.16)_0%,rgba(255,70,70,0.04)_40%,rgba(4,5,15,0)_75%)] blur-2xl" />
                <div className="relative w-full overflow-hidden rounded-[2.1rem] border border-white/12 bg-black p-2">
                  <Image
                    src="/images/iPhone 14 Pro (1).png"
                    alt="TacPlay mobile app discover screen"
                    width={900}
                    height={1700}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </MotionStaggerItem>

            <div className="grid gap-6">
              {rightSteps.map((step, index) => (
                <MotionStaggerItem key={step.number}>
                  <article
                    className={`relative rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,30,0.98)_0%,rgba(10,11,18,0.98)_100%)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.26)] sm:p-6 ${index === 0 ? "md:mt-2" : "md:mt-10"}`}
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c90f18] text-base font-semibold text-white shadow-[0_0_0_8px_rgba(201,15,24,0.16)]">
                      {step.number}
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-[1.5rem]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-[#a7abc6] sm:text-[15px]">
                      {step.description}
                    </p>

                    <div
                      aria-hidden="true"
                      className="absolute left-0 top-1/2 hidden h-px w-12 -translate-x-full -translate-y-1/2 bg-[#ff3434] md:block"
                    />
                  </article>
                </MotionStaggerItem>
              ))}
            </div>
          </MotionStagger>
        </div>
      </div>
    </section>
  );
};

export default FormFindingSections;
