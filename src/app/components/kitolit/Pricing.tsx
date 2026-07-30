import { Check } from "lucide-react";
import { motion } from "motion/react";
import { BookButton } from "./BookCTA";
import { SectionHeading, Mandala } from "./decor";

const includes = [
  "Live guided online workshop session",
  "Free activity material delivered to your home",
  "Handcrafted Eco Tech Ganesha build",
  "Interactive Magical MushakBot build",
  "Beginner friendly — ages 6 to 13",
  "Small batches + certificate of completion",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-gradient-to-b from-white to-[#FFF9F2] py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_80%_at_50%_0%,rgba(244,180,0,0.18),transparent_60%)]" />
      <Mandala spin className="pointer-events-none absolute -right-28 top-10 w-[420px] text-[color:var(--festive-orange)] opacity-[0.08]" />
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading eyebrow="Simple Pricing" title={<>One price. Everything included.</>} subtitle="No hidden fees. Free shipping. Just one joyful making day for your child." />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 sm:mt-14 max-w-xl"
        >
          {/* glassmorphism pricing card */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/60 p-6 sm:p-12 shadow-[0_40px_80px_-30px_rgba(238,64,53,0.25)] backdrop-blur-xl">
            {/* Soft decorative background in card */}
            <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-[color:var(--brand-red)] opacity-[0.04] blur-3xl" />
            
            <span className="absolute right-4 top-4 sm:right-6 sm:top-6 rounded-full bg-gradient-to-r from-[color:var(--festive-orange)] to-[color:var(--brand-red)] px-3 py-1 sm:px-4 sm:py-1.5 font-bold text-xs sm:text-sm text-white shadow-sm">
              Save ₹499
            </span>
            <p className="font-[family:var(--font-display)] text-base sm:text-lg font-medium text-[color:var(--muted-foreground)]">Eco Tech Ganesha Workshop</p>
            <div className="mt-2 sm:mt-3 flex items-end gap-3 sm:gap-4">
              <span className="mb-1 sm:mb-2 text-xl sm:text-2xl font-medium text-[color:var(--muted-foreground)] line-through opacity-70">₹2999</span>
              <span className="font-[family:var(--font-display)] text-5xl sm:text-7xl font-extrabold text-[color:var(--brand-red)]">
                ₹2500
              </span>
            </div>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base font-semibold text-[color:var(--festive-orange)]">per child • free material + free delivery</p>

            <ul className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-0.5 sm:mt-1 grid size-6 sm:size-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[color:var(--brand-blue)] to-[#1a4078] text-white shadow-sm">
                    <Check className="size-3.5 sm:size-4" strokeWidth={3} />
                  </span>
                  <span className="text-base sm:text-lg font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 sm:mt-10">
              <BookButton className="w-full justify-center py-5 sm:py-6 text-lg sm:text-xl shadow-xl shadow-[color:var(--brand-red)]/20" label="Book the Workshop" />
            </div>
            <p className="mt-4 sm:mt-6 flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-medium text-[color:var(--muted-foreground)]">
              <span>🔒 Secure booking</span>
              <span>•</span>
              <span>Limited seats per batch</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
