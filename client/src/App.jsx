 import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import { Routes,Route } from 'react-router-dom'
import MyProfile from './pages/Myprofile'
import Orders from './pages/Orders'
import Footer from './components/Footer'
import SignUP from './pages/SignUP'
import ProductDetails from './pages/ProductDetails'

 
 const App = () => {
   return (
     <div>
      <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/collection" element={<Collection />} />
         <Route path='/collection/:id' element={<ProductDetails />} />
         <Route path="/contact" element={<Contact />} />
         <Route path='/my-profile' element={<MyProfile/>} />
         <Route path='/orders' element={<Orders />}  />
         <Route path='/signup' element={<SignUP />} />
         
       </Routes>
       
       <Footer />
     </div>
   );
 }
 
 export default App
 