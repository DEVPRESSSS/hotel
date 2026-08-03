import { Outlet } from "react-router-dom"
import { FooterSection } from "../components/Footer"
import { NavBarGuest } from "../components/NavbarSidebar/NavbarGuest"

export function GuestLayout(){
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <NavBarGuest/>
                {/*Render main layout*/}
                <main className="flex-1 
                        flex flex-col m-5">
                        <Outlet/>
                </main>
            <FooterSection/>
        </div>
    )
}