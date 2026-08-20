import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Footer() {
  return (
    <footer className="w-full bg-[#FFF9F2] py-12 px-5 border-t border-[#2359A4]/10 mt-12 sm:mt-24">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/">
            <ImageWithFallback
              src="/images/logos/kitolit_logo_horizontal.png"
              alt="Kitolit Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-[color:var(--muted-foreground)] text-center md:text-left max-w-xs leading-relaxed">
            Kitolit Robotics & AI<br />
            Hyderabad, India<br />
            <a href="mailto:support@kitolit.com" className="hover:text-[color:var(--brand-blue)] transition-colors">support@kitolit.com</a><br />
            <a href="tel:+919110582315" className="hover:text-[color:var(--brand-blue)] transition-colors">+91 9110582315</a>
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground text-sm tracking-wider uppercase mb-1">Company</h4>
            <Link to="/about" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--brand-blue)] transition-colors text-sm font-medium">About Kitolit</Link>
            <Link to="/contact" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--brand-blue)] transition-colors text-sm font-medium">Contact Us</Link>
            <Link to="/faq" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--brand-blue)] transition-colors text-sm font-medium">FAQ</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground text-sm tracking-wider uppercase mb-1">Legal</h4>
            <Link to="/privacy-policy" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--brand-blue)] transition-colors text-sm font-medium">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--brand-blue)] transition-colors text-sm font-medium">Terms & Conditions</Link>
            <Link to="/cancellation-refund-policy" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--brand-blue)] transition-colors text-sm font-medium">Cancellation & Refund Policy</Link>
            <Link to="/shipping-policy" className="text-[color:var(--muted-foreground)] hover:text-[color:var(--brand-blue)] transition-colors text-sm font-medium">Shipping Policy</Link>
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-6xl mt-12 pt-6 border-t border-[#2359A4]/10 text-center text-xs text-[color:var(--muted-foreground)]">
        &copy; {new Date().getFullYear()} Kitolit Robotics & AI. All rights reserved.
      </div>
    </footer>
  );
}
