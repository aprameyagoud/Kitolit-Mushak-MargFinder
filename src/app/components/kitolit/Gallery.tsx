import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SectionHeading } from "./decor";

const photos = [
  { src: "/images/gallery_1.png", alt: "Young Indian girl painting her Eco Tech Ganesha idol with vibrant colors", span: "row-span-2" },
  { src: "/images/gallery_2.png", alt: "Indian boy following live guided online workshop on his laptop", span: "" },
  { src: "/images/gallery_3.png", alt: "Indian siblings assembling their Eco Tech Ganesha kit together", span: "" },
  { src: "/images/gallery_4.png", alt: "Proud Indian girl showing her completed Magical MushakBot companion", span: "row-span-2" },
  { src: "/images/gallery_5.png", alt: "Close-up of child painting intricate festive details on Eco Tech Ganesha", span: "" },
  { src: "/images/gallery_6.png", alt: "Mother and child unboxing the festive activity kit", span: "" },
  { src: "/images/gallery_7.png", alt: "Young girl following interactive live video session on tablet", span: "" },
  { src: "/images/video_thumb.png", alt: "Group of happy Indian children crafting together during the session", span: "" },
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
