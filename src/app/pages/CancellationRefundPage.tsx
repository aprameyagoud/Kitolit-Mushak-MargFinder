import { PolicyLayout } from "../components/kitolit/PolicyLayout";

export function CancellationRefundPage() {
  return (
    <PolicyLayout title="Cancellation & Refund Policy">
      <p>Last updated: {new Date().toLocaleDateString('en-IN')}</p>

      <h2>1. Cancellation Policy</h2>
      <p>
        We understand that plans can change. If you need to cancel your workshop booking, please contact us as soon as possible at <a href="mailto:support@kitolit.com">support@kitolit.com</a>.
      </p>
      <ul>
        <li><strong>Prior to Material Dispatch:</strong> Cancellations made before the activity materials have been dispatched will be eligible for a full refund.</li>
        <li><strong>After Material Dispatch:</strong> Once the activity materials have been dispatched, we cannot accept cancellations for a full refund.</li>
      </ul>

      <h2>2. Refund Policy</h2>
      <p>
        Refunds will be processed to the original method of payment used at the time of booking. 
      </p>
      <p>
        Please note that it may take some time for your bank or credit card company to process and post the refund. Typically, refunds reflect in your account within 5-7 business days after processing on our end.
      </p>

      <h2>3. Rescheduling</h2>
      <p>
        If you are unable to attend your scheduled live session, please contact us. Subject to availability in other batches, we will do our best to accommodate rescheduling your session at no additional cost.
      </p>

      <h2>4. Contact Us</h2>
      <p>
        For any questions regarding cancellations or refunds, please reach out to:
      </p>
      <p>
        Kitolit Robotics & AI<br />
        Email: support@kitolit.com<br />
        Phone: +91 9110582315
      </p>
    </PolicyLayout>
  );
}
