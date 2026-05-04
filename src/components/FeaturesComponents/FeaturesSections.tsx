/** @format */

import Image from "next/image";
import {
  BarChart3,
  BellRing,
  CalendarClock,
  Users,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

import SectionHeading from "@/components/CommonComponents/SectionHeading";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/CommonComponents/MotionReveal";

const features = [
  {
    title: "Field & Arena Management",
    description:
      "Create and manage your paintball field profile, upload images, define booking rules, and keep your arena ready for players.",
    icon: MapPinned,
    iconClassName: "bg-emerald-500/15 text-emerald-400",
  },
  {
    title: "Session Scheduling",
    description:
      "Create ranked or social sessions, set match times, manage player slots, and keep your calendar organized directly in the platform.",
    icon: CalendarClock,
    iconClassName: "bg-fuchsia-500/15 text-fuchsia-400",
  },
  {
    title: "Notifications & Updates",
    description:
      "Receive instant notifications for booking confirmations, updates, cancellations, and subscription alerts.",
    icon: BellRing,
    iconClassName: "bg-blue-500/15 text-blue-400",
  },
  {
    title: "Player Profiles & Teams",
    description:
      "Players can create profiles, join teams, track match history, and compete with others on the leaderboard.",
    icon: Users,
    iconClassName: "bg-orange-500/15 text-orange-400",
  },
  {
    title: "Analytics & Performance Insights",
    description:
      "Track bookings, revenue, player activity, and session performance through a powerful analytics dashboard.",
    icon: BarChart3,
    iconClassName: "bg-violet-500/15 text-violet-400",
  },
  {
    title: "Safety & Verification",
    description:
      "Verify players, manage rules, and surface the right controls so every field stays secure and ready for game day.",
    icon: ShieldCheck,
    iconClassName: "bg-rose-500/15 text-rose-400",
  },
];

const FeaturesSections = () => {
  return (
    <section
      id="features"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Background gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(41,47,88,0.35)_0%,rgba(4,5,15,0.88)_46%,#04050f_76%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-72 w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(255,59,59,0.16)_0%,rgba(255,59,59,0.05)_36%,rgba(4,5,15,0)_70%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <MotionReveal>
          <SectionHeading
            title="Platform Features"
            description="Everything players and field owners need to organize matches, manage bookings, and keep the experience polished across every device."
            className="max-w-4xl"
            descriptionClassName="max-w-3xl"
          />
        </MotionReveal>

        {/* Tagline — distressed red stamp style, exactly as in the image */}
        <MotionReveal>
          <div className="mt-6 flex justify-center sm:mt-8">
            <p
              className="select-none text-center font-black uppercase italic tracking-widest"
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 2.5rem)",
                color: "#e63232",
                textShadow:
                  "0 0 18px rgba(230,50,50,0.55), 2px 2px 0 rgba(0,0,0,0.55)",
                fontFamily: "'Arial Black', 'Impact', sans-serif",
                letterSpacing: "0.12em",
                WebkitTextStroke: "1px rgba(255,80,80,0.35)",
              }}
            >
              GEAR UP. MATCH UP. LEVEL UP.
            </p>
          </div>
        </MotionReveal>

        {/*
          Grid layout (matches the image exactly):
          ┌──────────────┬──────────────┬──────────────┐
          │  Feature [0] │  Phone (r1-2)│  Feature [1] │  row 1
          ├──────────────┤              ├──────────────┤
          │  Feature [2] │              │  Feature [3] │  row 2
          ├──────────────┴──────────────┴──────────────┤
          │  Feature [4] (col 1-2)  │  Feature [5]     │  row 3
          └─────────────────────────┴──────────────────┘
        */}
        <MotionStagger className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:gap-5 md:grid-cols-3 lg:gap-6">
          {/* Row 1 — Left card */}
          <MotionStaggerItem className="md:col-start-1 md:row-start-1 md:row-span-1">
            <FeatureCard {...features[0]} />
          </MotionStaggerItem>

          {/* Phone mockup — center, spans rows 1 & 2 */}
          <MotionStaggerItem className="max-h-100 md:col-start-2 md:row-start-1 md:row-span-2">
            <div className="flex  h-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(255,0,0,0.6)_90%,rgba(255,0,0,1)_100%)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.38)]  sm:p-6">
              <div className="w-full mt-26 max-w-[18rem] sm:max-w-[22rem] lg:max-w-[23rem]">
                <Image
                  src="/images/iPhone 14 Pro.png"
                  alt="TacPlay mobile app preview"
                  width={900}
                  height={1700}
                  priority
                  className="h-full w-full drop-shadow-[0_32px_50px_rgba(0,0,0,0.55)]"
                />
              </div>
            </div>
          </MotionStaggerItem>

          {/* Row 1 — Right card */}
          <MotionStaggerItem className="md:col-start-3 md:row-start-1">
            <FeatureCard {...features[1]} />
          </MotionStaggerItem>

          {/* Row 2 — Left card */}
          <MotionStaggerItem className="md:col-start-1 md:row-start-2">
            <FeatureCard {...features[2]} />
          </MotionStaggerItem>

          {/* Row 2 — Right card */}
          <MotionStaggerItem className="md:col-start-3 md:row-start-2">
            <FeatureCard {...features[3]} />
          </MotionStaggerItem>

          {/* Row 3 — Analytics spans col 1-2 (left + center) */}
          <MotionStaggerItem className="md:col-start-2 md:col-span-1 md:row-start-3 md:-mt-40">
            <FeatureCard {...features[4]} wide />
          </MotionStaggerItem>

          
        </MotionStagger>
      </div>
    </section>
  );
};

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconClassName: string;
  wide?: boolean;
};

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  iconClassName,
  wide = false,
}: FeatureCardProps) => {
  return (
    <article
      className={`group h-full rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,35,0.98)_0%,rgba(8,9,18,0.96)_100%)] shadow-[0_18px_50px_rgba(0,0,0,0.26)] transition-transform duration-200 hover:-translate-y-1 hover:border-white/20 ${
        wide ? "p-6 sm:p-8" : "p-5 sm:p-6"
      }`}
    >
      <div
        className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${iconClassName}`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3
        className={`mt-5 font-semibold tracking-tight text-white ${
          wide ? "text-2xl sm:text-[1.6rem]" : "text-xl sm:text-[1.35rem]"
        }`}
      >
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#a7abc6] sm:text-[15px]">
        {description}
      </p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-colors group-hover:text-white">
        Learn More
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </div>
    </article>
  );
};

export default FeaturesSections;