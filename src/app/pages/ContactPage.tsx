import { PolicyLayout } from "../components/kitolit/PolicyLayout";

export function ContactPage() {
  return (
    <PolicyLayout title="Contact Us">
      <p className="text-xl mb-10">
        Our support team is here to help you with any questions regarding your workshop experience.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div>
          <h2 className="mt-0">Contact Details</h2>
          <div className="space-y-4">
            <div>
              <strong>Kitolit Robotics & AI</strong>
            </div>
            <div>
              <strong>Customer Support:</strong><br />
              <a href="tel:+919110582315">+91 9110582315</a>
            </div>
            <div>
              <strong>Email:</strong><br />
              <a href="mailto:support@kitolit.com">support@kitolit.com</a>
            </div>
            <div>
              <strong>Location:</strong><br />
              Hyderabad, India
            </div>
          </div>

          <h3 className="mt-8">Support Hours</h3>
          <ul className="list-none pl-0 space-y-2">
            <li><strong>Monday to Saturday:</strong> 10:00 AM to 6:00 PM</li>
            <li><strong>Sunday:</strong> Closed</li>
          </ul>
        </div>
        
        <div>
          <h2 className="mt-0">How can we help?</h2>
          <p>Please reach out to us regarding:</p>
          <ul>
            <li>Workshop questions</li>
            <li>Booking support</li>
            <li>Delivery support</li>
            <li>Payment support</li>
            <li>General enquiries</li>
          </ul>
          
          <div className="mt-8 p-6 bg-[color:var(--muted)] rounded-xl border border-[color:var(--border)]">
            <p className="m-0 font-medium text-[color:var(--foreground)]">
              For booking or payment-related issues, customers should contact Kitolit support using the provided contact details.
            </p>
          </div>
        </div>
      </div>
    </PolicyLayout>
  );
}
