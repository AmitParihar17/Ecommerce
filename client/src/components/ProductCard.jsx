import React from 'react'
import { Link } from 'react-router-dom'
import { useShopContext } from '../context/ShopContext'

const ProductCard = ({id,image,price,name}) => {
    const {currency} = useShopContext()
  return (
    <Link to={`/collection/${id}`}>
    <div className='overflow-hidden'>
        <img className='hover:scale-110 object-cover transition-transform duration-300 ease-in-out' src={image[0]} alt="" />
    </div>
    <p className='text-gray-700'>{name}</p>
    <p className='text-gray-700 font-bold'>{currency}{price}</p>
    </Link>
  )
}

export default ProductCard
