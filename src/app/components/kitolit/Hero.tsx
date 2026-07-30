import { motion, useReducedMotion } from "motion/react";
import { BookButton } from "./BookCTA";
import { FeatureChips } from "./FeatureChips";
import { Mandala, GaneshaMark, MushakMark } from "./decor";
import { workshopHighlights } from "./workshopHighlights";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F2] to-[#FFF0DD]">
      {/* soft festive wash */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(244,180,0,0.25),transparent_60%),radial-gradient(90%_70%_at_100%_20%,rgba(238,64,53,0.18),transparent_55%)]" />
      <Mandala spin className="pointer-events-none absolute -right-24 -top-24 w-[420px] text-[color:var(--brand-blue)] opacity-[0.12]" />
      <Mandala className="pointer-events-none absolute -left-28 top-40 w-[300px] text-[color:var(--festive-orange)] opacity-[0.12]" />

      <div className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-5 sm:pt-16 sm:pb-16">
        {/* brand row */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-[family:var(--font-display)] font-bold text-[color:var(--brand-red)]">
            Kito<span className="text-[color:var(--brand-blue)]">lit</span>
          </span>
          <span className="ml-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-[color:var(--muted-foreground)] backdrop-blur sm:text-xs">
            Festive Maker Series
          </span>
        </div>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* left copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-festive-gold/20 px-4 py-1.5 text-xs font-semibold text-[color:var(--festive-orange)] sm:text-sm">
              🪔 This Ganesh Chaturthi — Make, Don't Just Buy
            </span>
            <h1 className="mt-4 sm:mt-5 text-[clamp(2.25rem,8vw,4rem)] leading-[1.08] tracking-tight text-foreground font-[family:var(--font-display)] font-extrabold">
              Eco Tech Ganesha{" "}
              <span className="text-[color:var(--brand-red)]">Making</span>{" "}
              Workshop
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--muted-foreground)] sm:mt-5 sm:text-lg sm:max-w-lg">
              A live, guided online session where children craft a festive{" "}
              <strong className="text-foreground">Eco Tech Ganesha</strong> and build an
              interactive <strong className="text-foreground">Magical MushakBot</strong> companion —
              creativity meets joyful discovery.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <BookButton className="w-full sm:w-auto" />
              <div className="flex items-center gap-2 w-full justify-center sm:w-auto sm:justify-start">
                <span className="text-[color:var(--muted-foreground)] line-through opacity-80 text-sm sm:text-base">₹2999</span>
                <span className="text-3xl font-[family:var(--font-display)] font-extrabold text-[color:var(--brand-blue)] sm:text-4xl">
                  ₹2500
                </span>
                <span className="rounded-full bg-[color:var(--brand-red)] px-2.5 py-0.5 text-xs font-bold text-white shadow-sm">
                  Save ₹499
                </span>
              </div>
            </div>

            {/* trust chips */}
            <FeatureChips
              items={workshopHighlights}
              className="mt-8 gap-2 sm:gap-2.5"
              itemClassName="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3.5 py-1.5 text-[13px] font-medium text-foreground shadow-sm backdrop-blur sm:px-4 sm:py-2 sm:text-sm"
              iconClassName="size-4 text-[color:var(--brand-blue)]"
            />
          </motion.div>

          {/* right — glassmorphism showcase card with high-quality animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-white/60 to-white/30 p-2 shadow-[0_20px_40px_-15px_rgba(238,64,53,0.15)] backdrop-blur-xl sm:rounded-[2.5rem] sm:shadow-[0_30px_60px_-20px_rgba(238,64,53,0.25)]">
              <div className="relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-[1.75rem] bg-[#FFF9F2] shadow-inner sm:rounded-[2rem]">
                {/* Wood texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
                
                {/* Floating Confetti elements */}
                <div className="absolute left-6 top-6 h-3 w-3 rounded-full bg-[color:var(--brand-red)] opacity-60" />
                <div className="absolute right-12 top-10 h-4 w-4 rotate-45 bg-[color:var(--festive-gold)] opacity-70" />
                <div className="absolute bottom-16 left-12 h-2.5 w-2.5 rounded-full bg-[color:var(--brand-blue)] opacity-60" />

                {/* The Path and Characters mapped inside SVG for perfect coordinate alignment */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none">
                  <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EE4035" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#F4B400" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#2359A4" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>

                  {/* Faint glowing orbit path */}
                  <circle
                    cx="200"
                    cy="200"
                    r="120"
                    stroke="url(#orbit-gradient)"
                    strokeWidth="1.5"
                    strokeDasharray="6 8"
                    fill="none"
                    filter="url(#glow)"
                    className="opacity-50"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="120"
                    stroke="url(#orbit-gradient)"
                    strokeWidth="1"
                    strokeDasharray="4 12"
                    fill="none"
                    className="opacity-80"
                  />

                  {/* Container overlays the exact 400x400 space so offsetPath scales with the SVG */}
                  <foreignObject x="0" y="0" width="400" height="400">
                    <div className="relative h-full w-full">
                      {/* Ganesha positioned exactly at visual center with slight floating motion */}
                      <div className="absolute left-1/2 top-1/2 z-10 w-28 sm:w-36 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl">
                        <motion.div
                          animate={shouldReduceMotion ? { y: 0 } : { y: [-6, 6, -6] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <GaneshaMark className="w-full" />
                        </motion.div>
                      </div>

                      {/* MushakBot continuously revolves in a perfect circular orbit */}
                      <motion.div
                        className="absolute left-0 top-0 z-20"
                        initial={{ offsetDistance: "0%" }}
                        animate={shouldReduceMotion ? { offsetDistance: "0%" } : { offsetDistance: "100%" }}
                        transition={{
                          duration: 10,
                          ease: "linear",
                          repeat: Infinity,
                        }}
                        style={{
                          offsetPath: "path('M 200,80 A 120,120 0 1,1 200,320 A 120,120 0 1,1 200,80')",
                          offsetRotate: "auto",
                        }}
                      >
                        <div className="w-16 sm:w-20 drop-shadow-lg -ml-8 -mt-6 sm:-ml-10 sm:-mt-[30px]">
                          {/* Hiding the internal SVG dashed line via Tailwind descendant selector to avoid modifying external files */}
                          <div className="[&_path[stroke-dasharray]]:hidden">
                            <MushakMark className="w-full" />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </foreignObject>
                </svg>

                {/* Label */}
                <div className="absolute bottom-4 sm:bottom-6 flex w-[90%] sm:w-auto items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-white/60 bg-white/80 px-4 py-2.5 sm:px-5 sm:py-3 shadow-lg backdrop-blur-md">
                  <div className="flex flex-col text-center sm:text-left w-full sm:w-auto">
                    <span className="font-[family:var(--font-display)] text-sm sm:text-base font-bold text-[color:var(--brand-blue)]">Magical MushakBot</span>
                    <span className="text-[11px] sm:text-xs font-medium text-[color:var(--muted-foreground)]">Magically guides its way to Eco Tech Ganesha</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
