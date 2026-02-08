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
import ScrolltoTop from './components/ScrolltoTop'
import Cart from './pages/Cart'
import { Toaster } from "react-hot-toast";
import DeliveryInformation from './pages/DeliveryInformation'


 
 const App = () => {
   return (
     <div>
       <Toaster position="top-right" reverseOrder={false} />
       <Navbar />
       <ScrolltoTop />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/collection" element={<Collection />} />
         <Route path="/collection/:id" element={<ProductDetails />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/my-profile" element={<MyProfile />} />
         <Route path="/orders" element={<Orders />} />
         <Route path="/signup" element={<SignUP />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/delivery-information" element={<DeliveryInformation />} />
       </Routes>

       <Footer />
     </div>
   );
 }
 
 export default App
 