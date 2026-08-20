import { PolicyLayout } from "../components/kitolit/PolicyLayout";

export function TermsPage() {
  return (
    <PolicyLayout title="Terms & Conditions">
      <p>Last updated: {new Date().toLocaleDateString('en-IN')}</p>

      <h2>1. Introduction</h2>
      <p>
        These Website Standard Terms and Conditions written on this webpage shall manage your use of our website and services provided by Kitolit Robotics & AI ("we", "us", or "our").
      </p>

      <h2>2. Intellectual Property Rights</h2>
      <p>
        Other than the content you own, under these Terms, Kitolit Robotics & AI and/or its licensors own all the intellectual property rights and materials contained in this Website and our workshop materials.
      </p>

      <h2>3. Restrictions</h2>
      <p>You are specifically restricted from all of the following:</p>
      <ul>
        <li>Publishing any Website or workshop material in any other media without permission;</li>
        <li>Selling, sublicensing and/or otherwise commercializing any Website or workshop material;</li>
        <li>Publicly performing and/or showing any Website material;</li>
        <li>Using this Website in any way that is or may be damaging to this Website;</li>
        <li>Using this Website in any way that impacts user access to this Website;</li>
      </ul>

      <h2>4. Booking and Payment</h2>
      <p>
        All bookings for workshops are subject to availability. Payment must be made in full at the time of booking. Prices are subject to change without notice, but changes will not affect bookings that have already been accepted.
      </p>

      <h2>5. Governing Law & Jurisdiction</h2>
      <p>
        These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
      </p>
      
      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at:
      </p>
      <p>
        Kitolit Robotics & AI<br />
        Hyderabad, India<br />
        Email: support@kitolit.com<br />
        Phone: +91 9110582315
      </p>
    </PolicyLayout>
  );
}
