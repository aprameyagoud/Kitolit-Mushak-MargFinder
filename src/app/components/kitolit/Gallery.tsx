import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SectionHeading } from "./decor";

const photos = [
  { src: "/images/gallery_1.jpg", alt: "Young Indian child happily assembling the physical Eco Tech Ganesha craft", span: "row-span-2" },
  { src: "/images/gallery_2.jpg", alt: "Indian child joyfully playing with the Magical MushakBot robot toy", span: "" },
  { src: "/images/gallery_3.jpg", alt: "Smiling Indian girl proudly holding her assembled Eco Tech Ganesha", span: "" },
  { src: "/images/gallery_4.jpg", alt: "Joyful Indian boy proudly showing his completed Magical MushakBot", span: "row-span-2" },
  { src: "/images/gallery_5.jpg", alt: "Indian parent and child bonding while assembling the Ganesha kit", span: "" },
  { src: "/images/gallery_6.jpg", alt: "Child following an online guided workshop while building the craft", span: "" },
  { src: "/images/gallery_7.jpg", alt: "Close-up of child's hands assembling the Magical MushakBot components", span: "" },
  { src: "/images/gallery_8.jpg", alt: "Happy Indian family celebrating their completed festive craft creations", span: "" },
];

export function Gallery() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#FFF9F2] py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M20 20.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z%22 fill=%22%23EE4035%22 fill-opacity=%220.08%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')] opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Real Smiles"
          title={<>Kids building. Families beaming.</>}
          subtitle="A peek at young makers bringing their Eco Tech Ganesha and Magical MushakBot to life."
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
