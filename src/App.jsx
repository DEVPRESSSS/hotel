
import { NavBarDefault } from './components/Navbar'
import { FooterSection } from './components/Footer'
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes} from "react-router-dom";
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/AboutUs';
import { BookPage } from './pages/Book';

import { LoginPage } from './pages/Auth/Login';
import { RoomPage } from './pages/Admin/Room';
import { RegisterPage } from './pages/Auth/Register';
import { MainPage } from './pages/Admin/AdminMainLayout';
import { GuestDashboardPage } from './pages/Guest/GuestDashboard';
export default function App() {

  return (
    <>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
          <NavBarDefault/> 
            {/* <main className="grow bg-gray-100 m-2 rounded-lg"> */}
            <main className="flex-1 flex flex-col m-5">
                            
            <Routes>
              <Route path="/" element = {<HomePage/>} />
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/book" element={<BookPage/>}/>
              <Route path="/login" element ={<LoginPage/>} />
              <Route path="/register" element ={<RegisterPage/>} />
              <Route path="/room" element ={<RoomPage/>} />
              <Route path="/addroom" element ={<AboutPage/>} />
              <Route path="/dashboard" element ={<MainPage/>} />
              <Route path="/guestdashboard" element ={<GuestDashboardPage/>} />
            </Routes>
            
              
            </main>
          <FooterSection/>
      </div>
    </BrowserRouter>
 
    </>
  )
}


