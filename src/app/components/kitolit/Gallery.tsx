import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SectionHeading } from "./decor";

const photos = [
  { src: "https://images.unsplash.com/photo-1780751987564-79489283d67b?w=800&h=1000&fit=crop&auto=format", alt: "Children painting figures in a craft class", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1551401107-5d806c2909a6?w=800&h=600&fit=crop&auto=format", alt: "Child painting with a brush" },
  { src: "https://images.unsplash.com/photo-1597933471507-1ca5765185d8?w=800&h=600&fit=crop&auto=format", alt: "Boy joining a live online class on a laptop" },
  { src: "https://images.unsplash.com/photo-1756694915450-50c9796fb96d?w=800&h=1000&fit=crop&auto=format", alt: "Children happily crafting together", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1711840083711-1926d91eb9e1?w=800&h=600&fit=crop&auto=format", alt: "Hands working on a craft project" },
  { src: "https://images.unsplash.com/photo-1531237848491-c44ca4736f27?w=800&h=600&fit=crop&auto=format", alt: "Child holding a paintbrush" },
  { src: "https://images.unsplash.com/photo-1623076189461-f7706b741c04?w=800&h=600&fit=crop&auto=format", alt: "Girl learning online at home" },
  { src: "https://images.unsplash.com/photo-1560831340-b9679dc9e9f0?w=800&h=600&fit=crop&auto=format", alt: "Group of children around a craft table" },
];

export function Gallery() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#FFF9F2] py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M20 20.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z%22 fill=%22%23EE4035%22 fill-opacity=%220.08%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')] opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Real Smiles"
          title={<>Kids building. Families beaming.</>}
          subtitle="A peek at young makers bringing their Ganesha and Mushak to life."
        />
        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-muted shadow-md ring-1 ring-black/5 ${p.span ?? ""}`}
            >
              <ImageWithFallback
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--brand-blue)]/25 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
