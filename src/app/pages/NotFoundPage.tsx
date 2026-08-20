import { PolicyLayout } from "../components/kitolit/PolicyLayout";
import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <PolicyLayout title="Page Not Found">
      <p className="text-xl">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <div className="mt-8">
        <Link 
          to="/" 
          className="inline-flex items-center justify-center rounded-xl bg-[color:var(--brand-red)] px-6 py-3 font-medium text-white shadow-md hover:bg-[color:var(--brand-red)]/90 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </PolicyLayout>
  );
}
