
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes} from "react-router-dom";
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/AboutUs';
import { BookPage } from './pages/Book';
import { LoginPage } from './pages/Auth/Login';
import { RoomPage } from './pages/Admin/Room';
import { PermissionPage } from './pages/Admin/Permissions/Permission';
import { RegisterPage } from './pages/Auth/Register';
import { GuestDashboardPage } from './pages/Guest/GuestDashboard';
import { PublicLayout } from './Layout/PublicLayout';
import { AdminLayout } from './Layout/AdminLayout';
import { DashboardOverviewPage } from './pages/Admin/Dashboard/DashboardOverview';
import { UserPage } from './pages/Admin/Users/User';
import { UpsertFormPage } from './pages/Admin/Upsert/Forms/UpsertForm';
import { ToastContainer } from 'react-toastify';
import { BookingPage } from './pages/Admin/Booking/Booking';
import { RoomTypePage } from './pages/Admin/Room/RoomType';

export default function App() {
  return (
    <>
      <BrowserRouter>
              <Routes>
                <Route element = { <PublicLayout/>}>
                    <Route path="/" element = {<HomePage/>} />
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/book" element={<BookPage/>}/>
                    <Route path="/login" element ={<LoginPage/>} />
                    <Route path="/register" element ={<RegisterPage/>} />
                </Route>
                <Route element = {<AdminLayout/>}>
                    {/*Pages*/}
                    <Route path="/room" element ={<RoomPage/>} />
                    <Route path="/addroom" element ={<AboutPage/>} />
                    <Route path="/dashboard" element ={<DashboardOverviewPage/>} />
                    <Route path="/guestdashboard" element ={<GuestDashboardPage/>} />
                    <Route path="/permission" element ={<PermissionPage/>} />
                    <Route path="/booking" element ={<BookingPage/>} />            
                    <Route path="/user" element ={<UserPage/>} />
                    <Route path="/roomtype" element ={<RoomTypePage/>} />

                    {/*Upsert Form Page*/}
                    <Route
                        path="/upsert/:entity/:id?"
                        element={<UpsertFormPage />}
                    />                   
                     
                </Route>
              </Routes>
              <ToastContainer
                position="top-right"
                autoClose={3000}
            />
      </BrowserRouter>
 
    </>
  )
}


