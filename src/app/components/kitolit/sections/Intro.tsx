import { motion } from "motion/react";
import { Hammer, Cpu, Palette } from "lucide-react";
import { SectionHeading } from "../decor";

const introCards = [
  { icon: Palette, title: "Craft & Create", description: "Assemble and decorate a handcrafted Eco Tech Ganesha." },
  { icon: Cpu, title: "Bring to Life", description: "Assemble a friendly, interactive Magical MushakBot companion." },
  { icon: Hammer, title: "Build Confidence", description: "Follow along live and finish something real, together." },
];

export function Intro() {
  return (
    <section className="relative mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <SectionHeading
        eyebrow="What is it?"
        title={<>One joyful session. Two things they'll be proud of.</>}
        subtitle="Guidance from Kitolit's instructors over a live video session — no experience needed. Parents just help unbox; kids do the making."
      />
      <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-3">
        {introCards.map(({ icon: Icon, title, description }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] border border-[color:var(--border)] bg-gradient-to-b from-white to-[#FFF9F2] p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30px_rgb(238,64,53,0.08)]"
          >
            <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-festive-gold/30 to-festive-orange/20 text-[color:var(--festive-orange)] shadow-inner">
              <Icon className="size-8" />
            </div>
            <h3 className="mt-5 text-2xl font-[family:var(--font-display)] font-bold text-foreground">{title}</h3>
            <p className="mt-3 leading-relaxed text-[color:var(--muted-foreground)]">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}