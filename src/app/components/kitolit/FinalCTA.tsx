import { BookButton } from "./BookCTA";
import { FeatureChips } from "./FeatureChips";
import { Mandala, GaneshaMark, MushakMark } from "./decor";
import { workshopHighlights } from "./workshopHighlights";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function FinalCTA() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[color:var(--brand-red)] via-[color:var(--brand-blue)] to-[#1a4078] text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.05] mix-blend-overlay" />
      <Mandala spin className="pointer-events-none absolute -left-24 -top-24 w-[480px] text-white opacity-[0.07]" />
      <Mandala className="pointer-events-none absolute -right-20 bottom-0 w-[380px] text-[color:var(--festive-gold)] opacity-[0.15]" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-5 sm:py-24">
        <div className="mb-6 flex items-end justify-center gap-4 drop-shadow-2xl sm:mb-8 sm:gap-6">
          <GaneshaMark className="w-24 sm:w-28" />
          <MushakMark className="w-32 sm:w-36" />
        </div>
        <h2 className="text-[clamp(2.2rem,8vw,4rem)] leading-[1.1] font-[family:var(--font-display)] font-extrabold text-white">
          Give your child a <br className="hidden sm:block" /> maker's Ganesh Chaturthi
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg sm:text-xl text-white/90 font-medium sm:mt-6 px-2">
          Book the live workshop today! The free activity material ships right to your home, and the memories will last far longer.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:mt-10 sm:gap-6 w-full">
          <BookButton className="w-full max-w-[280px] sm:max-w-none scale-105 shadow-[0_0_30px_rgba(244,180,0,0.3)] hover:shadow-[0_0_50px_rgba(244,180,0,0.5)] sm:scale-110" />
          <div className="flex flex-col items-center gap-2 sm:items-start text-white mt-4 sm:mt-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="relative inline-block text-white/90 font-semibold text-base sm:text-lg mr-1">
                <span className="absolute left-[-5%] right-[-5%] top-1/2 h-[3px] sm:h-[4px] -translate-y-1/2 rotate-[20deg] bg-[color:var(--festive-orange)] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.1)]"></span>
                ₹3000
              </span>
              <span className="font-[family:var(--font-display)] text-4xl sm:text-5xl font-bold text-[color:var(--festive-gold)] drop-shadow-md">
                ₹2000
              </span>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-1">
              <span className="rounded-full bg-[color:var(--festive-orange)]/20 px-3 py-1 text-xs font-bold text-white border border-[color:var(--festive-orange)]/50 tracking-wide">
                EARLY BIRD: SAVE ₹1000
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="animate-pulse size-2 rounded-full bg-[color:var(--festive-gold)]"></span>
                <span className="text-[11px] font-bold text-[color:var(--festive-gold)] uppercase tracking-wider">
                  Book before September 1
                </span>
              </div>
            </div>
          </div>
        </div>

        <FeatureChips
          items={workshopHighlights}
          className="mt-10 justify-center gap-2 sm:mt-12 sm:gap-3"
          itemClassName="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-medium backdrop-blur-md sm:px-5 sm:py-2.5 sm:text-sm"
          iconClassName="size-4 text-[color:var(--festive-gold)] sm:size-5"
        />

        <div className="mt-14 sm:mt-16 flex flex-col items-center justify-center gap-3">
          <div className="rounded-2xl border border-white/40 bg-white/95 p-3 shadow-xl backdrop-blur-md">
            <ImageWithFallback
              src="/images/logos/kitolit_logo_vertical.png"
              alt="Kitolit - Learn by Doing"
              className="h-20 sm:h-24 w-auto object-contain"
            />
          </div>
          <p className="mt-2 text-xs sm:text-sm text-white/70 font-medium">
            © {new Date().getFullYear()} Kitolit • Festive Maker Series • Made with joy for young makers
          </p>
        </div>
      </div>
    </footer>
  );
}
