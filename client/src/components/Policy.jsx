 import React from "react";
 import { assets } from "../assets/assets";

 const Policy = () => {
   return (
     <div className="my-10 py-10 w-[90%] mx-auto">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-600">
         <div className="flex flex-col items-center text-center">
           <img
             className="w-12 mb-3"
             src={assets.exchange_icon}
             alt="Exchange policy"
           />
           <p className="text-sm sm:text-base">
             We offer hassle free exchange policy
           </p>
         </div>

         <div className="flex flex-col items-center text-center">
           <img
             className="w-12 mb-3"
             src={assets.quality_icon}
             alt="Return policy"
           />
           <p className="text-sm sm:text-base">
             We provide 7 days free return policy
           </p>
         </div>

         <div className="flex flex-col items-center text-center">
           <img
             className="w-12 mb-3"
             src={assets.support_img}
             alt="Customer support"
           />
           <p className="text-sm sm:text-base">
             We provide 24/7 customer support
           </p>
         </div>
       </div>
     </div>
   );
 };

 export default Policy;
