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
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground antialiased pb-24 sm:pb-0">
      <main>
        <Hero />
        <Intro />
        <VideoPlaceholder />
        <MaterialContents />
        <Journey />
        <Gallery />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      <nav aria-label="Quick booking" className="fixed bottom-0 left-0 right-0 z-50 flex justify-center border-t border-slate-200 bg-white/90 p-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] backdrop-blur-md sm:hidden">
        <BookButton className="w-full min-h-[48px] py-3 text-base shadow-lg" />
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
