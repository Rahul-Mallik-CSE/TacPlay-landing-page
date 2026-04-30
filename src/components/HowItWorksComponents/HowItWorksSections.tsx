/** @format */

import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const steps = [
  {
    number: "01",
    title: "Create & Verify",
    description:
      "Start by creating your account and uploading the required documents. Once approved, you are ready to access the full platform.",
  },
  {
    number: "02",
    title: "Subscribe & Access",
    description:
      "Activate your subscription to unlock job posting or match management tools. From there, players and fields can connect instantly.",
  },
  {
    number: "03",
    title: "Work & Track",
    description:
      "Run the day-to-day flow with check-ins, chats, and contracts while every session is tracked and summarized automatically.",
  },
];

const HowItWorksSections = () => {
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,21,42,0.34)_0%,rgba(4,5,15,0.92)_45%,#04050f_78%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            title="How It Works"
            description="A simple flow to connect players, field owners, and teams without adding extra friction to the process."
            className="max-w-4xl"
          />
        </MotionReveal>

        <div className="relative mt-14">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:hidden" />
          <div className="absolute left-[8.333%] right-[8.333%] top-6 hidden h-px bg-gradient-to-r from-[#d12929] via-[#f5d01a] to-[#d12929] md:block" />

          <MotionStagger className="grid gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <MotionStaggerItem key={step.number} className="relative">
                <div className="relative rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,35,0.98)_0%,rgba(8,9,18,0.96)_100%)] px-5 pb-6 pt-14 text-left shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:px-6 sm:pb-7 md:pt-18 md:text-center">
                  <div className="absolute left-6 top-0 flex -translate-y-1/2 items-center justify-center md:left-1/2 md:top-6 md:-translate-x-1/2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c90f18] text-base font-semibold text-white shadow-[0_0_0_8px_rgba(201,15,24,0.16)]">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white md:text-[1.35rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-[#a7abc6] sm:text-[15px] md:mx-auto">
                    {step.description}
                  </p>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSections;
