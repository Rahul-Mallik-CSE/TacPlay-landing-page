/** @format */

import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const powerFeatures = [
  {
    percent: "95%",
    title: "Faster Session Management",
    description:
      "Create, manage, and organize paintball sessions quickly with an intuitive dashboard built for field owners.",
  },
  {
    percent: "20%",
    title: "Higher Player Engagement",
    description:
      "Players can discover fields, join matches, and compete in ranked games that keep them coming back.",
  },
  {
    percent: "55%",
    title: "Improved Booking Efficiency",
    description:
      "Automated booking and session scheduling helps fields manage reservations without manual work.",
  },
  {
    percent: "100%",
    title: "Verified Match Results",
    description:
      "Match results are securely submitted by field owners to ensure fair rankings and trusted competition.",
  },
];

const PowerFeatureSections = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(18,21,42,0.4)_0%,rgba(4,5,15,0.94)_48%,#04050f_80%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            title="Built to Power the Future of Competitive Paintball"
            description="A platform designed to simplify field management, improve match organization, and connect paintball players around the world."
            className="max-w-4xl"
            descriptionClassName="max-w-3xl"
          />
        </MotionReveal>

        <MotionStagger className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {powerFeatures.map((feature) => (
            <MotionStaggerItem key={feature.title} className="h-full">
              <article className="flex h-full min-h-[18rem] flex-col rounded-[1.8rem] border border-[linear-gradient(180deg,#000000,#ff0000)] bg-[linear-gradient(180deg,rgba(16,18,30,0.98)_0%,rgba(10,11,18,0.98)_100%)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-transform duration-200 hover:-translate-y-1 sm:p-6">
                <p className="text-4xl font-semibold tracking-tight text-white sm:text-[2.7rem]">
                  {feature.percent}
                </p>
                <h3 className="mt-8 max-w-[12rem] text-2xl font-medium leading-tight text-white sm:text-[1.6rem]">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-[16rem] text-sm leading-7 text-[#a7abc6] sm:text-[15px]">
                  {feature.description}
                </p>
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};

export default PowerFeatureSections;
