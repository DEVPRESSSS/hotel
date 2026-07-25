import { Outlet } from "react-router-dom"
import { FooterSection } from "../components/Footer"
import { NavBarDefault } from "../components/Navbar"

export function PublicLayout(){
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <NavBarDefault/>
                {/*Render main layout*/}
                <main className="flex-1 
                        flex flex-col m-5">
                        <Outlet/>
                </main>
            <FooterSection/>
        </div>
    )
}