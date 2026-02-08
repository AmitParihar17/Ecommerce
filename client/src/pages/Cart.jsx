 import React from "react";
 import Title from "../components/Title";
 import { useShopContext } from "../context/ShopContext";
 import { assets } from "../assets/assets";

 const Cart = () => {
   const {
     cartItems,
     currency,
     shippingFee,
     increaseQuantity,
     navigate,
     removeFromCart,
     decreseQuantity,
   } = useShopContext();

   const subTotal = cartItems.reduce(
     (total, item) => total + item.price * item.quantity,
     0,
   );

   const total = subTotal + shippingFee;

   return (
     <div className="px-4 md:px-10 py-8">
       <Title text1="YOUR" text2="CART" />

       {cartItems.length === 0 && (
         <div className="flex flex-col items-center justify-center mt-16 text-center">
           <img
             src={assets.emptyCart}
             alt="Empty Cart"
             className="w-150 mb-6 opacity-80"
           />

           <h2 className="text-xl font-semibold mb-2">
             Your cart feels lonely 😔
           </h2>

           <p className="text-gray-500 max-w-sm">
             Looks like you haven’t added anything yet. Go ahead and explore
             some amazing products!
           </p>

           <button
             onClick={() => navigate("/collection")}
             className="mt-6 px-6 py-2 bg-black text-white rounded cursor-pointer"
           >
             Continue Shopping
           </button>
         </div>
       )}

       {cartItems.map((item) => (
         <div
           key={`${item.id}-${item.size}`}
           className="relative border-t border-b py-4 flex items-center"
         >
           {/* LEFT : IMAGE + DETAILS */}
           <div className="flex items-center gap-4">
             <img className="w-20 object-cover" src={item.image[0]} alt="" />

             <div>
               <p className="font-medium">{item.name}</p>
               <p className="text-sm text-gray-500">Size: Size: {item.size}</p>
               <p className="font-semibold">
                 {currency}
                 {item.price}
               </p>
             </div>
           </div>

           <div className="absolute left-1/2 -translate-x-1/2">
             <div className="flex items-center border px-3 py-1 gap-3">
               <button
                 onClick={() => decreseQuantity(item.id, item.size)}
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
                 onClick={() => increaseQuantity(item.id, item.size)}
                 className="text-lg cursor-pointer"
               >
                 +
               </button>
             </div>
           </div>

           <div className="ml-auto">
             <img
               onClick={() => removeFromCart(item.id, item.size)}
               src={assets.bin_icon}
               alt=""
               className="w-5 cursor-pointer"
             />
           </div>
         </div>
       ))}

       {cartItems.length > 0 && (
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

           <button
             onClick={() => navigate("/delivery-information")}
             className="w-full bg-black text-white py-2 mt-5 cursor-pointer rounded-sm"
           >
             Proceed to checkout
           </button>
         </div>
       )}
     </div>
   );
 };

 export default Cart;
