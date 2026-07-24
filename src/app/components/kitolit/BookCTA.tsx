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
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CheckCircle2, Sparkles } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

type BookingFieldConfig = {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "tel" | "number";
  autoComplete?: string;
  min?: number;
  max?: number;
  pattern?: string;
};

const confettiColors = ["#EE4035", "#2359A4", "#F4B400", "#FF8C00"];

const contactFields: BookingFieldConfig[] = [
  { id: "pname", label: "Parent's Name", placeholder: "Priya Sharma", type: "text", autoComplete: "name" },
  { id: "phone", label: "Phone / WhatsApp", placeholder: "+91 98765 43210", type: "tel", autoComplete: "tel" },
  { id: "cage", label: "Child's Age", placeholder: "9", type: "number", min: 6, max: 13, autoComplete: "off" },
];

const deliveryFields: BookingFieldConfig[] = [
  { id: "address", label: "Full Address", placeholder: "Flat, Building, Street", type: "text", autoComplete: "street-address" },
  { id: "city", label: "City", placeholder: "Mumbai", type: "text", autoComplete: "address-level2" },
  { id: "state", label: "State", placeholder: "Maharashtra", type: "text", autoComplete: "address-level1" },
  { id: "pincode", label: "PIN Code", placeholder: "400001", type: "text", pattern: "[0-9]{6}", autoComplete: "postal-code" },
];

function BookingField({ id, label, placeholder, type, autoComplete, min, max, pattern }: BookingFieldConfig) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        required
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        min={min}
        max={max}
        pattern={pattern}
        className="h-12 rounded-xl bg-white"
      />
    </div>
  );
}

function BookingSuccess({ onClose }: { onClose: () => void }) {
  return (
    <div className="py-10 text-center">
      <CheckCircle2 className="mx-auto size-20 text-[color:var(--brand-blue)]" />
      <h3 className="mt-5 text-3xl font-[family:var(--font-display)] font-bold text-foreground">Seat reserved!</h3>
      <p className="mt-3 text-lg leading-relaxed text-[color:var(--muted-foreground)]">
        Our team will WhatsApp you the batch schedule and activity material delivery details shortly.
      </p>
      <Button onClick={onClose} className="mt-8 rounded-full bg-secondary px-10 py-6 text-lg font-bold text-secondary-foreground">
        Done
      </Button>
    </div>
  );
}

function BookingForm({ onSubmit }: { onSubmit: () => void }) {
  return (
    <form
      className="mt-6 space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <div className="space-y-5">
        {contactFields.map((field) => (
          <BookingField key={field.id} {...field} />
        ))}
      </div>

      <fieldset className="space-y-3 pt-2">
        <legend className="border-b border-[color:var(--border)] pb-1 font-semibold text-foreground">
          Delivery Details
        </legend>

        <div className="space-y-5">
          <BookingField {...deliveryFields[0]} />

          <div className="grid grid-cols-2 gap-4">
            <BookingField {...deliveryFields[1]} />
            <BookingField {...deliveryFields[2]} />
          </div>

          <BookingField {...deliveryFields[3]} />
        </div>
      </fieldset>

      <div className="pt-4">
        <Button type="submit" className="h-auto w-full rounded-full bg-primary py-4 text-xl font-bold text-primary-foreground shadow-md hover:brightness-105">
          Confirm & Pay ₹2,500
        </Button>
        <p className="mt-3 text-center text-xs text-[color:var(--muted-foreground)]">
          🎉 Limited seats per batch — free material shipping included
        </p>
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

  const fire = () => {
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.35 }, colors: confettiColors });
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
          className={`rounded-full h-auto px-8 py-4 text-lg bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_rgba(238,64,53,0.6)] hover:bg-primary hover:brightness-105 hover:-translate-y-0.5 transition-all ${className}`}
        >
          <Sparkles className="size-5" />
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-3xl border-0 bg-[color:var(--ivory)] sm:max-w-md p-0 overflow-hidden">
        <ScrollArea className="max-h-[90vh] px-6 py-6 sm:max-h-none sm:px-6 sm:py-6 overflow-y-auto">
          {!done ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-[family:var(--font-display)]">Reserve your child's seat</DialogTitle>
                <DialogDescription className="text-base">
                  Live online session • Free activity material delivered to your home • Ages 6–13
                </DialogDescription>
              </DialogHeader>
              <BookingForm onSubmit={fire} />
            </>
          ) : (
            <BookingSuccess onClose={() => setOpen(false)} />
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
