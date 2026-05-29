
import { NavBarDefault } from './components/Navbar'
import { FooterSection } from './components/Footer'
import {BrowserRouter} from 'react-router-dom'

export default function App() {

  return (
    <>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
          <NavBarDefault/> 
            {/* <main className="grow bg-gray-100 m-2 rounded-lg"> */}
            <main className="grow m-2 rounded-lg">
              {

              }
            </main>
          <FooterSection/>
      </div>
    </BrowserRouter>
 
    </>
  )
}


