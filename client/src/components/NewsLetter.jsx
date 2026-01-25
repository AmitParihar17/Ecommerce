 import React from "react";

 const NewsLetter = () => {
   return (
     <div className="my-10 px-4">
       <div className="flex justify-center">
         <div className="flex flex-col items-center text-center max-w-xl w-full">
           
           <h1 className="text-2xl sm:text-3xl font-medium">
             Subscribe now & get 20% off
           </h1>

        
           <p className="my-4 text-gray-700 text-sm sm:text-base">
             Join our newsletter for exclusive deals, early access to sales, and
             the latest drops you don’t want to miss.
           </p>

           
           <div className="flex flex-col sm:flex-row w-full gap-3">
             <input
               className="border px-4 py-3 w-full outline-none"
               type="email"
               placeholder="Enter your email"
             />
             <button className="bg-black text-white px-6 py-3 cursor-pointer whitespace-nowrap">
               Subscribe
             </button>
           </div>
         </div>
       </div>
     </div>
   );
 };

 export default NewsLetter;
