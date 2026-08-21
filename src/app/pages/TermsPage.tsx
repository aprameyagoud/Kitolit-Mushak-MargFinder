import { PolicyLayout } from "../components/kitolit/PolicyLayout";
import { Link } from "react-router";

export function TermsPage() {
  return (
    <PolicyLayout title="Terms & Conditions">
      <p>
        These Terms & Conditions apply to the Eco Tech Ganesha Workshop provided by Kitolit Robotics & AI.
      </p>

      <h2>1. Workshop Booking</h2>
      <p>A booking is subject to successful payment verification.</p>

      <h2>2. Age Eligibility</h2>
      <p>The workshop is intended for children aged 6+.</p>

      <h2>3. Parent / Guardian Responsibility</h2>
      <p>The booking information is expected to be provided by a parent or legal guardian.</p>

      <h2>4. Workshop Participation</h2>
      <p>Participants must provide accurate booking details required for workshop coordination and delivery.</p>

      <h2>5. Workshop Materials</h2>
      <p>The workshop materials include:</p>
      <ul>
        <li>Board</li>
        <li>Wood cutouts</li>
        <li>Wheels</li>
        <li>Path</li>
        <li>Craft & assembly accessories</li>
      </ul>

      <h2>6. Online Workshop</h2>
      <p>The workshop is conducted online.</p>

      <h2>7. Workshop Schedule</h2>
      <p>Workshop date, time, duration, and access details may be communicated to confirmed participants once finalized.</p>

      <h2>8. Payment</h2>
      <p>
        Payment methods may include UPI, cards, and net banking through the supported payment gateway. A frontend success screen alone does not constitute final payment confirmation. The booking is considered confirmed only after successful payment verification.
      </p>

      <h2>9. Pricing</h2>
      <ul>
        <li><strong>Current offer price:</strong> ₹2,000</li>
        <li><strong>MRP:</strong> ₹3,000</li>
      </ul>

      <h2>10. Delivery</h2>
      <p>Applicable delivery details and charges are governed by the <Link to="/shipping-policy">Shipping Policy</Link>.</p>

      <h2>11. Cancellation and Refunds</h2>
      <p>
        Customer-initiated cancellation is not available after a confirmed booking. Any applicable exceptions, service cancellation, or other refund circumstances are governed by the <Link to="/cancellation-refund-policy">Cancellation & Refund Policy</Link>.
      </p>

      <h2>12. Changes</h2>
      <p>
        Kitolit may update workshop-related operational details when reasonably necessary, with relevant communication to confirmed participants where applicable.
      </p>

      <h2>13. Contact</h2>
      <p>
        If you have any questions, please <Link to="/contact">Contact Us</Link>.
      </p>
    </PolicyLayout>
  );
}
