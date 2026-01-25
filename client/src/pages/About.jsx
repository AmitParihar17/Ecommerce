 import React from "react";
 import Title from "../components/Title";
 import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

 const About = () => {
   return (
     <div className="flex flex-col items-center w-full my-5">
       {/* ABOUT US */}
       <Title text1={"ABOUT"} text2={"US"} />

       <div className="flex flex-col md:flex-row w-[90%] max-w-6xl mx-auto items-center gap-8 my-6">
         {/* Left Side Image */}
         <div className="w-full md:w-1/2 flex justify-center">
           <img
             src={assets.about_img}
             className="w-full max-w-[400px] object-cover"
             alt="About"
           />
         </div>

         {/* Right Side Content */}
         <div className="w-full md:w-1/2 text-gray-800 text-sm md:text-base">
           <p className="mb-4">
             Forever was born out of a passion for innovation and a desire to
             revolutionize the way people shop online. Our journey began with a
             simple idea: to provide a platform where customers can easily
             discover, explore, and purchase a wide range of products from the
             comfort of their homes.
           </p>

           <p className="mb-4">
             Since our inception, we've worked tirelessly to curate a diverse
             selection of high-quality products that cater to every taste and
             preference—from fashion and beauty to electronics and home
             essentials.
           </p>

           <b className="block mb-2">Our Mission</b>
           <p>
             Our mission at Forever is to empower customers with choice,
             convenience, and confidence. We are dedicated to providing a
             seamless shopping experience that exceeds expectations from
             browsing to delivery and beyond.
           </p>
         </div>
       </div>

       {/* WHY CHOOSE US */}
       <Title text1={"WHY"} text2={"CHOOSE US"} />

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] max-w-6xl mx-auto py-6">
         <div className="border p-6 text-center rounded-sm">
           <b className="block mb-2">Quality Assurance</b>
           <p className="text-sm text-gray-700">
             Quality Assurance ensures that products and services meet defined
             standards of quality, reliability, and performance.
           </p>
         </div>

         <div className="border p-6 text-center rounded-sm">
           <b className="block mb-2">Convenience</b>
           <p className="text-sm text-gray-700">
             With our user-friendly interface and hassle-free ordering process,
             shopping has never been easier.
           </p>
         </div>

         <div className="border p-6 text-center rounded-sm">
           <b className="block mb-2">Exceptional Customer Service</b>
           <p className="text-sm text-gray-700">
             Our dedicated support team is always ready to assist you, ensuring
             your satisfaction remains our top priority.
           </p>
         </div>
       </div>
       <NewsLetter />
     </div>
   );
 };

 export default About;
