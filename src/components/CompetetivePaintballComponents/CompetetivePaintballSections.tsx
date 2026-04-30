/** @format */

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const testimonials = [
  {
    name: "Jhon Marcel",
    location: "Miami, Florida",
    quote:
      "The ranking system and match tracking features are what make this platform stand out. It brings a competitive edge that was missing before. Players stay engaged, and every match actually feels meaningful.",
    avatar: "JM",
    avatarTone:
      "bg-[linear-gradient(135deg,rgba(242,199,150,1)_0%,rgba(114,72,31,1)_100%)]",
    cardTone:
      "border-white/10 bg-[linear-gradient(180deg,rgba(16,18,30,0.98)_0%,rgba(10,11,18,0.98)_100%)]",
    tilt: "-rotate-6",
    faded: true,
  },
  {
    name: "Jhon Marcel",
    location: "United State",
    quote:
      "The ranking system and match tracking features are what make this platform stand out. It brings a competitive edge that was missing before. Players stay engaged, and every match actually feels meaningful.",
    avatar: "JM",
    avatarTone:
      "bg-[linear-gradient(135deg,rgba(242,199,150,1)_0%,rgba(114,72,31,1)_100%)]",
    cardTone:
      "border-white/10 bg-[linear-gradient(180deg,rgba(18,20,35,0.98)_0%,rgba(9,10,17,0.98)_100%)] shadow-[0_24px_70px_rgba(0,0,0,0.34)]",
    tilt: "rotate-0",
    faded: false,
  },
  {
    name: "Jhon Marcel",
    location: "Portugal",
    quote:
      "The ranking system and match tracking features are what make this platform stand out. It brings a competitive edge that was missing before. Players stay engaged, and every match actually feels meaningful.",
    avatar: "JM",
    avatarTone:
      "bg-[linear-gradient(135deg,rgba(242,199,150,1)_0%,rgba(114,72,31,1)_100%)]",
    cardTone:
      "border-white/10 bg-[linear-gradient(180deg,rgba(16,18,30,0.98)_0%,rgba(10,11,18,0.98)_100%)]",
    tilt: "rotate-6",
    faded: true,
  },
];

const CompetetivePaintballSections = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(18,21,42,0.38)_0%,rgba(4,5,15,0.95)_46%,#04050f_80%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <MotionReveal className="max-w-4xl">
            <SectionHeading
              title="Built to Power the Future of Competitive Paintball"
              description="Discover paintball arenas, book sessions instantly, join matches with other players, and climb the global rankings all in one seamless experience."
              className="mx-0 max-w-4xl text-left"
              descriptionClassName="max-w-3xl"
            />
          </MotionReveal>

          <MotionReveal delay={0.08} className="lg:pt-10">
            <div className="flex items-center gap-3 self-start lg:self-auto">
              <button
                type="button"
                aria-label="Previous testimonial"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#212033] text-white/60 transition-colors hover:bg-[#2c2a42] hover:text-white"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#c90f18] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-colors hover:bg-[#df141f]"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </MotionReveal>
        </div>

        <MotionStagger className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <MotionStaggerItem
              key={`${testimonial.name}-${testimonial.location}`}
              className="h-full"
            >
              <article
                className={`relative h-full overflow-hidden rounded-[2rem] border p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition-transform duration-300 sm:p-6 ${testimonial.cardTone} ${testimonial.faded ? "opacity-75" : ""} ${testimonial.tilt} lg:transform-gpu`}
              >
                <Quote className="h-14 w-14 text-white/10" />
                <p
                  className={`mt-6 text-sm leading-7 ${testimonial.faded ? "text-white/55" : "text-white/92"} sm:text-[15px]`}
                >
                  “{testimonial.quote}”
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] ${testimonial.avatarTone}`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-xl font-medium tracking-tight text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#7f82a4]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {index === 1 && (
                  <div className="mt-8 flex items-center justify-center md:mt-10">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full bg-[#c90f18] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(201,15,24,0.28)] transition-transform hover:-translate-y-0.5"
                    >
                      Share Your Thought
                    </button>
                  </div>
                )}
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
};

export default CompetetivePaintballSections;
