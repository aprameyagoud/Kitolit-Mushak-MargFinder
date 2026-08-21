import { PolicyLayout } from "../components/kitolit/PolicyLayout";
import { Link } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function FAQPage() {
  return (
    <PolicyLayout title="Frequently Asked Questions">
      <div className="space-y-12">
        <section>
          <h2>Workshop Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="w1" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="text-left font-medium py-4">What is the Eco Tech Ganesha Workshop?</AccordionTrigger>
              <AccordionContent className="pb-4">A hands-on workshop experience designed for children aged 6+, combining creativity and practical activity through the workshop kit and guided online session.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="w2" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="text-left font-medium py-4">Who is the workshop for?</AccordionTrigger>
              <AccordionContent className="pb-4">Children aged 6+.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="w3" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="text-left font-medium py-4">Is the workshop online or offline?</AccordionTrigger>
              <AccordionContent className="pb-4">The workshop is conducted online.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="w4" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="text-left font-medium py-4">Is this a group workshop?</AccordionTrigger>
              <AccordionContent className="pb-4">Yes, participants join the workshop experience as part of a group session.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="w5" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="text-left font-medium py-4">What is included in the workshop materials?</AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="m-0">
                  <li>Board</li>
                  <li>Wood cutouts</li>
                  <li>Wheels</li>
                  <li>Path</li>
                  <li>Craft & assembly accessories</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="w6" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="text-left font-medium py-4">Are tools needed?</AccordionTrigger>
              <AccordionContent className="pb-4">Basic assembly accessories are provided with the kit, and no complex tools are required.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="w7" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="text-left font-medium py-4">What digital resource is included?</AccordionTrigger>
              <AccordionContent className="pb-4">Access to the online workshop meeting.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2>Price Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="p1" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="text-left font-medium py-4">What is the workshop price?</AccordionTrigger>
              <AccordionContent className="pb-4">The current offer price is ₹2,000.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="p2" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="text-left font-medium py-4">What is the MRP?</AccordionTrigger>
              <AccordionContent className="pb-4">₹3,000.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="p3" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="text-left font-medium py-4">Which payment methods are accepted?</AccordionTrigger>
              <AccordionContent className="pb-4">UPI, cards, and net banking through the supported payment flow.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2>Payment Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="pay1" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="text-left font-medium py-4">When is my booking confirmed?</AccordionTrigger>
              <AccordionContent className="pb-4">A booking is considered confirmed only after successful payment verification.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="pay2" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="text-left font-medium py-4">What happens if my payment fails?</AccordionTrigger>
              <AccordionContent className="pb-4">The customer can retry payment through the payment flow.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="pay3" className="border rounded-lg px-4 bg-white">
              <AccordionTrigger className="text-left font-medium py-4">What if I close the payment window without completing payment?</AccordionTrigger>
              <AccordionContent className="pb-4">The booking is not confirmed until payment is successfully completed and verified.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2>Delivery Questions</h2>
          <p>
            Delivery charges, if applicable, will be communicated during the booking/order process.
          </p>
          <p>
            For more details, please review our <Link to="/shipping-policy">Shipping Policy</Link>.
          </p>
        </section>

        <section>
          <h2>Cancellation</h2>
          <p>
            <strong>Can I cancel my booking?</strong><br />
            Customer-initiated cancellation is not available after booking/payment confirmation.
          </p>
          <p>
            For more details, please review our <Link to="/cancellation-refund-policy">Cancellation & Refund Policy</Link>.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For questions about booking, delivery, or payment, contact Kitolit support.
          </p>
          <p>
            <Link to="/contact">Visit our Contact Us page</Link>
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
