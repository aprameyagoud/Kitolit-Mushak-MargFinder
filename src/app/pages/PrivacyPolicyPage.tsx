import { PolicyLayout } from "../components/kitolit/PolicyLayout";
import { Link } from "react-router";

export function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy">
      <p>
        Kitolit Robotics & AI ("we", "our", or "us") respects your privacy and is committed to protecting the information you share with us. This privacy policy explains how we collect and process information when you use our website or book our workshops.
      </p>

      <h2>1. Information Collected</h2>
      <p>
        During the workshop booking process, we collect the following information to facilitate your booking and material delivery:
      </p>
      <ul>
        <li>Parent's name</li>
        <li>Email address</li>
        <li>Child's name</li>
        <li>Child's age</li>
        <li>Address</li>
        <li>City</li>
        <li>State</li>
        <li>Pincode</li>
      </ul>

      <h2>2. Children's Information</h2>
      <p>
        Our workshops are intended for children aged 6–13. Because child information (such as name and age) is collected for participation purposes, we require and expect that all booking information is submitted by a parent or legal guardian on behalf of the child.
      </p>

      <h2>3. Purpose of Collection</h2>
      <p>
        We use the collected information for the following operational purposes:
      </p>
      <ul>
        <li>To process workshop bookings.</li>
        <li>To communicate booking-related information.</li>
        <li>To arrange the delivery of applicable workshop materials.</li>
        <li>To provide customer support.</li>
        <li>To maintain booking records.</li>
        <li>To process payment-related workflows through our payment provider.</li>
        <li>To send future workshop or promotional communications.</li>
      </ul>
      
      {/* 
        IMPLEMENTATION NOTE: 
        Currently, the Fluent Forms booking integration does not collect separate explicit marketing consent.
        Before scaling marketing communications (via WhatsApp or Email), an explicit opt-in/consent 
        mechanism should be added to the booking flow to ensure proper marketing compliance.
      */}

      <h2>4. Data Storage and Third-Party Services</h2>
      <p>
        Booking information is collected and stored through our operational setup using Fluent Forms and WordPress. We engage the following categories of third-party services to fulfill our operations:
      </p>
      <ul>
        <li><strong>Form and Website Management:</strong> Fluent Forms / WordPress.</li>
        <li><strong>Payment Processing:</strong> Payment gateway providers handle payment processing during the checkout workflow.</li>
        <li><strong>Delivery:</strong> Delivery partners, who receive relevant customer delivery information when required to deliver workshop materials.</li>
      </ul>

      <h2>5. Payment Data</h2>
      <p>
        Payment processing is handled securely through our payment gateway. Kitolit Robotics & AI does not collect or store your complete credit card, debit card, or UPI details on our operational servers.
      </p>

      <h2>6. Marketing Communications</h2>
      <p>
        We intend to send future promotional communications regarding upcoming workshops and offerings via WhatsApp and/or email using the contact details provided during booking.
      </p>

      <h2>7. Security</h2>
      <p>
        We take reasonable steps to protect the information collected within our operational systems from unauthorized access or disclosure. However, no internet-based platform can guarantee absolute security.
      </p>

      <h2>8. User Rights and Contact</h2>
      <p>
        If you have questions about your information, how it is used, or wish to reach out regarding your data, please contact our support team.
      </p>
      <p>
        <Link to="/contact">Visit our Contact Us page</Link>
      </p>
    </PolicyLayout>
  );
}
