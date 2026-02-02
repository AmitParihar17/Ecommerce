import { createContext, useContext, useState } from 'react'
import { products } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

export const ShopContext = createContext()

export const ShopContextProvider = ({children}) => {
    const navigate = useNavigate()
    const [cartItems,setCartItems] = useState([])
    const currency = "$";
    const shippingFee = 10
    

   

    const addToCart = (product,selectSize) => {

        console.log(product,"p");
        
        setCartItems((prev) => {
            return [...prev, { 
                id: product._id,
                name : product.name,
                price : product.price,
                image : product.image,
                size : selectSize,
                quantity : 1
             }]
        })
    }

    const value = {currency,products,navigate,addToCart,cartItems,shippingFee}
    return  <ShopContext.Provider value={value}>
         {children}
     </ShopContext.Provider>
}

export const useShopContext = () => {
    return useContext(ShopContext)
}
