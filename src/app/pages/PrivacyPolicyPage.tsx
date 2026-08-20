import { PolicyLayout } from "../components/kitolit/PolicyLayout";

export function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy">
      <p>Last updated: {new Date().toLocaleDateString('en-IN')}</p>
      
      <p>
        Kitolit Robotics & AI ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
      </p>

      <h2>1. The Data We Collect About You</h2>
      <p>
        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
      </p>
      <ul>
        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
        <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
        <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
      </ul>
      <p>Note: We do not store or process complete credit card details on our servers. All payments are processed securely through our payment gateway partner.</p>

      <h2>2. How We Use Your Personal Data</h2>
      <p>
        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
      </p>
      <ul>
        <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., to process your booking and deliver activity materials).</li>
        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
        <li>Where we need to comply with a legal obligation.</li>
      </ul>

      <h2>3. Data Security</h2>
      <p>
        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
      </p>

      <h2>4. Contact Us</h2>
      <p>
        If you have any questions about this privacy policy or our privacy practices, please contact us at:
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
