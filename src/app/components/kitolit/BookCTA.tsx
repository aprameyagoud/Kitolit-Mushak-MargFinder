import { useState } from "react";
import confetti from "canvas-confetti";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Truck,
  User,
  HeartHandshake,
  MapPin,
  Lock,
  ChevronDown,
} from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Mandala, GaneshaMark } from "./decor";

const confettiColors = ["#EE4035", "#2359A4", "#F4B400", "#FF8C00", "#10B981"];

const AGE_OPTIONS = [
  "6 Years",
  "7 Years",
  "8 Years",
  "9 Years",
  "10 Years",
  "11 Years",
  "12 Years",
  "13+ Years",
];

const POPULAR_STATES = [
  "Maharashtra",
  "Karnataka",
  "Delhi NCR",
  "Gujarat",
  "Telangana",
  "Tamil Nadu",
  "Uttar Pradesh",
  "West Bengal",
  "Rajasthan",
  "Madhya Pradesh",
  "Andhra Pradesh",
  "Kerala",
  "Other State / UT",
];

function SectionTitle({
  number,
  title,
  icon: Icon,
}: {
  number: string;
  title: string;
  icon: typeof User;
}) {
  return (
    <div className="flex items-center gap-2.5 border-b border-[#EADCC9]/80 pb-2.5">
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-red)] text-xs font-bold text-white shadow-xs">
        {number}
      </span>
      <div className="flex items-center gap-1.5">
        <Icon className="size-4 text-[color:var(--brand-red)]" />
        <h3 className="font-[family:var(--font-display)] text-base font-bold text-[#2D241E] sm:text-lg">
          {title}
        </h3>
      </div>
    </div>
  );
}

function FormInput({
  id,
  label,
  placeholder,
  type = "text",
  required = true,
  autoComplete,
  pattern,
  maxLength,
  inputMode,
  value,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  pattern?: string;
  maxLength?: number;
  inputMode?: "text" | "numeric" | "tel" | "email";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label
        htmlFor={id}
        className="text-xs font-semibold tracking-wide text-[#3E342B] sm:text-sm"
      >
        {label} {required && <span className="text-[color:var(--brand-red)]">*</span>}
      </Label>
      <input
        id={id}
        name={id}
        required={required}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        pattern={pattern}
        maxLength={maxLength}
        inputMode={inputMode}
        value={value}
        onChange={onChange}
        className="h-[48px] sm:h-[50px] w-full rounded-xl border border-[#DDCFBD] bg-white px-3.5 text-sm sm:text-base font-medium text-[#23201C] placeholder:text-[#9F9180] shadow-2xs transition-all duration-150 outline-none focus:border-[color:var(--brand-red)] focus:ring-2 focus:ring-[color:var(--brand-red)]/20"
      />
    </div>
  );
}

function BookingSuccess({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative overflow-hidden px-4 py-8 text-center sm:px-8 sm:py-12">
      <Mandala className="pointer-events-none absolute -right-16 -top-16 size-48 text-[color:var(--festive-gold)] opacity-20" />
      <div className="mx-auto flex size-18 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">
        <CheckCircle2 className="size-10" />
      </div>

      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-100/70 px-3.5 py-1 text-xs font-bold text-emerald-800">
        <Sparkles className="size-3.5" /> Seat Confirmed & Material Dispatched
      </div>

      <h3 className="mt-4 font-[family:var(--font-display)] text-2xl font-extrabold text-[#23201C] sm:text-3xl">
        Seat Successfully Reserved!
      </h3>
      <p className="mx-auto mt-2.5 max-w-md text-sm leading-relaxed text-[#6E6050] sm:text-base">
        Thank you for joining the Festive Maker family. We have received your booking details and will WhatsApp you the live session link and material tracking details shortly.
      </p>

      <div className="mx-auto mt-6 max-w-sm rounded-2xl border border-[#E7D6C1] bg-white/80 p-4 text-left shadow-2xs backdrop-blur-xs">
        <div className="flex items-center justify-between text-xs font-semibold text-[#7E6E5E]">
          <span>Booking Amount</span>
          <span className="font-bold text-emerald-700">₹2,500 Paid (All-inclusive)</span>
        </div>
        <div className="mt-2 border-t border-[#F0E5D5] pt-2 text-xs text-[#6E6050]">
          <p className="flex items-center gap-1.5 font-medium">
            <Truck className="size-3.5 text-[color:var(--brand-blue)] shrink-0" />
            DIY Eco Tech Kit being packed for dispatch
          </p>
        </div>
      </div>

      <Button
        onClick={onClose}
        className="mt-7 h-12 w-full max-w-xs rounded-xl bg-[color:var(--brand-blue)] text-base font-bold text-white shadow-md hover:bg-[color:var(--brand-blue)]/90"
      >
        Done & Close
      </Button>
    </div>
  );
}

