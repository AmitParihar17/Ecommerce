 import React from "react";
 import Title from "../components/Title";
 import { useShopContext } from "../context/ShopContext";
 import { assets } from "../assets/assets";

 const DeliveryInformation = () => {
   const { currency, shippingFee,navigate } = useShopContext();

   return (
     <div className="flex w-full gap-10 flex-col lg:flex-row">
       {/* LEFT SIDE */}
       <div className="w-full lg:w-[45%] flex justify-center">
         <form className="w-full max-w-md">
           <Title text1="Delivery" text2="Information" />

           <div className="mt-5 flex gap-3">
             <input
               className="w-full py-3 px-4 border rounded-sm outline-none"
               type="text"
               placeholder="First Name"
             />
             <input
               className="w-full py-3 px-4 border rounded-sm outline-none"
               type="text"
               placeholder="Last Name"
             />
           </div>

           <div className="mt-4">
             <input
               className="w-full py-3 px-4 border rounded-sm outline-none"
               type="email"
               placeholder="Email address"
             />
           </div>

           <div className="mt-4">
             <input
               className="w-full py-3 px-4 border rounded-sm outline-none"
               type="text"
               placeholder="Street"
             />
           </div>

           <div className="mt-4 flex gap-3">
             <input
               className="w-full py-3 px-4 border rounded-sm outline-none"
               type="text"
               placeholder="City"
             />
             <input
               className="w-full py-3 px-4 border rounded-sm outline-none"
               type="text"
               placeholder="State"
             />
           </div>

           <div className="mt-4 flex gap-3">
             <input
               className="w-full py-3 px-4 border rounded-sm outline-none"
               type="text"
               placeholder="Zipcode"
             />
             <input
               className="w-full py-3 px-4 border rounded-sm outline-none"
               type="text"
               placeholder="Country"
             />
           </div>

           <div className="mt-4">
             <input
               className="w-full py-3 px-4 border rounded-sm outline-none"
               type="text"
               placeholder="Phone"
             />
           </div>
         </form>
       </div>

       {/* RIGHT SIDE */}
       <div className="w-full lg:w-[30%] mx-auto  p-6 rounded-sm mt-6 lg:mt-[8%]">
         <Title text1="CART" text2="TOTALS" />

         <div className="mt-4 flex flex-col gap-2">
           <div className="flex justify-between text-gray-600">
             <p>Subtotal</p>
             <p>{currency}20</p>
           </div>

           <div className="flex justify-between text-gray-600">
             <p>Shipping Fee</p>
             <p>
               {currency}
               {shippingFee}
             </p>
           </div>

           <div className="flex justify-between font-medium">
             <p>Total</p>
             <p>{currency}700</p>
           </div>
         </div>

         <div className="mt-6">
           <Title text1="PAYMENT" text2="Method" />

           <div className="mt-4 flex gap-3">
             <label className="flex items-center gap-2 border py-2 px-4 cursor-pointer">
               <input
                 type="radio"
                 name="payment"
                 className="accent-green-600"
               />
               <img className="w-12" src={assets.stripe_logo} alt="Stripe" />
             </label>

             <label className="flex items-center gap-2 border py-2 px-4 cursor-pointer">
               <input
                 type="radio"
                 name="payment"
                 className="accent-green-600"
               />
               <img
                 className="w-12"
                 src={assets.razorpay_logo}
                 alt="Razorpay"
               />
             </label>

             <label className="flex items-center gap-2 border py-2 px-4 cursor-pointer">
               <input
                 type="radio"
                 name="payment"
                 className="accent-green-600"
               />
               <p className="text-gray-600 text-sm">Cash On Delivery</p>
             </label>
           </div>

           <div className="flex justify-end mt-5">
             <button onClick={() => navigate("/orders")} className="bg-black text-white py-3 cursor-pointer px-6 rounded-sm hover:opacity-90">
               Place Order
             </button>
           </div>
         </div>
       </div>
     </div>
   );
 };

 export default DeliveryInformation;
