import { useState, useEffect, useRef } from "react";
import {
  WORDPRESS_FORM_URL,
  TRUSTED_MESSAGE_ORIGINS,
  EXPECTED_MESSAGE_TYPES,
  IFRAME_HEIGHT_LIMITS,
} from "../../config/siteConfig";
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
  XCircle,
  AlertTriangle,
  Loader2,
  ArrowLeft,
  Home,
  CreditCard,
  RotateCcw,
} from "lucide-react";
import { Mandala } from "./decor";

//razorpay
type RazorpayResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme?: {
    color: string;
  };
  handler: (response: RazorpayResponse) => void;
  modal?: {
    ondismiss?: () => void;
  };
};

type RazorpayInstance = {
  open: () => void;
  on: (
    event: string,
    callback: (response: { error?: unknown }) => void
  ) => void;
};

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}
//razorpayending

const confettiColors = ["#EE4035", "#2359A4", "#F4B400", "#FF8C00", "#10B981"];

export type BookingFormData = {
  parentName: string;
  phone: string;
  email: string;
  childName: string;
  childAge: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
};

export type BookingState =
  | "form"
  | "checkout"
  | "preparing"
  | "processing"
  | "success"
  | "failed"
  | "incomplete";

const AGE_OPTIONS = [
  { label: "6 Years", value: "6" },
  { label: "7 Years", value: "7" },
  { label: "8 Years", value: "8" },
  { label: "9 Years", value: "9" },
  { label: "10 Years", value: "10" },
  { label: "11 Years", value: "11" },
  { label: "12 Years", value: "12" },
  { label: "13+ Years", value: "13" },
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

/* ─────────────────────────────────────────────
   STATE: checkout (price breakdown before payment)
   ───────────────────────────────────────────── */
function CheckoutSummary({ onProceed }: { onProceed: () => void }) {
  return (
    <div className="flex flex-col items-center px-4 py-6 text-center sm:px-6 sm:py-8">
      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-blue-50 text-[color:var(--brand-blue)] shadow-inner">
        <CreditCard className="size-7" />
      </div>

      <h3 className="mt-4 font-[family:var(--font-display)] text-2xl font-extrabold text-[#23201C]">
        Order Summary
      </h3>
      <p className="mx-auto mt-1 max-w-sm text-xs sm:text-sm leading-relaxed text-[#6E6050]">
        Review your booking details before payment.
      </p>

      {/* Price breakdown card */}
      <div className="mx-auto mt-5 w-full max-w-sm rounded-2xl border border-[#E7D6C1] bg-white p-4 sm:p-5 text-left shadow-md">
        <div className="space-y-3 text-sm sm:text-base">
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#5E5246]">Workshop Price</span>
            <span className="font-semibold text-[#23201C]">₹1,500</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#5E5246]">Delivery</span>
            <span className="font-semibold text-[#23201C]">₹199</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#5E5246]">GST</span>
            <span className="font-semibold text-[#23201C]">18% applicable</span>
          </div>

          <div className="border-t-2 border-dashed border-[#E7D6C1] pt-3 mt-1">
            <div className="flex items-center justify-between">
              <span className="font-[family:var(--font-display)] text-lg font-extrabold text-[#23201C]">Final Payable</span>
              <span className="font-[family:var(--font-display)] text-2xl font-extrabold text-[color:var(--brand-red)]">₹2,000</span>
            </div>
          </div>
        </div>

        <p className="mt-3 text-[11px] leading-relaxed text-[#8A7D6C] text-center">
          Final checkout amount includes delivery and applicable GST. Final amount rounded to ₹2,000.
        </p>
      </div>

      <Button
        onClick={onProceed}
        className="mt-6 h-12 w-full max-w-sm rounded-xl bg-[color:var(--brand-red)] text-base font-bold text-white shadow-lg hover:bg-[color:var(--brand-red)]/90 cursor-pointer transition-all hover:-translate-y-0.5"
      >
        <Lock className="size-4 shrink-0" />
        Proceed to Pay ₹2,000
      </Button>

      <div className="mt-3 flex items-center gap-2 text-xs font-medium text-[#7E6E5E]">
        <ShieldCheck className="size-4 text-emerald-600" />
        <span>256-bit SSL encrypted • Powered by Razorpay</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STATE: preparing
   ───────────────────────────────────────────── */
function PreparingPayment() {
  return (
    <div className="flex flex-col items-center px-4 py-8 text-center sm:px-8 sm:py-10">
      <div className="relative mx-auto flex size-16 items-center justify-center rounded-2xl bg-blue-50 shadow-inner">
        <Loader2 className="size-8 animate-spin text-[color:var(--brand-blue)]" />
      </div>

      <h3 className="mt-5 font-[family:var(--font-display)] text-xl font-extrabold text-[#23201C] sm:text-2xl">
        Preparing secure payment
      </h3>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[#6E6050]">
        Please wait while we connect you to our secure payment gateway.
      </p>

      <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#7E6E5E]">
        <ShieldCheck className="size-4 text-emerald-600" />
        <span>256-bit SSL encrypted</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STATE: processing
   ───────────────────────────────────────────── */
function ProcessingPayment() {
  return (
    <div className="flex flex-col items-center px-4 py-8 text-center sm:px-8 sm:py-10">
      <div className="relative mx-auto flex size-16 items-center justify-center rounded-2xl bg-amber-50 shadow-inner">
        <Loader2 className="size-8 animate-spin text-[color:var(--festive-orange)]" />
      </div>

      <h3 className="mt-5 font-[family:var(--font-display)] text-xl font-extrabold text-[#23201C] sm:text-2xl">
        Confirming your payment...
      </h3>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[#6E6050]">
        Please don&apos;t close this window. We&apos;re securely verifying your payment.
      </p>

      <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#7E6E5E]">
        <Lock className="size-4 text-[color:var(--brand-blue)]" />
        <span>Securely processing via Razorpay</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STATE: success
   ─────────────────────────────────────────────
   IMPORTANT — Payment Verification Architecture Note:

   This "success" screen is a UI placeholder for the future payment flow.
   It currently displays mock booking details (hardcoded Booking ID, amount).

   When the Razorpay backend is implemented:
   1. The "success" state MUST only be set after the backend confirms
      payment verification (Razorpay signature check).
   2. The booking ID and amount displayed MUST come from the backend response.
   3. A frontend-only state transition to "success" must NEVER be treated
      as proof of payment.
   4. The "preparing" state should call the backend to create a Razorpay order.
   5. The "processing" state should be shown while the backend verifies payment.
   ───────────────────────────────────────────── */
function BookingSuccess({
  onClose,
  paymentData,
}: {
  onClose: () => void;
  paymentData: {
    paymentId: string;
    orderId: string;
    amount: number;
  };
}) {
  return (
    <div className="relative overflow-hidden px-4 py-6 text-center sm:px-6 sm:py-8">
      <Mandala className="pointer-events-none absolute -right-16 -top-16 size-48 text-[color:var(--festive-gold)] opacity-20" />

      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">
        <CheckCircle2 className="size-8" />
      </div>

      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-100/70 px-3 py-0.5 text-xs font-bold text-emerald-800">
        <Sparkles className="size-3.5" /> Booking Confirmed!
      </div>

      <h3 className="mt-3 font-[family:var(--font-display)] text-2xl font-extrabold text-[#23201C]">
        Booking Confirmed!
      </h3>
      <p className="mx-auto mt-1 max-w-sm text-xs sm:text-sm leading-relaxed text-[#6E6050]">
        Payment successful and spot reserved. Your child&apos;s creative journey begins soon!
      </p>

      {/* Booking & payment details */}
      <div className="mx-auto mt-4 max-w-sm rounded-xl border border-[#E7D6C1] bg-white/80 p-3.5 text-left shadow-2xs backdrop-blur-xs">
        <div className="space-y-2 text-xs sm:text-sm">
          <div className="flex items-center justify-between border-b border-[#F0E5D5] pb-1.5">
            <span className="font-medium text-[#7E6E5E]">Booking ID</span>
            <span className="font-bold text-[#23201C]">
              {paymentData.orderId}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-[#F0E5D5] pb-1.5">
            <span className="font-medium text-[#7E6E5E]">Workshop</span>
            <span className="font-medium text-[#23201C]">₹1,500</span>
          </div>
          <div className="flex items-center justify-between border-b border-[#F0E5D5] pb-1.5">
            <span className="font-medium text-[#7E6E5E]">Delivery</span>
            <span className="font-medium text-[#23201C]">₹199</span>
          </div>
          <div className="flex items-center justify-between border-b border-[#F0E5D5] pb-1.5">
            <span className="font-medium text-[#7E6E5E]">GST (18%)</span>
            <span className="font-medium text-[#23201C]">Included</span>
          </div>
          <div className="flex items-center justify-between border-b border-[#F0E5D5] pb-1.5">
            <span className="font-semibold text-[#23201C]">Amount Paid</span>
            <span className="font-bold text-emerald-700">
              ₹{paymentData.amount / 100}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-[#F0E5D5] pb-1.5">
            <span className="font-medium text-[#7E6E5E]">Payment Status</span>
            <span className="inline-flex items-center gap-1 font-bold text-emerald-700">
              <CheckCircle2 className="size-3.5" /> Paid Successfully
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-[#7E6E5E]">Kit Delivery</span>
            <span className="font-bold text-[#23201C]">3–5 business days</span>
          </div>
        </div>
        <p className="mt-2 text-[10px] text-[#8A7D6C] text-center">
          Final checkout amount rounded to ₹2,000.
        </p>
      </div>

      <p className="mx-auto mt-3 max-w-xs text-[11px] text-[#8A7D6C]">
        A confirmation email with full details has been sent to your registered email address.
      </p>

      <Button
        onClick={onClose}
        className="mt-5 h-11 w-full max-w-xs rounded-xl bg-[color:var(--brand-blue)] text-sm sm:text-base font-bold text-white shadow-md hover:bg-[color:var(--brand-blue)]/90 cursor-pointer"
      >
        <Home className="size-4 shrink-0" />
        Back to Home
      </Button>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STATE: failed
   ───────────────────────────────────────────── */
function PaymentFailed({
  onRetry,
  onBackToBooking,
}: {
  onRetry: () => void;
  onBackToBooking: () => void;
}) {
  return (
    <div className="flex flex-col items-center px-4 py-6 text-center sm:px-6 sm:py-8">
      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-red-50 text-red-500 shadow-inner">
        <XCircle className="size-8" />
      </div>

      <h3 className="mt-4 font-[family:var(--font-display)] text-2xl font-extrabold text-[#23201C]">
        Payment Failed
      </h3>
      <p className="mx-auto mt-1.5 max-w-sm text-xs sm:text-sm leading-relaxed text-[#6E6050]">
        Your payment could not be completed. Don&apos;t worry — no booking has been confirmed yet.
      </p>

      <div className="mt-6 flex w-full max-w-xs flex-col gap-2.5">
        <Button
          onClick={onRetry}
          className="h-11 w-full rounded-xl bg-[color:var(--brand-red)] text-sm sm:text-base font-bold text-white shadow-md hover:bg-[color:var(--brand-red)]/90 cursor-pointer"
        >
          <RotateCcw className="size-4 shrink-0" />
          Try Again
        </Button>
        <Button
          onClick={onBackToBooking}
          variant="outline"
          className="h-11 w-full rounded-xl border-[#DDCFBD] text-sm sm:text-base font-bold text-[#3E342B] hover:bg-[#F5EDE2] cursor-pointer"
        >
          <ArrowLeft className="size-4 shrink-0" />
          Back to Booking
        </Button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STATE: incomplete
   ───────────────────────────────────────────── */
function PaymentIncomplete({
  onCompletePayment,
  onCancelBooking,
}: {
  onCompletePayment: () => void;
  onCancelBooking: () => void;
}) {
  return (
    <div className="flex flex-col items-center px-4 py-6 text-center sm:px-6 sm:py-8">
      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 shadow-inner">
        <AlertTriangle className="size-8" />
      </div>

      <h3 className="mt-4 font-[family:var(--font-display)] text-2xl font-extrabold text-[#23201C]">
        Payment Incomplete
      </h3>
      <p className="mx-auto mt-1.5 max-w-sm text-xs sm:text-sm leading-relaxed text-[#6E6050]">
        Your booking details are saved, but payment has not been completed.
      </p>

      <div className="mt-6 flex w-full max-w-xs flex-col gap-2.5">
        <Button
          onClick={onCompletePayment}
          className="h-11 w-full rounded-xl bg-[color:var(--brand-red)] text-sm sm:text-base font-bold text-white shadow-md hover:bg-[color:var(--brand-red)]/90 cursor-pointer"
        >
          <CreditCard className="size-4 shrink-0" />
          Complete Payment
        </Button>
        <Button
          onClick={onCancelBooking}
          variant="outline"
          className="h-11 w-full rounded-xl border-[#DDCFBD] text-sm sm:text-base font-bold text-[#3E342B] hover:bg-[#F5EDE2] cursor-pointer"
        >
          Cancel Booking
        </Button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT: BookButton
   ───────────────────────────────────────────── */
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
  const [bookingState, setBookingState] = useState<BookingState>("form");
  const [iframeHeight, setIframeHeight] = useState(700);

  const [customerData, setCustomerData] = useState<{
    name: string;
    email: string;
    phone: string;
  } | null>(null);

  const [paymentData, setPaymentData] = useState<{
    paymentId: string;
    orderId: string;
    amount: number;
  } | null>(null);

  const paymentStartedRef = useRef(false);

  const isFormState = bookingState === "form";

  // Dev testing listener
  useEffect(() => {
    if (import.meta.env.DEV) {
      const handleSetState = (e: CustomEvent<BookingState>) => {
        if (e.detail) setBookingState(e.detail);
      };
      window.addEventListener("setBookingState" as any, handleSetState);
      return () => window.removeEventListener("setBookingState" as any, handleSetState);
    }
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from our configured WordPress origin.
      if (!TRUSTED_MESSAGE_ORIGINS.includes(event.origin)) {
        return;
      }

      const data = event.data;

      if (
        data == null ||
        typeof data !== "object" ||
        typeof data.type !== "string"
      ) {
        return;
      }

      switch (data.type) {
        case EXPECTED_MESSAGE_TYPES.FORM_SUCCESS: {
          if (bookingState !== "form") {
            return;
          }

          const customer = data.customer;

          if (
            !customer ||
            typeof customer !== "object" ||
            typeof customer.name !== "string" ||
            typeof customer.email !== "string" ||
            typeof customer.phone !== "string"
          ) {
            console.warn(
              "Kitolit: FORM_SUCCESS received without customer data. Waiting for customer data."
            );
            return;
          }

          const cleanedCustomer = {
            name: customer.name.trim(),
            email: customer.email.trim(),
            phone: customer.phone.trim(),
          };

          if (
            !cleanedCustomer.name ||
            !cleanedCustomer.email ||
            !cleanedCustomer.phone
          ) {
            console.error("Kitolit: Customer details are incomplete.");
            setBookingState("failed");
            return;
          }

          setCustomerData(cleanedCustomer);
          setBookingState("checkout");

          break;
        }

        case EXPECTED_MESSAGE_TYPES.FORM_HEIGHT: {
          const height = Number(data.height);

          if (
            Number.isFinite(height) &&
            height >= IFRAME_HEIGHT_LIMITS.MIN &&
            height <= IFRAME_HEIGHT_LIMITS.MAX
          ) {
            setIframeHeight(height);
          }

          break;
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [bookingState]);

  // Trigger payment when state transitions to "preparing" and customer data is available
  useEffect(() => {
    if (bookingState === "preparing" && customerData) {
      startPayment();
    }
  }, [bookingState, customerData]);

  const startPayment = async () => {
    if (!customerData || paymentStartedRef.current) {
      return;
    }

    paymentStartedRef.current = true;
    setBookingState("preparing");

    try {
      const wordpressOrigin = new URL(WORDPRESS_FORM_URL).origin;

      // Razorpay Checkout is loaded globally from index.html.
      if (!window.Razorpay) {
        throw new Error("Razorpay Checkout failed to load.");
      }

      // Ask WordPress to create the Razorpay order.
      const orderResponse = await fetch(
        `${wordpressOrigin}/wp-json/kitolit/v1/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: customerData.name,
            email: customerData.email,
            phone: customerData.phone,
          }),
        }
      );

      const orderData = await orderResponse.json();

      if (
        !orderResponse.ok ||
        !orderData.success ||
        !orderData.order_id ||
        !orderData.key_id ||
        !orderData.amount
      ) {
        throw new Error(
          orderData.message || "Unable to create payment order."
        );
      }

      setBookingState("processing");

      const razorpay = new window.Razorpay({
        key: orderData.key_id,
        amount: orderData.amount,
        currency: orderData.currency || "INR",
        name: "Kitolit",
        description: "Kitolit Robotics Workshop",
        order_id: orderData.order_id,

        prefill: {
          name: customerData.name,
          email: customerData.email,
          contact: customerData.phone,
        },

        theme: {
          color: "#EE4035",
        },

        handler: async (response) => {
          try {
            setBookingState("processing");

            const verifyResponse = await fetch(
              `${wordpressOrigin}/wp-json/kitolit/v1/verify-payment`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              }
            );

            const verification = await verifyResponse.json();

            if (!verifyResponse.ok || !verification.success) {
              throw new Error(
                verification.message || "Payment verification failed."
              );
            }

            setPaymentData({
              paymentId: verification.payment_id,
              orderId: verification.order_id,
              amount: verification.customer?.amount || orderData.amount,
            });

            setBookingState("success");
          } catch (error) {
            console.error("Kitolit: Payment verification failed.", error);
            setBookingState("failed");
          } finally {
            paymentStartedRef.current = false;
          }
        },

        modal: {
          ondismiss: () => {
            paymentStartedRef.current = false;
            setBookingState("incomplete");
          },
        },
      });

      razorpay.on("payment.failed", () => {
        paymentStartedRef.current = false;
        setBookingState("failed");
      });

      razorpay.open();
    } catch (error) {
      console.error("Kitolit: Payment initialization failed.", error);
      paymentStartedRef.current = false;
      setBookingState("failed");
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(o) => {
          setOpen(o);
          if (!o) {
            setBookingState("form");
          }
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

        <DialogContent
          className={`w-full max-w-[calc(100%-1.5rem)] rounded-3xl border border-[#EADCC9] bg-[color:var(--ivory)] p-0 shadow-2xl flex flex-col ${isFormState
            ? "max-h-[94vh] sm:max-w-xl md:max-w-2xl overflow-hidden"
            : "sm:max-w-md md:max-w-lg h-auto min-h-0 overflow-visible"
            }`}
        >
          {/* ── FORM STATE: iframe with scroll ── */}
          {isFormState && (
            <div className="max-h-[92vh] px-4 py-5 sm:px-8 sm:py-7 overflow-y-auto w-full">
              <div className="space-y-6">
                <DialogHeader className="relative space-y-1.5 text-left border-b border-[#EADCC9]/70 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-festive-gold/25 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[color:var(--festive-orange)]">
                      🪔 Hands-on Maker Series
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800">
                      Delivery ₹199
                    </span>
                  </div>
                  <DialogTitle
                    className="font-[family:var(--font-display)] text-2xl sm:text-3xl font-extrabold tracking-tight text-[#23201C]"
                    onDoubleClick={() => import.meta.env.DEV && setBookingState("preparing")}
                    title={import.meta.env.DEV ? "DEV: Double-click to simulate form submission" : undefined}
                  >
                    BOOK YOUR GANESHA WORKSHOP
                  </DialogTitle>
                  <DialogDescription className="text-xs sm:text-sm font-medium text-[#6E6050]">
                    Live guided online session • Activity material delivered to your home • Ages 6+
                  </DialogDescription>
                </DialogHeader>

                <div className="w-full overflow-hidden rounded-2xl">
                  {bookingState === "form" && (
                    <iframe
                      src={WORDPRESS_FORM_URL}
                      title="Ganesha Workshop Booking"
                      className="block w-full border-0"
                      style={{
                        height: `${iframeHeight}px`,
                        width: "100%",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── NON-FORM STATES: shrink to content, no fixed height ── */}
          {!isFormState && (
            <div className="w-full h-auto min-h-0 flex-none p-0">
              {/* Hidden accessible title/description for non-form states */}
              <DialogTitle className="sr-only">Booking Status</DialogTitle>
              <DialogDescription className="sr-only">Booking payment status</DialogDescription>

              {bookingState === "checkout" && (
                <CheckoutSummary
                  onProceed={() => setBookingState("preparing")}
                />
              )}

              {bookingState === "preparing" && <PreparingPayment />}

              {bookingState === "processing" && <ProcessingPayment />}

              {bookingState === "success" && (
                <BookingSuccess
                  paymentData={
                    paymentData || {
                      paymentId: "",
                      orderId: "",
                      amount: 200000,
                    }
                  }
                  onClose={() => {
                    setOpen(false);
                    setBookingState("form");
                    setCustomerData(null);
                    setPaymentData(null);
                    paymentStartedRef.current = false;
                  }}
                />
              )}

              {bookingState === "failed" && (
                <PaymentFailed
                  onRetry={() => {
                    paymentStartedRef.current = false;
                    startPayment();
                  }}
                  onBackToBooking={() => setBookingState("form")}
                />
              )}

              {bookingState === "incomplete" && (
                <PaymentIncomplete
                  onCompletePayment={() => {
                    paymentStartedRef.current = false;
                    startPayment();
                  }}
                  onCancelBooking={() => {
                    setOpen(false);
                    setBookingState("form");
                  }}
                />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
