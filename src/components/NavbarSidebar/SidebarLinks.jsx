import { NavLink } from "react-router-dom";

export function SidebarLink({to, icon, children}){
    return ( 
        <NavLink
            to={to}
            className={({isActive}) =>
               `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ` +
               (isActive 
                    ? "bg-gray-100 text-teal-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900")
            }
        >
            <span>
                {icon}
            </span>
            {children}
        </NavLink>

    )
}