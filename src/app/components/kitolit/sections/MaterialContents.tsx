import { motion } from "motion/react";
import { Hammer, Palette, CircuitBoard, Package, ScanLine, Cable } from "lucide-react";
import { SectionHeading, Mandala, GaneshaMark, MushakMark } from "../decor";

const parts = [
  { icon: Package, label: "Pre-cut wooden Ganesha parts" },
  { icon: Palette, label: "Non-toxic festive paints & brush" },
  { icon: CircuitBoard, label: "Mushak body & moving parts" },
  { icon: ScanLine, label: "Smart interactive sensor" },
  { icon: Cable, label: "Battery pack & wiring" },
  { icon: Hammer, label: "Glue, tools & sticker sheet" },
];

export function MaterialContents() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F2] to-white py-20">
      <Mandala className="pointer-events-none absolute -bottom-24 -left-24 w-[400px] text-[color:var(--brand-red)] opacity-[0.06]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M2 2h2v2H2V2z%22 fill=%22%232359A4%22 fill-opacity=%220.03%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')] opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Free Material"
          title={<>Inside the Activity Material</>}
          subtitle="Delivered free to your doorstep before the session — everything a child needs, nothing they don't."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative rounded-[2.5rem] border border-white/50 bg-[color:var(--ivory)] bg-gradient-to-br from-white to-[color:var(--ivory)] p-8 shadow-[0_20px_40px_-15px_rgba(35,89,164,0.1)] shadow-inner sm:p-12">
            <div className="relative mx-auto flex max-w-sm flex-col items-center gap-4">
              <motion.div
                initial={{ y: -14, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <GaneshaMark className="w-40 drop-shadow-md sm:w-48" />
              </motion.div>
              <div className="my-2 h-px w-3/4 bg-gradient-to-r from-transparent via-[color:var(--border)] to-transparent" />
              <motion.div
                initial={{ y: 14, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <MushakMark className="w-48 drop-shadow-md sm:w-56" />
              </motion.div>
              <span className="mt-6 rounded-full border border-white/60 bg-white px-5 py-2 text-sm font-medium text-[color:var(--muted-foreground)] shadow-sm">
                All parts pre-measured & labelled
              </span>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {parts.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-[color:var(--border)] bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-colors hover:bg-white sm:p-5"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[color:var(--brand-red)]/15 to-[color:var(--brand-red)]/5 text-[color:var(--brand-red)]">
                  <Icon className="size-6" />
                </span>
                <span className="text-sm font-medium text-foreground sm:text-base">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}