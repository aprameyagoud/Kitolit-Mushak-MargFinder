import { PolicyLayout } from "../components/kitolit/PolicyLayout";
import { Link } from "react-router";

export function ShippingPolicyPage() {
  return (
    <PolicyLayout title="Shipping Policy">
      <p>
        This Shipping Policy applies to the physical materials associated with the Eco Tech Ganesha Workshop provided by KITOLIT PRIVATE LIMITED (“Kitolit”, “we”, “us”, or “our”).
      </p>

      <h2>1. Delivery of Workshop Materials</h2>
      <p>
        Physical workshop materials may be delivered to the address provided during booking.
      </p>

      <h2>2. Delivery Information</h2>
      <p>
        The customer is responsible for providing an accurate delivery address.
      </p>

      <h2>3. Delivery Charges</h2>
      <p>
        Applicable delivery charges, where applicable, will be communicated during the booking/order process.
      </p>

      <h2>4. Delivery Timeline</h2>
      <p>
        Domestic delivery may take approximately 3–7 working days from the applicable order/dispatch timeline, subject to location and logistics conditions.
      </p>

      <h2>5. Workshop Timing</h2>
      <p>
        Customers should complete their booking according to any communicated booking deadline so materials can be arranged before the workshop.
      </p>

      <h2>6. Incorrect Address</h2>
      <p>
        If an incorrect or incomplete address is provided, delivery may be delayed or affected. Customers should contact support promptly if a correction is needed.
      </p>

      <h2>7. Delays</h2>
      <p>
        Delivery may be affected by courier operations, location, weather, public holidays, or other logistics factors.
      </p>

      <h2>8. Damaged or Lost Materials</h2>
      <p>
        Customers should contact Kitolit support promptly and provide relevant order/booking information and supporting details so the issue can be reviewed. Any resolution should be subject to the specific circumstances and operational feasibility.
      </p>

      <h2>9. Contact</h2>
      <p>
        If you have any questions about delivery, please reach out via our <Link to="/contact">Contact Us</Link> page.
      </p>
    </PolicyLayout>
  );
}
