import { PolicyLayout } from "../components/kitolit/PolicyLayout";
import { Link } from "react-router";

export function CancellationRefundPage() {
  return (
    <PolicyLayout title="Cancellation & Refund Policy">
      <p>
        This policy applies to bookings made for the Eco Tech Ganesha Workshop.
      </p>

      <h2>1. Customer Cancellation</h2>
      <p>
        Once a booking has been successfully confirmed, customer-initiated cancellation is not available.
      </p>

      <h2>2. Refund Requests</h2>
      <p>
        Because customer cancellation is not available, we do not offer automatic refunds for confirmed bookings.
      </p>

      <h2>3. Exceptional Situations</h2>
      <p>
        If Kitolit is unable to provide the workshop as confirmed due to circumstances attributable to Kitolit, affected customers will be contacted regarding the available resolution.
      </p>

      <h2>4. Payment Issues</h2>
      <p>
        If payment fails or is not successfully verified, the booking is not confirmed.
      </p>

      <h2>5. Refund Processing</h2>
      <p>
        If a refund is approved in an applicable situation, the refund may be processed back to the original payment source where supported by the payment provider. Bank and payment-provider processing times can vary after a refund is initiated.
      </p>

      <h2>6. Contact</h2>
      <p>
        Customers with questions should contact Kitolit support through the <Link to="/contact">Contact Us</Link> page.
      </p>
    </PolicyLayout>
  );
}
