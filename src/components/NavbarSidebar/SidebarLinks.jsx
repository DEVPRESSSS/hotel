import { NavLink } from "react-router-dom";

export function SidebarLink({to, icon, children}){
    return ( 
        <NavLink
            to={to}
            className={({isActive}) =>
               `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm  transition-colors ` +
               (isActive 
                    ? "bg-green-700 text-white"
                    : "text-gray-600 hover:bg-gray-100 font-bold hover:text-gray-900")
            }
        >
            <span>
                {icon}
            </span>
            {children}
        </NavLink>

    )
}