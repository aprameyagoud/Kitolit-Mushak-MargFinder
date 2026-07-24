import { motion } from "motion/react";
import type { ReactNode } from "react";

/* Subtle mandala-inspired concentric pattern used as soft background decoration */
export function Mandala({ className = "", spin = false }: { className?: string; spin?: boolean }) {
  const petals = Array.from({ length: 16 });
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      animate={spin ? { rotate: 360 } : undefined}
      transition={spin ? { repeat: Infinity, ease: "linear", duration: 90 } : undefined}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="100" cy="100" r="30" />
        <circle cx="100" cy="100" r="52" />
        <circle cx="100" cy="100" r="74" />
        <circle cx="100" cy="100" r="96" strokeDasharray="2 6" />
        {petals.map((_, i) => (
          <g key={i} transform={`rotate(${(360 / petals.length) * i} 100 100)`}>
            <path d="M100 8 C112 34 112 50 100 62 C88 50 88 34 100 8 Z" />
            <circle cx="100" cy="70" r="3" fill="currentColor" stroke="none" />
          </g>
        ))}
      </g>
    </motion.svg>
  );
}

/* Playful festive Ganesha illustration built from primitive shapes (non-religious, toy-like) */
export function GaneshaMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 180" className={className} aria-hidden="true">
      {/* wooden body */}
      <ellipse cx="80" cy="128" rx="46" ry="44" fill="#C98A4B" />
      <ellipse cx="80" cy="128" rx="46" ry="44" fill="url(#woodG)" opacity="0.35" />
      {/* belt */}
      <rect x="34" y="120" width="92" height="14" rx="7" fill="#EE4035" />
      <circle cx="80" cy="127" r="6" fill="#F4B400" />
      {/* head */}
      <ellipse cx="80" cy="66" rx="40" ry="38" fill="#D89A5A" />
      {/* ears */}
      <ellipse cx="34" cy="66" rx="13" ry="20" fill="#EE4035" />
      <ellipse cx="126" cy="66" rx="13" ry="20" fill="#EE4035" />
      {/* crown */}
      <path d="M52 34 L64 12 L80 30 L96 12 L108 34 Z" fill="#F4B400" />
      <circle cx="80" cy="16" r="5" fill="#FF8C00" />
      {/* eyes */}
      <circle cx="66" cy="60" r="4" fill="#2359A4" />
      <circle cx="94" cy="60" r="4" fill="#2359A4" />
      {/* trunk */}
      <path d="M80 66 q4 22 -6 34 q-10 12 4 20" fill="none" stroke="#C98A4B" strokeWidth="12" strokeLinecap="round" />
      {/* tilak */}
      <path d="M80 40 v14" stroke="#EE4035" strokeWidth="3" strokeLinecap="round" />
      <defs>
        <linearGradient id="woodG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8a5a2b" stopOpacity="0" />
          <stop offset="1" stopColor="#8a5a2b" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Playful line-following electronic Mushak (mouse) illustration */
export function MushakMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true">
      <ellipse cx="80" cy="96" rx="30" ry="8" fill="#2359A4" opacity="0.12" />
      {/* body / chassis */}
      <rect x="34" y="52" width="92" height="34" rx="17" fill="#8a5a2b" />
      <rect x="34" y="52" width="92" height="34" rx="17" fill="url(#woodM)" opacity="0.3" />
      {/* head */}
      <circle cx="118" cy="64" r="20" fill="#C98A4B" />
      {/* ears */}
      <circle cx="112" cy="46" r="9" fill="#EE4035" />
      <circle cx="128" cy="48" r="7" fill="#F4B400" />
      {/* eye + nose */}
      <circle cx="124" cy="62" r="3" fill="#2359A4" />
      <circle cx="136" cy="66" r="3" fill="#FF8C00" />
      {/* wheels */}
      <circle cx="54" cy="88" r="10" fill="#23201c" />
      <circle cx="54" cy="88" r="4" fill="#F4B400" />
      <circle cx="96" cy="88" r="10" fill="#23201c" />
      <circle cx="96" cy="88" r="4" fill="#F4B400" />
      {/* sensor light */}
      <circle cx="46" cy="60" r="4" fill="#EE4035" />
      {/* tail */}
      <path d="M34 68 q-22 4 -26 -14" fill="none" stroke="#C98A4B" strokeWidth="5" strokeLinecap="round" />
      {/* line being followed */}
      <path d="M4 108 q40 -10 80 0 q40 10 72 0" fill="none" stroke="#2359A4" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 10" />
      <defs>
        <linearGradient id="woodM" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.25" />
          <stop offset="1" stopColor="#5a3a1b" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`text-center max-w-2xl mx-auto ${className}`}>
      {eyebrow && (
        <span className="inline-block mb-3 rounded-full bg-festive-gold/20 text-[color:var(--festive-orange)] px-4 py-1.5 text-sm tracking-wide uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(1.75rem,5vw,2.75rem)] leading-tight text-foreground">{title}</h2>
      {subtitle && <p className="mt-4 text-[color:var(--muted-foreground)] text-lg">{subtitle}</p>}
    </div>
  );
}
