 import React from "react";

 const Title = ({text1,text2}) => {
   return (
     <div className="flex items-center gap-3">
       <p className="text-gray-600 text-3xl">{text1}</p>
       <p className="text-3xl font-semibold">{text2}</p>
       <span className="w-10 border-t-2 border-gray-700"></span>
     </div>
   );
 };

 export default Title;
