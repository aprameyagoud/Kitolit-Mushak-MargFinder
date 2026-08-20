import { PolicyLayout } from "../components/kitolit/PolicyLayout";

export function ContactPage() {
  return (
    <PolicyLayout title="Contact Us">
      <p>
        We are here to help! If you have any questions about our workshops, activity material delivery, or general inquiries, please reach out to us using the details below.
      </p>
      
      <h3>Contact Information</h3>
      <ul>
        <li><strong>Business Name:</strong> Kitolit Robotics & AI</li>
        <li><strong>Location:</strong> Hyderabad, India</li>
        <li><strong>Email:</strong> <a href="mailto:support@kitolit.com">support@kitolit.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:+919110582315">+91 9110582315</a></li>
      </ul>
      
      <p>
        Our support team aims to respond to all inquiries promptly. For existing workshop bookings, please include your booking reference in your email for faster assistance.
      </p>
    </PolicyLayout>
  );
}
