import { Link } from "react-router";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Not found");

  return (
    <div className="mx-auto max-w-content px-4 py-12">
      <h1>Page not found</h1>
      <p>
        <Link to="/" className="text-link underline">
          Back to the home page
        </Link>
      </p>
    </div>
  );
}
