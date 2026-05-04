import Image from "next/image";

const BannerSections = () => {
  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative stickers - top-left, top-right, left, right, bottom-left */}
         

          <div className="z-50 pointer-events-none absolute top-8 left-6 hidden md:block">
            <Image src="/images/polygon-2.png" alt="sticker" width={60} height={60} />
          </div>

           <div className="z-50 pointer-events-none absolute bottom-8 md:bottom-16 left-6 hidden md:block">
            <Image src="/images/polygon-1.png" alt="sticker" width={48} height={48} />
          </div>

          

          {/* Main framed screenshot */}
          <div className="relative mx-auto max-w-6xl">
            <div className="relative rounded-3xl  bg-[linear-gradient(180deg,#0b0b10,rgba(10,11,18,0.6))] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
              {/* Outer bezel effect */}
              <div className="rounded-2xl border-t-2 border-l-2 border-r-2 border-white/70 p-6 bg-black/40 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-xl bg-black">
                  {/* Screenshot */}
                  <div className="relative aspect-video w-full">
                    <Image
                      src="/images/banner.png"
                      alt="Dashboard preview"
                      fill
                      sizes="(min-width: 1280px) 80rem, (min-width: 768px) 60rem, 90vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small sticker near call-to-action (right side) - use hero icon if present */}
          <div className="pointer-events-none absolute bottom-24 right-8 hidden md:block">
            <Image src="/images/twist-sticker.png" alt="swirl" width={44} height={44} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSections;
