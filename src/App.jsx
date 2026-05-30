
import { NavBarDefault } from './components/Navbar'
import { FooterSection } from './components/Footer'
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes} from "react-router-dom";
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/AboutUs';
import { BookPage } from './pages/Book';
import { LoginPage } from './pages/Auth/Login';
export default function App() {

  return (
    <>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
          <NavBarDefault/> 
            {/* <main className="grow bg-gray-100 m-2 rounded-lg"> */}
            <main className="flex-1 flex flex-col">
                            
            <Routes>
              <Route path="/" element = {<HomePage/>} />
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/book" element={<BookPage/>}/>
              <Route path="/login" element ={<LoginPage/>} />
            </Routes>
              
            </main>
          <FooterSection/>
      </div>
    </BrowserRouter>
 
    </>
  )
}