function BookingForm({ onSubmit }: { onSubmit: () => void }) {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    address: "",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pb-2">
      {/* SECTION 1: PARENT DETAILS */}
      <div className="space-y-4 rounded-2xl border border-[#EADCC9]/80 bg-white/60 p-4 shadow-2xs sm:p-5">
        <SectionTitle number="1" title="Parent Details" icon={User} />
        
        <div className="space-y-3.5">
          <FormInput
            id="parentName"
            label="Parent's Name"
            placeholder="Enter your full name"
            required
            autoComplete="name"
            value={formData.parentName}
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <FormInput
              id="phone"
              label="Phone / WhatsApp"
              placeholder="+91 98765 43210"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              value={formData.phone}
              onChange={handleChange}
            />

            <FormInput
              id="email"
              label="Email Address"
              placeholder="you@example.com"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: CHILD DETAILS */}
      <div className="space-y-4 rounded-2xl border border-[#EADCC9]/80 bg-white/60 p-4 shadow-2xs sm:p-5">
        <SectionTitle number="2" title="Child Details" icon={HeartHandshake} />

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <FormInput
            id="childName"
            label="Child's Name"
            placeholder="Enter child's name"
            required
            autoComplete="off"
            value={formData.childName}
            onChange={handleChange}
          />

          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="childAge"
              className="text-xs font-semibold tracking-wide text-[#3E342B] sm:text-sm"
            >
              Child's Age <span className="text-[color:var(--brand-red)]">*</span>
            </Label>
            <div className="relative">
              <select
                id="childAge"
                name="childAge"
                required
                value={formData.childAge}
                onChange={handleChange}
                className="h-[48px] sm:h-[50px] w-full appearance-none rounded-xl border border-[#DDCFBD] bg-white px-3.5 pr-10 text-sm sm:text-base font-medium text-[#23201C] shadow-2xs transition-all duration-150 outline-none focus:border-[color:var(--brand-red)] focus:ring-2 focus:ring-[color:var(--brand-red)]/20"
              >
                <option value="" disabled>
                  Select age
                </option>
                {AGE_OPTIONS.map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-[#7E6E5E] opacity-70" />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: DELIVERY DETAILS */}
      <div className="space-y-4 rounded-2xl border border-[#EADCC9]/80 bg-white/60 p-4 shadow-2xs sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <SectionTitle number="3" title="Delivery Details" icon={MapPin} />
          <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-500/20 sm:self-auto">
            <Truck className="size-3.5 text-emerald-600 shrink-0" />
            <span>Free Delivery Included</span>
          </div>
        </div>

        <div className="space-y-3.5">
          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="address"
              className="text-xs font-semibold tracking-wide text-[#3E342B] sm:text-sm"
            >
              Full Address <span className="text-[color:var(--brand-red)]">*</span>
            </Label>
            <textarea
              id="address"
              name="address"
              required
              rows={2}
              placeholder="Flat / House No., Building, Street, Area"
              autoComplete="street-address"
              value={formData.address}
              onChange={handleChange}
              className="min-h-[58px] w-full resize-none rounded-xl border border-[#DDCFBD] bg-white p-3 text-sm sm:text-base font-medium text-[#23201C] placeholder:text-[#9F9180] shadow-2xs transition-all duration-150 outline-none focus:border-[color:var(--brand-red)] focus:ring-2 focus:ring-[color:var(--brand-red)]/20"
            />
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            <FormInput
              id="city"
              label="City"
              placeholder="Mumbai"
              required
              autoComplete="address-level2"
              value={formData.city}
              onChange={handleChange}
            />

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="state"
                className="text-xs font-semibold tracking-wide text-[#3E342B] sm:text-sm"
              >
                State <span className="text-[color:var(--brand-red)]">*</span>
              </Label>
              <div className="relative">
                <select
                  id="state"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className="h-[48px] sm:h-[50px] w-full appearance-none rounded-xl border border-[#DDCFBD] bg-white px-3.5 pr-10 text-sm sm:text-base font-medium text-[#23201C] shadow-2xs transition-all duration-150 outline-none focus:border-[color:var(--brand-red)] focus:ring-2 focus:ring-[color:var(--brand-red)]/20"
                >
                  {POPULAR_STATES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-[#7E6E5E] opacity-70" />
              </div>
            </div>

            <FormInput
              id="pincode"
              label="PIN Code"
              placeholder="400001"
              required
              pattern="[0-9]{6}"
              maxLength={6}
              inputMode="numeric"
              autoComplete="postal-code"
              value={formData.pincode}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* PRICE SUMMARY & CTA SECTION */}
      <div className="space-y-3.5 rounded-2xl border border-[color:var(--festive-gold)]/50 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-red-500/10 p-4 sm:p-5 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--festive-orange)]">
              Workshop Fee
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-medium text-[#8A7D6C] line-through">₹2999</span>
              <span className="font-[family:var(--font-display)] text-3xl sm:text-4xl font-extrabold text-[color:var(--brand-red)]">
                ₹2500
              </span>
              <span className="rounded-full bg-[color:var(--brand-red)] px-2 py-0.5 text-[11px] font-extrabold text-white">
                SAVE ₹499
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-extrabold text-emerald-800">
              <Truck className="size-3.5 text-emerald-600" /> FREE Home Delivery
            </span>
            <p className="mt-1 text-[11px] font-medium text-[#7E6E5E]">
              Includes full DIY kit + Live session
            </p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <Button
          type="submit"
          className="h-[52px] w-full rounded-xl bg-gradient-to-r from-[color:var(--brand-red)] via-[#E02E24] to-[#C81E15] text-base sm:text-lg font-bold text-white shadow-lg shadow-[color:var(--brand-red)]/25 transition-all duration-200 hover:brightness-110 active:scale-[0.99]"
        >
          <Lock className="size-4.5 shrink-0" />
          <span>BOOK & PAY NOW • ₹2500</span>
        </Button>

        {/* TRUST REASSURANCE */}
        <div className="flex flex-col items-center justify-center gap-1.5 pt-1 text-center text-xs text-[#7E6E5E]">
          <div className="flex flex-wrap items-center justify-center gap-2 font-medium text-[#5D5043]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="size-4 text-emerald-600" /> 100% Secure Payment
            </span>
            <span>•</span>
            <span>UPI / Cards / NetBanking</span>
            <span>•</span>
            <span>Instant WhatsApp Confirmation</span>
          </div>
        </div>
      </div>
    </form>
  );
}

export function BookButton({
  className = "",
  size = "lg",
  label = "Book the Workshop",
}: {
  className?: string;
  size?: "lg" | "default";
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  const handleBookingSubmit = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.4 },
      colors: confettiColors,
    });
    setDone(true);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setDone(false);
      }}
    >
      <DialogTrigger asChild>
        <Button
          size={size}
          className={`rounded-full h-auto min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_rgba(238,64,53,0.6)] hover:bg-primary hover:brightness-105 hover:-translate-y-0.5 transition-all cursor-pointer ${className}`}
        >
          <Sparkles className="size-5 shrink-0" />
          {label}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-h-[94vh] w-full max-w-[calc(100%-1.5rem)] sm:max-w-xl md:max-w-2xl rounded-3xl border border-[#EADCC9] bg-[color:var(--ivory)] p-0 shadow-2xl overflow-hidden">
        <ScrollArea className="max-h-[92vh] px-4 py-5 sm:px-8 sm:py-7 overflow-y-auto">
          {!done ? (
            <div className="space-y-6">
              <DialogHeader className="relative space-y-1.5 text-left border-b border-[#EADCC9]/70 pb-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-festive-gold/25 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[color:var(--festive-orange)]">
                    🪔 Hands-on Maker Series
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                    Free Delivery
                  </span>
                </div>
                <DialogTitle className="font-[family:var(--font-display)] text-2xl sm:text-3xl font-extrabold tracking-tight text-[#23201C]">
                  BOOK YOUR GANESHA WORKSHOP
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm font-medium text-[#6E6050]">
                  Live guided online session • Activity material delivered free to your home • Ages 6–13
                </DialogDescription>
              </DialogHeader>

              <BookingForm onSubmit={handleBookingSubmit} />
            </div>
          ) : (
            <BookingSuccess onClose={() => setOpen(false)} />
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
