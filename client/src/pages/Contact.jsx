 import React from "react";
 import Title from "../components/Title";
 import { assets } from "../assets/assets";

 const Contact = () => {
   return (
     <div className="w-full flex flex-col items-center my-8">
       <Title text1={"CONTACT"} text2={"US"} />

       <div className="w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 my-10">
         {/* Left Image */}
         <div className="w-full md:w-1/2 flex justify-center">
           <img
             src={assets.contact_img}
             alt="Contact"
             className="w-full max-w-[400px] object-cover"
           />
         </div>

         {/* Right Content */}
         <div className="w-full md:w-1/2 text-gray-700 text-sm md:text-base">
           <div className="mb-6">
             <b className="block mb-2 text-black">Our Store</b>
             <p>54709 Willms Station</p>
             <p className="mb-2">Suite 350, Washington, USA</p>

             <p>
               <span className="text-black font-medium">Tel:</span> (415)
               555-0132
             </p>
             <p>
               <span className="text-black font-medium">Email:</span>{" "}
               <a
                 href="mailto:amitparihar1208@gmail.com"
                 className="text-blue-600 hover:underline"
               >
                 amitparihar1208@gmail.com
               </a>
             </p>
           </div>

           <div>
             <b className="block mb-2 text-black">Careers at Forever</b>
             <p className="mb-4">
               Learn more about our teams and current job openings.
             </p>

             <button className="cursor-pointer px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition">
               Explore Jobs
             </button>
           </div>
         </div>
       </div>
     </div>
   );
 };

 export default Contact;
