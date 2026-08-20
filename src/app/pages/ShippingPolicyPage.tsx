import { PolicyLayout } from "../components/kitolit/PolicyLayout";

export function ShippingPolicyPage() {
  return (
    <PolicyLayout title="Shipping Policy">
      <p>Last updated: {new Date().toLocaleDateString('en-IN')}</p>

      <h2>1. General Information</h2>
      <p>
        All workshop bookings include the free delivery of activity materials (Eco Tech Ganesha parts, Magical MushakBot parts, paints, tools, etc.) required for the live session. Subject to stock availability, we aim to dispatch materials promptly to ensure they arrive before your scheduled workshop.
      </p>

      <h2>2. Delivery Locations</h2>
      <p>
        We currently ship activity materials within India.
      </p>

      <h2>3. Delivery Timeframes</h2>
      <p>
        Materials are dispatched a few days prior to your chosen batch. Standard delivery times within India are typically 3-7 business days from the date of dispatch. You will receive tracking information once your package has shipped.
      </p>

      <h2>4. Shipping Costs</h2>
      <p>
        Shipping of the activity material is completely free of charge and included in your workshop booking.
      </p>

      <h2>5. Damaged Items in Transport</h2>
      <p>
        If there is any damage to the packaging on delivery or if any parts are missing/damaged upon unboxing, contact us immediately at <a href="mailto:support@kitolit.com">support@kitolit.com</a> or <a href="tel:+919110582315">+91 9110582315</a> with your booking details and photos of the damage. We will arrange a replacement as quickly as possible.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any further questions about shipping and delivery, please contact us:
      </p>
      <p>
        Kitolit Robotics & AI<br />
        Email: support@kitolit.com<br />
        Phone: +91 9110582315
      </p>
    </PolicyLayout>
  );
}
