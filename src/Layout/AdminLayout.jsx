import { Outlet } from "react-router-dom"
import { HeaderPage } from "../components/Dashboard/Header"
import { SidebarLink } from "../components/NavbarSidebar/SidebarLinks"

export function AdminLayout() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <aside className="w-48 bg-gray-50 border-r border-gray-200 flex flex-col p-2">
        <p className="text-sm text-center
                 font-medium text-gray-900
                 px-3 py-3 mb-1
                 border-b border-gray-200">
                 Pennacle
        </p>
        <nav className="flex flex-col gap-1 mt-2">
            {/*Dashboard*/}
            <SidebarLink
                to={"/dashboard"}
                icon = { <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-6">
                         <path strokeLinecap="round" 
                            strokeLinejoin="round"
                             d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                }
                children={"Dashboard"}
                />

            {/*Room*/}
            <SidebarLink
                to={"/room"}
                icon = 
                    { 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>

                }
                children={"Room"}
                />
            {/*Permission */}
            <SidebarLink
                to={"/permission"}
                icon = 
                    { 
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                   </svg>
                }
                children={"Permission"}
                />
        </nav>
      </aside>

      {/* Main */}
      <div className="flex flex-col flex-1">
        <HeaderPage />
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>

    </div>
  )
}

