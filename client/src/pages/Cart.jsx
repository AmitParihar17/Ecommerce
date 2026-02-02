 import React from "react";
 import Title from "../components/Title";
 import { useShopContext } from "../context/ShopContext";
 import { assets } from "../assets/assets";

 const Cart = () => {
   const { cartItems, currency, shippingFee, updateQuantity } =
     useShopContext();

   const subTotal = cartItems.reduce(
     (total, item) => total + item.price * item.quantity,
     0,
   );

   const total = subTotal + shippingFee;

   return (
     <div className="px-4 md:px-10 py-8">
       <Title text1="YOUR" text2="CART" />

       {cartItems.length === 0 && (
         <p className="text-center mt-6">Your cart is empty</p>
       )}

       {cartItems.map((item) => (
         <div
           key={item.id}
           className="relative border-t border-b py-4 flex items-center"
         >
           {/* LEFT : IMAGE + DETAILS */}
           <div className="flex items-center gap-4">
             <img className="w-20 object-cover" src={item.image[0]} alt="" />

             <div>
               <p className="font-medium">{item.name}</p>
               <p className="text-sm text-gray-500">
                 Size: {item.size.join(", ")}
               </p>
               <p className="font-semibold">
                 {currency}
                 {item.price}
               </p>
             </div>
           </div>

           {/* 🔥 CENTER : QUANTITY */}
           <div className="absolute left-1/2 -translate-x-1/2">
             <div className="flex items-center border px-3 py-1 gap-3">
               <button
                 onClick={() => updateQuantity(item.id, item.quantity - 1)}
                 disabled={item.quantity === 1}
                 className={`text-lg ${
                   item.quantity === 1
                     ? "text-gray-400 cursor-not-allowed"
                     : "cursor-pointer"
                 }`}
               >
                 −
               </button>

               <span className="w-6 text-center font-medium">
                 {item.quantity}
               </span>

               <button
                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
                 className="text-lg cursor-pointer"
               >
                 +
               </button>
             </div>
           </div>

           {/* RIGHT : DELETE */}
           <div className="ml-auto">
             <img src={assets.bin_icon} alt="" className="w-5 cursor-pointer" />
           </div>
         </div>
       ))}

       {/* TOTALS */}
       <div className="mt-10 max-w-md ml-auto  p-4">
         <Title text1="CART" text2="TOTALS" />

         <div className="flex justify-between mt-4 text-sm">
           <p>Subtotal</p>
           <p>
             {currency}
             {subTotal}
           </p>
         </div>

         <div className="flex justify-between mt-2 text-sm">
           <p>Shipping Fee</p>
           <p>
             {currency}
             {shippingFee}
           </p>
         </div>

         <div className="flex justify-between font-bold mt-3 text-lg">
           <p>Total</p>
           <p>
             {currency}
             {total}
           </p>
         </div>

         <button className="w-full bg-black text-white py-2 mt-5">
           Proceed to checkout
         </button>
       </div>
     </div>
   );
 };

 export default Cart;
