// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Nabbar from './component/Navbar'
import Home from './component/Home'
import Course from './component/Course'
import Services from './component/Services'
import Placement from "./component/Placement"
import Certificate from "./component/Certificate"
import About from "./component/About"
import Blog from "./component/Blog"
import Contact from "./component/Contact"
import Page404 from "./component/Page404"
import Applycertificate from "./component/Applycertificate"
import Verifycertificate from "./component/Verifycertificate"
import Downloadcertificate from "./component/Downloadcertificatee"

// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
    <Header/> 
    <Nabbar/>

    {/* routing section  */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Page404/>}/>
      <Route path='#' element={<Course/>}/>
      <Route path='#' element={<Services/>}/>
      <Route path='/placement' element={<Placement/>}/>
      <Route path='/certificate' element={<Certificate/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/apply-for-certificate' element={<Applycertificate/>}/>
      <Route path='/download-certificate' element={<Downloadcertificate/>}/>
      <Route path='/verify-certificate' element={<Verifycertificate/>}/>
      
     
      
    </Routes>
      
    </>
  )
}

export default App
