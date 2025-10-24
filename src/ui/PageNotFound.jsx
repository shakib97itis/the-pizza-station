import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-stone-50 px-4 text-center">
      {/* 404 Header */}
      <h1 className="mb-4 text-9xl font-bold text-yellow-400">404</h1>

      {/* Message */}
      <p className="mb-2 text-2xl font-semibold text-stone-800">
        Oops! Page Not Found
      </p>
      <p className="mb-8 text-stone-500 italic">
        The page you’re looking for doesn’t exist.
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="rounded-full bg-yellow-400 px-6 py-3 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-200 hover:bg-yellow-300"
      >
        ← Back to Menu
      </Link>
    </div>
  );
}

export default PageNotFound;
