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
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(41,47,88,0.35)_0%,rgba(4,5,15,0.88)_46%,#04050f_76%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-72 w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(255,59,59,0.16)_0%,rgba(255,59,59,0.05)_36%,rgba(4,5,15,0)_70%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            title="Platform Features"
            description="Everything players and field owners need to organize matches, manage bookings, and keep the experience polished across every device."
            className="max-w-4xl"
            descriptionClassName="max-w-3xl"
          />
        </MotionReveal>

        <MotionStagger className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-3 md:grid-rows-[repeat(2,minmax(0,1fr))] md:gap-5 lg:grid-cols-[1fr_minmax(320px,0.98fr)_1fr] lg:gap-6">
          <MotionStaggerItem className="md:row-start-1 md:col-start-1">
            <FeatureCard {...features[0]} />
          </MotionStaggerItem>

          <MotionStaggerItem className="md:row-span-2 md:col-start-2 md:row-start-1">
            <div className="relative flex h-full min-h-[32rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,78,78,0.12)_0%,rgba(8,9,18,0.98)_22%,rgba(8,9,18,0.98)_100%)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.38)] sm:min-h-[40rem] sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,102,102,0.28)_0%,rgba(255,102,102,0.08)_30%,rgba(4,5,15,0)_68%)]" />
              <div className="absolute inset-x-10 bottom-10 top-14 rounded-full bg-[radial-gradient(circle,rgba(255,107,107,0.18)_0%,rgba(255,107,107,0.04)_40%,rgba(4,5,15,0)_72%)] blur-2xl" />
              <div className="relative w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-[23rem]">
                <Image
                  src="/images/iPhone 14 Pro.png"
                  alt="TacPlay mobile app preview"
                  width={900}
                  height={1700}
                  priority
                  className="h-auto w-full drop-shadow-[0_32px_50px_rgba(0,0,0,0.55)]"
                />
              </div>
            </div>
          </MotionStaggerItem>

          <MotionStaggerItem className="md:row-start-1 md:col-start-3">
            <FeatureCard {...features[1]} />
          </MotionStaggerItem>

          <MotionStaggerItem className="md:row-start-2 md:col-start-1">
            <FeatureCard {...features[2]} />
          </MotionStaggerItem>

          <MotionStaggerItem className="md:row-start-2 md:col-start-3">
            <FeatureCard {...features[3]} />
          </MotionStaggerItem>

          <MotionStaggerItem className="md:col-start-1 lg:col-start-2 lg:row-start-3">
            <FeatureCard {...features[4]} />
          </MotionStaggerItem>

          <MotionStaggerItem className="md:col-start-3 lg:col-start-3 lg:row-start-3">
            <FeatureCard {...features[5]} />
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
};

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  iconClassName,
}: FeatureCardProps) => {
  return (
    <article className="group h-full rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,20,35,0.98)_0%,rgba(8,9,18,0.96)_100%)] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.26)] transition-transform duration-200 hover:-translate-y-1 hover:border-white/20 sm:p-6">
      <div
        className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${iconClassName}`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
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
