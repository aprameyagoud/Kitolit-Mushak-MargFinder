import { motion } from "motion/react";
import { Hammer, Package, PartyPopper, Route, CircuitBoard, ScanLine } from "lucide-react";
import { SectionHeading } from "../decor";

const steps = [
  { icon: Package, title: "Unbox the material", description: "Lay out the labelled parts with your child before class." },
  { icon: Route, title: "Join live", description: "Hop onto the guided video session with our instructor." },
  { icon: Hammer, title: "Build Eco Tech Ganesha", description: "Assemble and paint your Eco Tech Ganesha, step by step." },
  { icon: CircuitBoard, title: "Build Magical MushakBot", description: "Snap together the Magical MushakBot companion — easy, child-safe assembly." },
  { icon: ScanLine, title: "Spark the Magic", description: "Watch your Magical MushakBot magically guide its path for the first time." },
  { icon: PartyPopper, title: "Celebrate!", description: "Show off your Eco Tech Ganesha and Magical MushakBot to the whole family." },
];

export function Journey() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="The Journey"
        title={<>Watch It Take Shape — Step by Step</>}
        subtitle="Start with simple pieces.
Put them together.
See your Ganesha come alive."
      />
      <ol className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <motion.li
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative rounded-[2rem] border border-[color:var(--border)] bg-gradient-to-br from-white to-[#FFF9F2] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-transform hover:-translate-y-1"
          >
            <span className="absolute -top-5 left-8 grid size-12 place-items-center rounded-full bg-gradient-to-br from-[color:var(--brand-blue)] to-[#1a4078] font-[family:var(--font-display)] text-xl font-bold text-white shadow-lg ring-4 ring-white">
              {index + 1}
            </span>
            <div className="mt-4 inline-flex rounded-xl bg-festive-gold/15 p-3 text-[color:var(--festive-orange)]">
              <Icon className="size-8" />
            </div>
            <h3 className="mt-5 text-xl font-[family:var(--font-display)] font-bold text-foreground">{title}</h3>
            <p className="mt-2 leading-relaxed text-[color:var(--muted-foreground)]">{description}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}