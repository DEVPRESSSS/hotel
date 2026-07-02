
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
                    <Route path="/room" element ={<RoomPage/>} />
                    <Route path="/addroom" element ={<AboutPage/>} />
                    <Route path="/dashboard" element ={<DashboardOverviewPage/>} />
                    <Route path="/guestdashboard" element ={<GuestDashboardPage/>} />
                    <Route path="/permission" element ={<PermissionPage/>} />
                    <Route path="/upsert/:entity" element ={<UpsertFormPage/>} />
                    <Route path="/user" element ={<UserPage/>} />
                </Route>
              </Routes>
      </BrowserRouter>
 
    </>
  )
}


