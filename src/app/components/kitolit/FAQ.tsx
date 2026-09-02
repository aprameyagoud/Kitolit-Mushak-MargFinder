import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { SectionHeading } from "./decor";

const faqs = [
  {
    q: "What age group is this for?",
    a: "The workshop is designed for children aged 6+. 6-8 Year children can join with light parental help during unboxing.",
  },
  {
    q: "Is it really online and live?",
    a: "Yes — it's a live, instructor-led group video session. Your child builds alongside the instructor in real time. We will give a pre-recorded video in case the child misses the live class.",
  },
  {
    q: "What happens if the child misses the live session?",
    a: "We will provide a pre-recorded video of the session so the child can build along at their own pace.",
  },
  {
    q: "Do we need to buy anything else?",
    a: "No. All essential parts — Eco Tech Ganesha pieces, Magical MushakBot companion parts, and craft assembly accessories — arrive in the activity material box before class. Delivery is ₹199, included in the final checkout amount.",
  },
  {
    q: "Is any prior building or technical experience needed?",
    a: "Not at all. The Magical MushakBot uses snap-together, beginner-friendly parts designed for easy assembly with no prior experience needed.",
  },
  {
    q: "When will the material arrive?",
    a: "We ship the activity material to your home a few days before your chosen batch so you're ready on the day. Delivery charges (₹199) are included in the final checkout amount.",
  },
  {
    q: "What if my child needs help during the session?",
    a: "Batches are kept small so our instructors can provide individual attention and pause to help when needed.",
  },
];

export function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-5 py-20 sm:py-24">
      <SectionHeading eyebrow="Questions" title={<>Quick answers for parents</>} className="mb-10 sm:mb-12 px-2" />
      <Accordion type="single" collapsible className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
        {faqs.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`item-${i}`}
            className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white px-5 sm:px-6 py-1.5 sm:py-2 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-shadow hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)]"
          >
            <AccordionTrigger className="text-left font-[family:var(--font-display)] text-lg sm:text-xl font-medium text-foreground hover:no-underline hover:text-[color:var(--brand-red)] py-4">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-base sm:text-lg text-[color:var(--muted-foreground)] leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
