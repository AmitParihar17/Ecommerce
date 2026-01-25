 import React from "react";
 import { assets } from "../assets/assets";

 const MainBanner = () => {
   return (
     <div className="w-full md:w-3/4 mx-auto border border-gray-500 rounded-2xl mt-8">
       <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-10 md:py-14">
         {/* LEFT TEXT */}
         <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
           <div className="flex items-center justify-center md:justify-start gap-2">
             <span className="w-8 border-t-2 border-gray-600"></span>
             <p className="text-sm uppercase tracking-wider text-gray-600">
               our bestsellers
             </p>
           </div>

           <h1 className="text-3xl md:text-4xl font-semibold">
             Latest Arrivals
           </h1>

           <div className="flex items-center justify-center md:justify-start gap-2 cursor-pointer">
             <p className="text-base font-medium">Shop Now</p>
             <span className="w-8 border-t-2 border-gray-600"></span>
           </div>
         </div>

         {/* RIGHT IMAGE */}
         <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
           <img
             className="w-[300px] md:w-[600px] object-contain"
             src={assets.hero_img}
             alt="hero"
           />
         </div>
       </div>
     </div>
   );
 };

 export default MainBanner;
