import React, { useEffect, useState } from 'react'
import { useShopContext } from '../context/ShopContext'
import Title from "./Title"
import ProductCard from './ProductCard'

const LatestCollection = () => {
    const {products} = useShopContext()
    const [latestProducts,setLatestProducts] = useState([])

    useEffect(() => {
        setLatestProducts(products.slice(0,10))
    },[products])


  return (
    <div className=" my-10 w-[90%] mx-auto">
      <div className="flex items-center justify-center flex-col">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="text-gray-700 py-2 ">
          Discover our latest collection, where modern style meets everyday
          comfort.
        </p>
      </div>
      {/* Rendering Product */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 px-5 my-4'>
        {latestProducts.map((item, index) => (
          <ProductCard
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestCollection
