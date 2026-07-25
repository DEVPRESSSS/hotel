import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { title: "Home", path: "/" },
  { title: "Product", path: "/product" },
  { title: "Services", path: "/services" },
  { title: "About Us", path: "/about" },
];

export function NavBarDefault() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center h-16 px-6 gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-teal-800 font-bold text-lg tracking-tight">
            Pennacle
          </span>
        </Link>

        {/* Desktop nav — text-based, underline on active, no pill backgrounds */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {NAV_LINKS.map(({ title, path }) => (
            <Link
              key={path}
              to={path}
              className={`relative text-sm py-2 transition-colors duration-150
                ${isActive(path)
                  ? "text-teal-800 font-semibold"
                  : "text-gray-500 font-medium hover:text-gray-900"
                }`}
            >
              {title}
              {isActive(path) && (
                <span className="absolute left-0 -bottom-px w-full h-0.5 bg-teal-800 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Auth — desktop: one neutral, one solid primary */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-lg text-sm font-medium bg-teal-800 text-white
                       hover:bg-teal-700 transition-colors duration-150"
          >
            Sign up
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden ml-auto p-1.5 text-gray-600 hover:text-gray-900 transition-colors duration-150"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu — one clear path, no duplicate CTAs */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-1 bg-white">
          {NAV_LINKS.map(({ title, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMobileOpen(false)}
              className={`px-2 py-2.5 text-sm transition-colors
                ${isActive(path)
                  ? "text-teal-800 font-semibold"
                  : "text-gray-600 font-medium hover:text-gray-900"
                }`}
            >
              {title}
            </Link>
          ))}

          <div className="border-t border-gray-100 mt-3 pt-4 flex flex-col gap-2">
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 text-center text-sm font-medium text-gray-700
                         border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/register"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 text-center text-sm font-medium text-white
                         bg-teal-800 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}