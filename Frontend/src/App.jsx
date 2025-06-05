 import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Contact from  './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Add from './Pages/Add';
import Complete from './Pages/Complete';
 
 function App() {
   return (
     <div className=''> 
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/complete' element={<Complete/>} />
        </Routes>
        <Footer/>
       </BrowserRouter>
     </div>
   )
 }
 
 export default App