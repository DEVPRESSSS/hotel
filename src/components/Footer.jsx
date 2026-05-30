import { Link } from "react-router-dom";

export function FooterSection() {
    return (
        <footer className="bg-teal-800 text-white">

            {/* Main footer content */}
            <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">

                {/* Brand column */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-semibold tracking-wide">Royal Park</h3>
                    <p className="text-teal-200 text-sm leading-relaxed">
                        Experience comfort and elegance in the heart of the city. Your home away from home.
                    </p>
                    <a href="tel:+639305959605" className="text-teal-300 text-sm hover:text-white transition-colors">
                        +63 930 595 9605
                    </a>
                </div>

                {/* Navigation column */}
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-semibold uppercase tracking-widest  mb-1">
                        Navigation
                    </h4>
                    {[
                        { label: "Home", to: "/" },
                        { label: "About Us", to: "/about" },
                        { label: "Services", to: "/services" },
                        { label: "Book Now", to: "/book" },
                    ].map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            className="text-sm text-teal-200 hover:text-white transition-colors w-fit"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Account column */}
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-1">
                        Account
                    </h4>
                    {[
                        { label: "Log In", to: "/login" },
                        { label: "Register", to: "/register" },
                        { label: "Forgot Password", to: "/forgotpassword" },
                    ].map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            className="text-sm text-teal-200 hover:text-white transition-colors w-fit"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-teal-700" />

            {/* Bottom bar */}
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-center items-center gap-2">
                <p className="text-teal-300 text-xs text-center">
                    © 2026 HMS — Royal Park Hotel. All rights reserved.
                </p>
                
            </div>

        </footer>
    );
}