import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/react.svg";

const NAV_LINKS = [
  { title: "Home",     path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/services" },
];

export function NavBarDefault() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="flex items-center h-16 px-6 gap-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Royal Park logo" className="w-9 h-9 object-contain" />
          <span className="text-teal-700 font-semibold text-[15px] whitespace-nowrap tracking-tight">
            Royal Park
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {NAV_LINKS.map(({ title, path }) => (
            <Link
              key={path}
              to={path}
              className={`px-3.5 py-2 rounded-lg text-sm transition-colors duration-150 whitespace-nowrap
                ${isActive(path)
                  ? "bg-teal-50 text-teal-700 font-medium"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                }`}
            >
              {title}
            </Link>
          ))}
          <a
            href="tel:+639305959605"
            className="px-3.5 py-2 rounded-lg text-sm text-teal-700 font-medium
                       hover:bg-teal-50 transition-colors duration-150 whitespace-nowrap"
          >
            +63 930 595 9605
          </a>
          <Link
            to="/book"
            className="ml-1 px-4 py-2 rounded-lg text-sm bg-teal-700 text-white font-medium
                       hover:bg-teal-800 transition-colors duration-150 whitespace-nowrap"
          >
            Book Now
          </Link>
        </nav>

        {/* Auth — desktop */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <button className="px-3.5 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50
                             hover:text-gray-800 transition-colors duration-150">
            Log in
          </button>
          <button className="px-3.5 py-2 rounded-lg text-sm border border-gray-200
                             text-gray-700 hover:bg-gray-50 transition-colors duration-150">
            Sign up
          </button>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden ml-auto p-1.5 rounded-lg text-gray-500 hover:bg-gray-50
                     transition-colors duration-150"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 px-4 py-3 flex flex-col gap-1 bg-white">
          {NAV_LINKS.map(({ title, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMobileOpen(false)}
              className={`px-3 py-2.5 rounded-lg text-sm transition-colors
                ${isActive(path)
                  ? "bg-teal-50 text-teal-700 font-medium"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                }`}
            >
              {title}
            </Link>
          ))}
          <a
            href="tel:+639305959605"
            className="px-3 py-2.5 rounded-lg text-sm text-teal-700 font-medium hover:bg-teal-50"
          >
            +63 930 595 9605
          </a>
          <Link
            to="/book"
            onClick={() => setMobileOpen(false)}
            className="mt-1 px-3 py-2.5 rounded-lg text-sm text-center bg-teal-700
                       text-white font-medium hover:bg-teal-800 transition-colors"
          >
            Book Now
          </Link>
          <div className="border-t border-gray-100 mt-2 pt-3 flex gap-2">
            <button className="flex-1 py-2 rounded-lg text-sm border border-gray-200
                               text-gray-600 hover:bg-gray-50 transition-colors">
              Log in
            </button>
            <button className="flex-1 py-2 rounded-lg text-sm bg-teal-700 text-white
                               font-medium hover:bg-teal-800 transition-colors">
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}