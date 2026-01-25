 import React, { useEffect, useState } from "react";
 import Title from "./Title";
 import { useShopContext } from "../context/ShopContext";
 import ProductCard from "./ProductCard";

 const BestSeller = () => {
   const { products } = useShopContext();
   const [bestSeller, setBestSeller] = useState([]);

   useEffect(() => {
     if (products?.length) {
       const bestsellerProducts = products.filter(
         (item) => item.bestseller === true,
       );
       setBestSeller(bestsellerProducts.slice(0, 5));
     }
   }, [products]);

   return (
     <div className="w-[90%] mx-auto my-10">
       {/* TITLE */}
       <div className="flex items-center justify-center flex-col text-center">
         <Title text1="BEST" text2="SELLER" />
         <p className="text-gray-700 text-sm sm:text-base my-2 max-w-xl">
           Our Best Sellers are loved for a reason. Handpicked favorites with
           premium quality, trending designs, and unmatched comfort.
         </p>
       </div>

       {/* PRODUCTS GRID */}
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-6">
         {bestSeller.map((item) => (
           <ProductCard
             key={item._id}
             id={item._id}
             name={item.name}
             price={item.price}
             image={item.image}
           />
         ))}
       </div>
     </div>
   );
 };

 export default BestSeller;
