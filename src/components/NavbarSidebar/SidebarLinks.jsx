import { NavLink } from "react-router-dom";

export function SidebarLink({ to, icon, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
          isActive
            ? "bg-teal-800 text-white"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`
      }
    >
      <span className="shrink-0 w-5 h-5 flex items-center justify-center">
        {icon}
      </span>
      <span className="truncate">{children}</span>
    </NavLink>
  );
}