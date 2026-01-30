 import React, { useMemo, useState } from "react";
 import Title from "../components/Title";
 import ProductCard from "../components/ProductCard";
 import { useShopContext } from "../context/ShopContext";

 const Collection = () => {
   const { products } = useShopContext();

   //  state
   const [sortOrder, setSortOrder] = useState("");
   const [categories, setCategories] = useState([]);
   const [types, setTypes] = useState([]);

   // checkbox handler
   const handleCheckbox = (value, state, setState) => {
     setState((prev) =>
       prev.includes(value)
         ? prev.filter((item) => item !== value)
         : [...prev, value],
     );
   };

const filteredProducts = useMemo(() => {
  let temp = products.slice();

  // CATEGORY FILTER
  if (categories.length > 0) {
    temp = temp.filter((p) => categories.includes(p.category.toLowerCase()));
  }

  // TYPE FILTER (subCategory)
  if (types.length > 0) {
    temp = temp.filter((p) => types.includes(p.subCategory.toLowerCase()));
  }

  // SORT
  if (sortOrder === "low-high") {
    temp.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high-low") {
    temp.sort((a, b) => b.price - a.price);
  }

  return temp;
}, [products, categories, types, sortOrder]);

   return (
     <div className="w-full px-4 md:px-8 my-6">
       {/* Header */}
       <div className="relative flex items-center justify-end mb-6 min-h-[48px]">
         <div className="absolute left-1/2 -translate-x-1/2">
           <Title text1="ALL" text2="COLLECTIONS" />
         </div>

         {/* Sort */}
         <div className="flex items-center gap-2">
           <p className="text-sm font-medium whitespace-nowrap">Sort by:</p>
           <select
             className="border rounded-md px-3 py-1 text-sm"
             value={sortOrder}
             onChange={(e) => setSortOrder(e.target.value)}
           >
             <option value="">Select</option>
             <option value="low-high">Low to High</option>
             <option value="high-low">High to Low</option>
           </select>
         </div>
       </div>

       {/* Layout */}
       <div className="flex flex-col md:flex-row gap-6">
         {/* Filters */}
         <aside className="w-full md:w-[20%] rounded-xl p-4 space-y-6">
           <p className="font-bold text-lg">Filters</p>

           {/* Categories */}
           <div className="space-y-2 border border-gray-700 p-3 rounded-lg">
             <p className="font-semibold">Categories</p>
             <label className="flex items-center gap-2 text-sm">
               <input
                 type="checkbox"
                 onChange={() =>
                   handleCheckbox("men", categories, setCategories)
                 }
               />
               Men
             </label>
             <label className="flex items-center gap-2 text-sm">
               <input
                 type="checkbox"
                 onChange={() =>
                   handleCheckbox("women", categories, setCategories)
                 }
               />
               Women
             </label>
             <label className="flex items-center gap-2 text-sm">
               <input
                 type="checkbox"
                 onChange={() =>
                   handleCheckbox("kids", categories, setCategories)
                 }
               />
               Kids
             </label>
           </div>

           {/* Type */}
           <div className="space-y-2 border border-gray-700 p-3 rounded-lg">
             <p className="font-semibold">Type</p>
             <label className="flex items-center gap-2 text-sm">
               <input
                 type="checkbox"
                 onChange={() => handleCheckbox("topwear", types, setTypes)}
               />
               Topwear
             </label>
             <label className="flex items-center gap-2 text-sm">
               <input
                 type="checkbox"
                 onChange={() => handleCheckbox("bottomwear", types, setTypes)}
               />
               Bottomwear
             </label>
             <label className="flex items-center gap-2 text-sm">
               <input
                 type="checkbox"
                 onChange={() => handleCheckbox("winterwear", types, setTypes)}
               />
               Winterwear
             </label>
           </div>
         </aside>

         {/* Products */}
         <section className="w-full md:w-[80%]">
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
             {filteredProducts.length === 0 && (
               <p className="col-span-full text-center text-gray-500">
                 No products found
               </p>
             )}

             {filteredProducts.map((item) => (
               <ProductCard
                 key={item._id}
                 id={item._id}
                 name={item.name}
                 price={item.price}
                 image={item.image}
               />
             ))}
           </div>
         </section>
       </div>
     </div>
   );
 };

 export default Collection;
