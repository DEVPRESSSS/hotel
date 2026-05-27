import { AuthDefault } from "./Auth";
import logo from "../assets/hero.png";

export function NavBarDefault() {

    const navbarButtons = [
        { title: 'Home', id: 1 },
        { title: 'About Us', id: 2 },
        { title: 'Services', id: 3 },
        { title: 'Book Now', id: 4 },
    ];

    return (
        <div className="w-full flex items-center shadow-sm px-4 h-16">

            {/* Logo + Company Name */}
            <div className="flex items-center gap-2 flex-1">
                <img src={logo} alt="company logo" className="w-10 h-10 object-contain" />
                <h4 className="text-purple-700 font-bold whitespace-nowrap">Royal Park</h4>
            </div>

            {/* Center Nav */}
            <ul className="flex items-center gap-1 flex-1 justify-center">
                {navbarButtons.map(p => (
                    <li
                        key={p.id}
                        className={`
                            px-4 py-2 rounded-lg text-sm whitespace-nowrap cursor-pointer
                            transition-all duration-200
                            ${p.title === "Book Now"
                                ? "bg-purple-700 text-white"
                                : "hover:text-purple-700"}
                        `}
                    >
                        {p.title}
                    </li>
                ))}
            </ul>

            {/* Auth */}
            <ul className="flex items-center gap-3 flex-1 justify-end cursor-pointer">
                <AuthDefault />
            </ul>

        </div>
    );
}