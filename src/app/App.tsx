import { useRef, useState, useEffect } from "react";
import { Hero } from "./components/kitolit/Hero";
import { Intro, VideoPlaceholder, MaterialContents, Journey } from "./components/kitolit/Sections";
import { Gallery } from "./components/kitolit/Gallery";
import { Pricing } from "./components/kitolit/Pricing";
import { FAQ } from "./components/kitolit/FAQ";
import { FinalCTA } from "./components/kitolit/FinalCTA";
import { BookButton } from "./components/kitolit/BookCTA";
import { Footer } from "./components/kitolit/Footer";
import { Routes, Route } from "react-router";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQPage } from "./pages/FAQPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";
import { CancellationRefundPage } from "./pages/CancellationRefundPage";
import { ShippingPolicyPage } from "./pages/ShippingPolicyPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function LandingPage() {
  // Ref attached to the Hero CTA wrapper — observed to show/hide the sticky bar
  const heroCTARef = useRef<HTMLDivElement>(null);

  // true  → Hero CTA is fully scrolled off-screen → show sticky bar
  // false → Hero CTA is visible (even partially) → hide sticky bar
  const [stickyVisible, setStickyVisible] = useState(false);

  // Bump this key each time the sticky bar appears to re-trigger the pulse animation
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    const el = heroCTARef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const heroCTAInView = entry.isIntersecting;

        if (!heroCTAInView) {
          // Hero CTA has fully scrolled off-screen → show sticky bar and pulse
          setStickyVisible((prev) => {
            if (!prev) setPulseKey((k) => k + 1); // only bump when transitioning hidden→visible
            return true;
          });
        } else {
          // Hero CTA is (partially) back in view → hide sticky bar immediately
          setStickyVisible(false);
        }
      },
      {
        // threshold: 0 → fires the moment any pixel enters or exits the viewport.
        // Combined with isIntersecting=false this means the element has fully left.
        threshold: 0,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground antialiased pb-24 sm:pb-0">
      <main>
        <Hero heroCTARef={heroCTARef} />
        <VideoPlaceholder />
        <Intro />
        <MaterialContents />
        <Journey />
        <Gallery />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      {/* Mobile sticky CTA — only visible when Hero CTA is fully out of viewport.
          Hidden on sm+ breakpoints (same as before). No layout shift: always
          rendered but translated off-screen when not active.
          The nav element stays mounted so the CSS slide-out transition works.
          The inner wrapper re-mounts each time the bar appears (via key) to
          replay the one-shot pulse animation cleanly. */}
      <nav
        aria-label="Quick booking"
        aria-hidden={!stickyVisible}
        className={[
          "fixed bottom-0 left-0 right-0 z-50 flex justify-center",
          "border-t border-slate-200 bg-white/90 p-3",
          "shadow-[0_-10px_20px_rgba(0,0,0,0.05)] backdrop-blur-md",
          "sm:hidden",
          "transition-transform duration-300 ease-in-out",
          stickyVisible ? "translate-y-0" : "translate-y-full pointer-events-none",
        ].join(" ")}
      >
        {/* key forces a remount each appearance so sticky-cta-pulse reruns */}
        <div key={pulseKey} className={stickyVisible ? "w-full sticky-cta-pulse" : "w-full"}>
          <BookButton className="w-full min-h-[48px] py-3 text-base shadow-lg" />
        </div>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-and-conditions" element={<TermsPage />} />
      <Route path="/cancellation-refund-policy" element={<CancellationRefundPage />} />
      <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
