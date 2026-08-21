
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
import { RolePage } from './pages/Admin/Roles/Role';
import { RolePermissionPage } from './pages/Admin/Permissions/RolePermission';
import { ServicePage } from './pages/Services';
import { ProductPage } from './pages/Product';
import { ViewSelectedPage } from './pages/ViewSelected';
import { RoomAmenityPage } from './pages/Admin/Room/RoomAmenity';
import { AmenityPage } from './pages/Admin/Room/Amenity';
import { SelectedRoomPage } from './pages/SelectedRoom';
import { GuestLayout } from './Layout/GuestLayout';
import { ProtectedRoute } from './components/Routing/ProtectedRoute';
import { UnauthorizedPage } from './pages/Errors/Unauthorized';

export default function App() {
  return (
    <>
      <BrowserRouter>
              <Routes>
                <Route element = { <GuestLayout/>}>
                    <Route path="/guestdashboard" element = {
                      <ProtectedRoute allowedRoles={["Customer"]}>
                          <GuestDashboardPage/>
                      </ProtectedRoute>
                    }/> 
                </Route>

                <Route path="/unauthorized"
                     element = {<UnauthorizedPage/>}/>     

                <Route element = { <PublicLayout/>}>
                    <Route path="/" element = {<HomePage/>} />
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/book" element={<BookPage/>}/>
                    <Route path="/services" element={<ServicePage/>}/>
                    <Route path="/product" element ={<ProductPage/>} />
                    <Route path="/login" element ={<LoginPage/>} />
                    <Route path="/register" element ={<RegisterPage/>} />
                    <Route path= "/viewselectedproduct/:id?" element = {<ViewSelectedPage/>}/>
                    <Route path= "/selectedroom/:id?" element = {<SelectedRoomPage/>}/>
                </Route>
                
                <Route element = {<AdminLayout/>}>
                    {/*Pages*/}
                    <Route path="/room" element ={<RoomPage/>} />
                    <Route path="/addroom" element ={<AboutPage/>} />
                    <Route path="/dashboard" 
                          element ={<ProtectedRoute allowedRoles={["Admin"]}>
                          <DashboardOverviewPage/>
                      </ProtectedRoute>} />
            
                    <Route path="/permission" element ={<PermissionPage/>} />
                    <Route path="/booking" element ={<BookingPage/>} />            
                    <Route path="/user" element ={<UserPage/>} />
                    <Route path="/roomtype" element ={<RoomTypePage/>} />
                    <Route path="/role" element ={<RolePage/>} />
                    <Route path="/roomamenity" element ={<RoomAmenityPage/>} />
                    <Route path="/amenity" element ={<AmenityPage/>} />
                    <Route path="/rolepermission" element ={<RolePermissionPage/>} />

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


