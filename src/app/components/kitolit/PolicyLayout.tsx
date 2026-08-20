import { ReactNode, useEffect } from "react";
import { Footer } from "./Footer";
import { Link, useLocation } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface PolicyLayoutProps {
  title: string;
  children: ReactNode;
}

export function PolicyLayout({ title, children }: PolicyLayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#23201c] font-[family:var(--font-body)] flex flex-col">
      <header className="w-full border-b border-[#2359A4]/10 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto max-w-4xl px-5 py-4 flex items-center justify-between">
          <Link to="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
            <ImageWithFallback
              src="/images/logos/kitolit_logo_horizontal.png"
              alt="Kitolit Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>
          <Link to="/" className="text-sm font-medium text-[color:var(--brand-blue)] hover:underline">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 w-full mx-auto max-w-4xl px-5 py-12 md:py-20">
        <h1 className="font-[family:var(--font-display)] text-3xl md:text-5xl font-bold text-foreground mb-8 md:mb-12 tracking-tight">
          {title}
        </h1>
        <div className="prose prose-slate max-w-none prose-headings:font-[family:var(--font-display)] prose-headings:font-semibold prose-a:text-[color:var(--brand-blue)] prose-a:no-underline hover:prose-a:underline prose-p:leading-relaxed prose-p:text-[color:var(--muted-foreground)]">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
